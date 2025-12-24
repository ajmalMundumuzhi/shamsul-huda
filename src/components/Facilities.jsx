export default function Facility() {
    return (
        <section className="p-6 m-5 md:m-10 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Facilities Page</h2>
            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                <div className="grid p-6 m-2 text-white rounded-lg shadow-lg h-70 md:h-60 w-80 md:w-60">
                    <p className="text-3xl font-black text-black md:text-4xl">20+</p>
                    <div className="flex items-center justify-center flex-1">
                        <img src="/images/faculty.png" className="w-28 h-28" alt="" />
                    </div>
                    <div className="grid place-items-center">
                        <span className="bg-white text-gray-700 rounded-full px-6 py-2 text-[12px] font-medium shadow-lg border border-gray-100">
                            Faculties
                        </span>
                    </div>

                </div>

                <div className="grid p-6 m-2 text-white rounded-lg shadow-lg h-70 md:h-60 w-80 md:w-60">
                    <p className="text-3xl font-black text-black md:text-4xl">300+</p>
                    <div className="flex items-center justify-center flex-1">
                        <img src="/images/student.png" className="w-28 h-28" alt="" />
                    </div>
                    <div className="grid mt-2 place-items-center">
                        <span className="bg-white text-gray-700 rounded-full px-6 py-2 text-[12px] font-medium shadow-lg border border-gray-100">
                            Students
                        </span>
                    </div>

                </div>

                <div className="grid p-6 m-2 text-white rounded-lg shadow-lg h-70 md:h-60 w-80 md:w-60">
                    <p className="text-3xl font-black text-black md:text-4xl">10+</p>
                    <div className="flex items-center justify-center flex-1">
                        <img src="/images/digital.png" className="w-28 h-28" alt="" />
                    </div>
                    <div className="grid place-items-center">
                        <span className="bg-white text-gray-700 rounded-full px-6 py-2 text-[12px] font-semibold  shadow-lg border border-gray-100">
                            Digital Classes
                        </span>
                    </div>

                </div>

                <div className="grid p-6 m-2 text-white rounded-lg shadow-lg h-70 md:h-60 w-80 md:w-60">
                    <p className="text-3xl font-black text-black md:text-4xl">10000+</p>
                    <div className="flex items-center justify-center flex-1">
                        <img src="/images/library.png" className="w-28 h-28" alt="" />
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