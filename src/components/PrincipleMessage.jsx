import React from 'react';

export default function PrincipalMessage() {
    return (
        <section className="shadow-lg rounded-lg m-5 md:m-10 p-6 md:p-10 bg-white">
            <h2 className="font-poppins font-semibold text-2xl md:text-3xl mb-6">Principal Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 items-center">
                <article className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="md:m-5">
                        <img 
                            src="/src/images/unais.JPG" 
                            className="rounded-lg shadow-lg w-full h-auto object-cover" 
                            alt="principal" />
                    </div>
                </article>
                <article className="col-span-12 h-full md:col-span-6 lg:col-span-8 shadow-lg mt-5 md:mt-0 rounded-lg">
                    <div className="p-4">
                        <p className="font-poppins font-light lg:text-xl text-gray-700 leading-relaxed">
                            <br />Shamsul Huda Islamic Academy , a graduate institute affiliated to Darul Huda Islamic University Kerala, is a prestigious centre of Islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing.
                        </p>
                        <p className="font-poppins font-light md:hidden lg:flex lg:text-xl text-gray-700 leading-relaxed">
                            <br />It integrates both islamic and contemporary education.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}