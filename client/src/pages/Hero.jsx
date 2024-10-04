import Button from "../components/Button";

export default function Hero() {
    return (
        <div className="flex items-center justify-center h-[45em]">
            <div className="text-center">
                <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight">
                    Индивидуални решения за индустриално и офис обзавеждане
                </h1>
                <p className="mb-6 text-[1.1rem] leading-relaxed px-20">
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