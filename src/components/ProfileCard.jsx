import React from 'react';
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

// Receive props for a SINGLE person
export default function ProfileCard({ name, role, image, whatsapp, email }) {
    return (
        // Added 'group' class here so children can hover based on parent state if needed later
        <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            
            {/* Image Section */}
            <div className="w-full h-64 overflow-hidden"> {/* Ensure overflow is hidden here too */}
                <img 
                    src={image || "https://placehold.co/400x400?text=No+Image"} 
                    alt={name} 
                    // UPDATED: Added hover scale effect
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500 ease-in-out" 
                />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow z-10 bg-white relative"> {/* Added z-10 and bg-white to ensure text stays on top */}
                <div className="flex items-center justify-between gap-3 mt-auto">
                    
                    {/* Name & Role */}
                    <div className="flex flex-col min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 truncate">
                            {name}
                        </h3>
                        {/* UPDATED: Changed color to gray-600 */}
                        <span className="text-sm text-gray-600 font-medium truncate">
                            {role}
                        </span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {/* Only show WhatsApp button if a number exists */}
                        {whatsapp && (
                            <a
                                // Check if it's a full link or just a number
                                href={whatsapp.includes('http') ? whatsapp : `https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                            >
                                <FaWhatsapp size={16} />
                            </a>
                        )}

                        {/* Only show Email button if email exists */}
                        {email && (
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                            >
                                <FaEnvelope size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}