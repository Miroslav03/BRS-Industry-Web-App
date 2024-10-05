import table from "../images/table.jpg";
import table2 from "../images/table2.jpg";
import table3 from "../images/table3.jpg";
import table4 from "../images/table4.jpg";
import table5 from "../images/table5.jpg";
import table6 from "../images/table6.jpg";
import table7 from "../images/table7.jpg";
import table8 from "../images/table8.jpg";
import table9 from "../images/table9.jpg";
import table10 from "../images/table10.jpg";
import table11 from "../images/table11.jpg";
import table12 from "../images/table12.jpg";
import table13 from "../images/table13.jpg";
import table14 from "../images/table14.jpg";
import table15 from "../images/table15.jpg";

export default function Projects() {
    const data = [
        {
            image: table,
            alt: "Chair",
            text: "Маса голяма от конструктивен алуминиев профил, дървен плот и десен вграден контейнер от ПДЧ или износоустойив HPL.",
        },
        {
            image: table2,
            alt: "Chair",
            text: "Маса голяма от конструктивен алуминиев профил, дървен плот и десен вграден контейнер от ПДЧ или износоустойив HPL.",
        },
        {
            image: table3,
            alt: "Chair",
            text: "Маса малка от конструктивен алуминиев профил, дървен плот и десен вграден контейнер ПДЧ.",
        },
        {
            image: table4,
            alt: "Chair",
            text: "Маса малка от стоманен профил, дървен износоустойчив плот HPL с подсилен преден ръб, регулируеми крака.",
        },
        {
            image: table5,
            alt: "Chair",
            text: "Маса малка от стоманен профил, дървен износоустойчив плот HPL с подсилен преден ръб, регулируеми крака.",
        },
        {
            image: table6,
            alt: "Chair",
            text: "Маса голяма от стоманен профил, дървен плот ПДЧ, облечен в неръжаема стомана 1мм.",
        },
        {
            image: table7,
            alt: "Chair",
            text: "Маса голяма от метален профил, дървен плот ПДЧ, облечен в неръчжаема стомана 1мм.",
        },
        {
            image: table8,
            alt: "Chair",
            text: "Работна станция от конструктивен алуминиев профил, надстройка с осветително тяло, ел. инсталация, плот ПДЧ.",
        },
        {
            image: table9,
            alt: "Chair",
            text: "Работна станция от конструктивен алуминиев профил, износоустойчив плот HPL с 2 контейнера от ПДЧ, щанцован гръб, ел. и пневматична инсталация.",
        },
        {
            image: table10,
            alt: "Chair",
            text: "Работна маса интегрирана към ролков транспортьор, по задание на клиента.",
        },
        {
            image: table11,
            alt: "Chair",
            text: "Подвижен работен стелаж/маса от конструктивен алуминиев профил, дървен плот и колела.",
        },
        {
            image: table12,
            alt: "Chair",
            text: "Подвижна работна маса от конструктивен алуминиев профил, дървен плот и колела.",
        },
        {
            image: table13,
            alt: "Chair",
            text: "Подвижен контейнер от износоустойчив HPL със алуминиев профил и работен плот.",
        },
        { image: table14, alt: "Chair", text: "Сборна" },
        { image: table15, alt: "Chair", text: "Сборна" },
    ];

    return (
        <div className="px-4 md:px-20 lg:px-40 py-12">
            <h2 className="text-3xl font-bold text-center py-4 text-[#2d2d31]">
                Проекти
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                {data.map((item, index) => (
                    <figure
                        key={index}
                        className="shadow-custom-md rounded-sm w-full flex flex-col h-full" // Ensure the figure takes full width
                    >
                        <div className="flex-1 flex items-center justify-center h-64 overflow-hidden">
                            <img
                                className="object-cover w-full h-full" // Cover the container with the image
                                src={item.image}
                                alt={item.alt}
                            />
                        </div>
                        <div className="pt-4 text-center">
                            <p className="p-[1rem]">{item.text}</p>
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    );
}
