export default function Materials() {
    return (
        <section className="flex flex-col items-center justify-center h-[14rem] ">
            <h2 className="text-3xl font-bold text-center  pb-4 text-[#2d2d31]">
                Материали
            </h2>
            <div className="grid grid-cols-3 gap-x-4 gap-y-6 text-center">
                <div className="shadow-custom-md p-4">
                    {" "}
                    {/* Add padding for better visual spacing */}
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
