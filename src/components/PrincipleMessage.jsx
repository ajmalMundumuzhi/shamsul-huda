import React from 'react';

export default function PrincipalMessage() {
    return (
        <section className="p-6 m-5 bg-white rounded-lg shadow-lg md:m-10 md:p-10">
            <h2 className="mb-6 text-2xl font-semibold font-poppins md:text-3xl">Principal Message</h2>
            <div className="grid items-center grid-cols-1 md:grid-cols-12 md:gap-8">
                <article className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="md:m-5">
                        <img 
                            src="/images/unais.JPG" 
                            className="object-cover w-full h-auto rounded-lg shadow-lg" 
                            alt="principal" />
                    </div>
                </article>
                <article className="h-full col-span-12 mt-5 rounded-lg shadow-lg md:col-span-6 lg:col-span-8 md:mt-0">
                    <div className="p-4">
                        <p className="font-light leading-relaxed text-gray-700 font-poppins lg:text-xl">
                            <br />Shamsul Huda Islamic Academy , a graduate institute affiliated to Darul Huda Islamic University Kerala, is a prestigious centre of Islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing.
                        </p>
                        <p className="font-light leading-relaxed text-gray-700 font-poppins md:hidden lg:flex lg:text-xl">
                            <br />It integrates both islamic and contemporary education.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}