import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { useManagement } from '../api/hooks/useManagement';

export default function ManagementPage() {
    const { data: managementList, isLoading, isError, error } = useManagement();

    if (isLoading) return <div className="p-10 text-center">Loading Management Team...</div>;
    if (isError) return <div className="p-10 text-center text-red-500">Error: {error.message}</div>;

    return (
        <section className="max-w-7xl mx-auto p-5">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Management Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {managementList?.map((member) => (
                    <ProfileCard 
                        key={member._id}
                        name={member.name}
                        role={member.position || member.role}
                        image={member.image?.url}
                        whatsapp={member.phone || member.whatsapp}
                        email={member.email}
                    />
                ))}
            </div>
        </section>
    );
}