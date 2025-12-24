import React from 'react';

// Receive data as props so this Card can be used for Events OR Activities
export default function Card({ title, description, date, image }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
            
            {/* PART 1: Top Image */}
            <div className="h-64 w-full">
                <img 
                    src={image || "https://placehold.co/600x400?text=No+Image"} // Fallback image
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* PART 2: Details */}
            <div className="p-6 bg-pink-50 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {/* line-clamp-3 makes sure long text doesn't break the card height */}
                    {description}
                </p>
                
                <div className="flex items-center gap-2 text-gray-500 border-t border-gray-200 pt-4 mt-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    {/* Convert date string if needed, e.g., new Date(date).toLocaleDateString() */}
                    <span className="text-sm font-medium">{date}</span>
                </div>
            </div>
        </div>
    );
}