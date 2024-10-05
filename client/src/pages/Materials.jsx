import { useEffect, useRef, useState } from "react";

export default function Materials() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 400);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="materials"
            ref={sectionRef}
            className="flex flex-col items-center justify-center h-auto py-4 md:py-14 transition-all duration-1000"
        >
            <h2
                className={`text-3xl font-bold text-center pb-4 text-[#2d2d31] transition-all duration-1000 ${
                    isVisible ? "animate-fadeInSlideUp" : "opacity-0"
                }`}
            >
                Материали
            </h2>
            <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 text-center transition-all duration-1000 w-[90%] md:w-auto ${
                    isVisible ? "animate-fadeInSlideUp" : "opacity-0"
                }`}
            >
                <div className="shadow-custom-md p-4">
                    <p className="text-[1rem] font-semibold">
                        Всякакви стандартни плоскости - ПДЧ, МДФ и други
                    </p>
                </div>
                <div className="shadow-custom-md p-4">
                    <p className="text-[1rem] font-semibold">
                        Масивна дървесина
                    </p>
                </div>
                <div className="shadow-custom-md p-4">
                    <p className="text-[1rem] font-semibold">
                        Износоустойчиви плочи тип HPL
                    </p>
                </div>
                <div className="shadow-custom-md p-4">
                    <p className="text-[1rem] font-semibold">
                        Защитени елементи от неръждаема/стандартна стомана
                    </p>
                </div>
                <div className="shadow-custom-md p-4">
                    <p className="text-[1rem] font-semibold">
                        С метална или дървена конструкция
                    </p>
                </div>
                <div className="shadow-custom-md p-4">
                    <p className="text-[1rem] font-semibold">
                        От алуминиеви профили
                    </p>
                </div>
            </div>
        </section>
    );
}
