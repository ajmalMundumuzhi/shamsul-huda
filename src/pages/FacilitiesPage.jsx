import React from 'react';
import Footer from "../components/Footer";
import { useFacilties } from '../api/hooks/useFacilities';

function FacilityPage() {
    const { data: facilities, isLoading, isError, error } = useFacilties();

    if (isLoading) return <div className="text-center p-20 text-xl">Loading Facilities...</div>;
    if (isError) return <div className="text-center p-20 text-red-500">Error: {error.message}</div>;

    return (
        <>
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Facilities</h1>
                
                <div className="space-y-8">
                    {facilities?.map((facility) => (
                        <div key={facility._id} className="relative flex flex-col md:flex-row h-full lg:h-[300px] w-full bg-white shadow-sm border border-slate-200 rounded-lg">
                            
                            {/* Image Section */}
                            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
                                {facility.image?.url ? (
                                    <img
                                        src={facility.image.url}
                                        alt={facility.title}
                                        className="h-40 lg:h-full w-full rounded-md md:rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full rounded-md md:rounded-lg bg-slate-200 flex items-center justify-center min-h-[160px]">
                                        <span className="text-slate-400">No Image Available</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-6 overflow-y-auto">
                                <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                    Facility
                                </div>
                                <h4 className="mb-5 mt-4 text-slate-950 text-3xl md:text-4xl font-bold">
                                    {facility.title || facility.name} 
                                </h4>
                                <p className="mb-4 text-slate-600 leading-normal font-light">
                                    {facility.description || facility.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default FacilityPage;