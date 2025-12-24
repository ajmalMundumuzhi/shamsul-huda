import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { useFaculties } from '../api/hooks/useFaculty';

export default function FacultyPage() {
    const { data: facultyList, isLoading, isError, error } = useFaculties();

    if (isLoading) return <div className="p-10 text-center">Loading Faculty...</div>;
    if (isError) return <div className="p-10 text-center text-red-500">Error: {error.message}</div>;

    return (
        <section className="max-w-7xl mx-auto p-5">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Faculty</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {facultyList?.map((person) => (
                    <ProfileCard 
                        key={person._id}
                        name={person.name}
                        role={person.designation || person.role} // Check your DB field
                        image={person.image?.url}
                        whatsapp={person.whatsappNumber} // Check your DB field
                        email={person.email}
                    />
                ))}
            </div>
        </section>
    );
}