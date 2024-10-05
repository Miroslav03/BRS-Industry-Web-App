/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
            },
        },
        backgroundImage: {
            "main-background": "url('./images/hero-background.jpg')",
        },
        boxShadow: {
            "custom-md":
                "0 4px 6px -1px rgba(31, 41, 55, 0.1), 0 2px 4px -1px rgba(31, 41, 55, 0.06)", // Adjust opacity for effect
        },
        keyframes: {
            fadeInSlideUp: {
                "0%": { opacity: "0", transform: "translateY(30px)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
            },
        },
        animation: {
            fadeInSlideUp: "fadeInSlideUp 1s ease-out forwards",
        },
    },
    plugins: [],
};
