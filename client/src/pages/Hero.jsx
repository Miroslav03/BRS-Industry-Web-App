import Button from "../components/Button";

export default function Hero() {
    return (
        <div className="relative flex items-center justify-center h-[45em] bg-cover bg-center bg-main-background">
            {/* Dark Overlay for Darkening the Background Image */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Text Content */}
            <div className="relative text-center z-10">
                <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white">
                    Индивидуални решения за индустриално и офис обзавеждане
                </h1>
                <p className="mb-6 text-[1.1rem] leading-relaxed px-20 text-white">
                    BRS Industry създава функционално и качествено обзавеждане,
                    проектирано според вашите нужди. Нашите опитни специалисти
                    комбинират съвременен дизайн и ергономичност с материали
                    като масивно дърво, MDF, стомана и алуминиеви профили, за да
                    предложат най-добрите решения за вашето работно
                    пространство.
                </p>
                <div>
                    <Button children={"Разгледай"} size={"big"} />
                </div>
            </div>
        </div>
    );
}
