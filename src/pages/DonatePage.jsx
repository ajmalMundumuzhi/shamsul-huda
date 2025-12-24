import React from 'react';

export default function DonatePage() {
  return (
    <section className="max-w-6xl mx-auto p-5 md:p-12 bg-white min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* === LEFT SIDE: Bank Details === */}
        <div className="space-y-8">
            {/* Holder Name */}
            <div>
                <h2 className="text-sm md:text-base font-bold text-blue-900 uppercase tracking-wide mb-6">
                    HOLDER NAME: SHAMSUL HUDA ISLAMIC ACADEMY
                </h2>
            </div>

            {/* Single Bank Block */}
            <div className="border-l-4 border-blue-900 pl-6 py-2">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                    STATE BANK OF INDIA
                </h3>
                
                <div className="space-y-2 text-gray-600 font-medium text-sm md:text-base font-poppins">
                    <p>
                        <span className="font-bold text-gray-800 w-32 inline-block">Account No:</span> 
                        163910801200117
                    </p>
                    <p>
                        <span className="font-bold text-gray-800 w-32 inline-block">IFSC:</span> 
                        KSBK0001639
                    </p>
                    <p>
                        <span className="font-bold text-gray-800 w-32 inline-block">Branch:</span> 
                        Kuttikkattoor
                    </p>
                    <p>
                        <span className="font-bold text-gray-800 w-32 inline-block">Phone:</span> 
                        0494-2463155
                    </p>
                </div>
            </div>
            
            {/* Optional Note */}
            <p className="text-xs text-gray-400 italic mt-4">
                * Please share the transaction receipt on WhatsApp after transfer.
            </p>
        </div>

        {/* === RIGHT SIDE: QR Code Card === */}
        <div className="flex justify-center md:justify-end">
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-xs w-full border border-gray-100 relative transform hover:scale-105 transition-transform duration-300">
                
                {/* Top GPay Logo Area */}
                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        {/* You can use an SVG or Image for the GPay logo here */}
                        <span className="text-4xl font-bold text-gray-600">G</span>
                        <span className="text-4xl font-bold text-gray-600">Pay</span>
                    </div>
                </div>

                <div className="text-center mb-4">
                     <h4 className="font-bold text-gray-800">SHAMSUL HUDA ISLAMIC ACADEMY</h4>
                     <p className="text-sm text-gray-500">+91 97454 60575</p>
                </div>

                {/* QR Code Image Placeholder */}
                <div className="bg-gray-100 rounded-xl overflow-hidden w-full aspect-square mb-6 border-2 border-dashed border-gray-300 flex items-center justify-center">
                     {/* 👇 PUT YOUR QR CODE IMAGE HERE */}
                     <img 
                        src="/src/images/Screenshot 2025-11-23 021117.png" 
                        alt="QR Code" 
                        className="w-full h-full object-cover"
                        // onError={(e) => e.target.style.display = 'none'} // Hides if no image
                     />
                     {/* Placeholder text if image missing */}
                </div>

                {/* Bottom Payment Logos */}
                <div className="flex justify-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all">
                     {/* Simple colored circles to represent apps, replace with actual logos if needed */}
                     <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">GP</div>
                     <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white text-[8px] font-bold">Paytm</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}