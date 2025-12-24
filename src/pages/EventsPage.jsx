import React from "react";
import Card from "../components/Card";
import { useEvents } from "../api/hooks/useEvents";

export default function ActivitiesPage() {
    const { data: activities, isLoading, isError, error } = useEvents();

    console.log("api response: ", activities);

    if (isLoading) return <div className="text-center p-10">Loading Activities...</div>;
    if (isError) return <div className="text-center text-red-500 p-10">Error: {error.message}</div>;

    return (
        <section className="max-w-7xl mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {activities?.map((activity) => (
                    
                    <Card
                        key={activity._id}
                        title={activity.title || activity.name} 
                        description={activity.description}
                        
                        // Date Formatter
                        date={new Date(activity.createdAt).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                        
                        // Image Handler
                        image={activity.image?.url || "https://placehold.co/600x400?text=No+Image"}
                    />
                ))}
            </div>
        </section>
    )
}