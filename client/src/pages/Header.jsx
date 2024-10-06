import logo from "../images/logo.png";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Detect clicks outside the menu to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Prevent body from scrolling horizontally when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowX = "hidden";
        } else {
            document.body.style.overflowX = "auto";
        }
    }, [isOpen]);

    return (
        <nav className="sticky top-0 z-50 bg-[#1f2937]">
            <div className="container px-6 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <button onClick={() => scrollToSection("hero")}>
                        <img
                            className="w-auto h-12 sm:h-[5.3rem]"
                            src={logo}
                            alt="Logo"
                        />
                    </button>

                    <div className="flex lg:hidden md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                <div onClick={closeMenu}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    ref={menuRef}
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#1f2937] text-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
                        isOpen
                            ? "translate-x-0 opacity-100"
                            : "opacity-0 -translate-x-full"
                    }`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <button
                            className="my-2 text-gray-700 transition-transform duration-300 transform dark:text-gray-200 hover:scale-105 md:mx-4 md:my-0"
                            onClick={() => {
                                scrollToSection("company-info");
                                closeMenu();
                            }}
                        >
                            За Нас
                        </button>
                        <button
                            className="my-2 text-gray-700 transition-transform duration-300 transform dark:text-gray-200 hover:scale-105 md:mx-4 md:my-0"
                            onClick={() => {
                                scrollToSection("materials");
                                closeMenu();
                            }}
                        >
                            Материали
                        </button>
                        <button
                            className="my-2 text-gray-700 transition-transform duration-300 transform dark:text-gray-200 hover:scale-105 md:mx-4 md:my-0"
                            onClick={() => {
                                scrollToSection("projects");
                                closeMenu();
                            }}
                        >
                            Проекти
                        </button>
                        <button
                            className="my-2 text-gray-700 transition-transform duration-300 transform dark:text-gray-200 hover:scale-105 md:mx-4 md:my-0"
                            onClick={() => {
                                scrollToSection("contacts");
                                closeMenu();
                            }}
                        >
                            Контакти
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
