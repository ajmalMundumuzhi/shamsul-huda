export default function Facility() {
    return (
        <section className="m-5 md:m-10 p-6 md:p-10">
            <h2 className="font-semibold text-2xl md:text-3xl">Facilities Page</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 justify-items-center">
                <div className="h-70 md:h-60 w-80 md:w-60 m-2 p-6 grid text-white shadow-lg rounded-lg">
                    <p className="text-black font-black text-3xl md:text-4xl">20+</p>
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/src/images/faculty.png" className="w-28 h-28" alt="" />
                    </div>
                    <div className="grid place-items-center">
                        <span className="bg-white text-gray-700 rounded-full px-6 py-2 text-[12px] font-medium shadow-lg border border-gray-100">
                            Faculties
                        </span>
                    </div>

                </div>

                <div className="h-70 md:h-60 w-80 md:w-60 m-2 p-6 grid text-white shadow-lg rounded-lg">
                    <p className="text-black font-black text-3xl md:text-4xl">300+</p>
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/src/images/student.png" className="w-28 h-28" alt="" />
                    </div>
                    <div className="grid place-items-center mt-2">
                        <span className="bg-white text-gray-700 rounded-full px-6 py-2 text-[12px] font-medium shadow-lg border border-gray-100">
                            Students
                        </span>
                    </div>

                </div>

                <div className="h-70 md:h-60 w-80 md:w-60 m-2 p-6 grid text-white shadow-lg rounded-lg">
                    <p className="text-black font-black text-3xl md:text-4xl">10+</p>
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/src/images/digital.png" className="w-28 h-28" alt="" />
                    </div>
                    <div className="grid place-items-center">
                        <span className="bg-white text-gray-700 rounded-full px-6 py-2 text-[12px] font-semibold  shadow-lg border border-gray-100">
                            Digital Classes
                        </span>
                    </div>

                </div>

                <div className="h-70 md:h-60 w-80 md:w-60 m-2 p-6 grid text-white shadow-lg rounded-lg">
                    <p className="text-black font-black text-3xl md:text-4xl">10000+</p>
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/src/images/faculty.png" className="w-28 h-28" alt="" />
                    </div>
                    <div className="grid place-items-center">
                        <span className="bg-white text-gray-700 rounded-full px-6 py-2 font-semibold text-[12px] shadow-lg border border-gray-100">
                            Library Books
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}