export default function Button({ size, href, children }) {
    const baseClasses =
        "bg-[#1f2937] uppercase text-white font-medium rounded-full inline-block text-center no-underline transition-colors duration-300 cursor-pointer";
    const hoverClasses = "hover:bg-[#ffffff] hover:text-[#1f2937]";
    const sizeClasses =
        size === "big" ? "text-lg py-4 px-8" : "text-base py-2 px-4";

    return (
        <a
            href={href}
            className={`${baseClasses} ${hoverClasses} ${sizeClasses}`}
        >
            {children}
        </a>
    );
}
