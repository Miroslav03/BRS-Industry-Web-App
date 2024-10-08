import Button from "../components/Button";

export default function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative flex items-center justify-center h-[45em] bg-cover bg-center bg-main-background">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center z-10">
                <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white animate-fadeInSlideUp">
                    Индивидуални решения за индустриално и офис обзавеждане
                </h1>

                <p className="mb-6 text-base sm:text-[1rem] md:text-[1.1rem] leading-relaxed px-8 sm:px-16 md:px-20 text-white animate-fadeInSlideUp delay-[0.3s]">
                    BRS Industry създава функционално и качествено обзавеждане,
                    проектирано според вашите нужди. {/* Нашите опитни специалисти
                    комбинират съвременен дизайн и ергономичност с материали
                    като масивно дърво, MDF, стомана и алуминиеви профили, за да
                    предложат най-добрите решения за вашето работно пространство. */}
                </p>

                <div className="animate-fadeInSlideUp delay-[0.5s]">
                    <button onClick={() => scrollToSection("projects")}>
                        <Button children={"Разгледай"} size={"big"}/>
                    </button>
                </div>
            </div>
        </div>
    );
}
