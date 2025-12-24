import { useState } from "react";
import { Link } from "react-router-dom";
import {Mail, Phone} from 'lucide-react'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container items-center hidden grid-cols-3 px-2 py-2 mx-auto md:grid">
                    <div className="flex items-center col-span-1 gap-2 justify-self-center">
                            <Phone size={16} />
                            <p> +91 9745804605</p>
                    </div>

                    <div className="flex items-center col-span-1 gap-2 justify-self-center">
                            <Mail size={16} />
                            <p>shamsulhudaacademy@yahoo.com</p>
                    </div>

                    <div className="flex items-center col-span-1 gap-2 justify-self-center">
                            
                            <p><span className="text-green-600">WhatsApp</span> +91 9745804605</p>
                    </div>
            </div>
            <div className="container grid items-center grid-cols-2 px-4 py-3 mx-auto md:grid-cols-3">
                    <div className="col-span-1 justify-self-start">
                            <Link to="/">
                            <img 
                            src="/images/shia  WATERMARK.png" 
                            alt="Logo"
                            className="h-10"
                             /></Link>
                    </div>
                    <nav className="items-center hidden col-span-1 space-x-6 lg:flex justify-self-center">
                            <Link to="/" className=" hover:underline">Home</Link>
                            <Link to="/mission" className=" hover:underline">Mission</Link>
                            <Link to="/facilities" className=" hover:underline">Facilities</Link>
                            <Link to="/faculties" className=" hover:underline">Faculties</Link>

                            <div className="relative group">
                                    <span className="cursor-pointer hover:underline">
                                            Activities
                                    </span>
                                    <div className="absolute left-0 z-10 hidden bg-white border-gray-100 rounded-md shadow-md top-full min-w-max group-hover:block">

                            <Link to="/events" className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">Events</Link>
                            <Link to="/activities" className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">Activities</Link>
                                    </div>
                            </div>

                            
                            <Link to="/management" className="hover:underline">Management</Link>
                            <Link to="/contact" className=" hover:underline">Contact</Link>
                            
                    </nav>
                    <div className="hidden col-span-1 md:flex lg:justify-end md:justify-center">
                            <Link to="/donate" className="px-6 py-2 rounded-lg text-white bg-[#18A773]">Donate</Link>
                    </div>
                    <button
                            className={`justify-self-end lg:hidden ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open mobile menu"
                            
                    >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                    </button>


            </div>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden `}>
                    <div className="fixed top-0 left-0 z-50 w-64 h-full p-5 bg-white shadow-lg">
                            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                            </button>
                            <nav className="flex flex-col my-5 space-y-4">
                            <Link to="/" className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 ">Home</Link>
                            <Link to="/mission" className="p-3 bg-gray-50 hover:bg-gray-100 ">Mission</Link>
                            <Link to="/facilities" className="p-3 bg-gray-50 hover:bg-gray-100">Facilities</Link>
                            <Link to="/faculties" className="p-3 bg-gray-50 hover:bg-gray-100 ">Faculties</Link>

                            <div className="relative p-3 bg-gray-50 group">
                                    <span className="p-3 cursor-pointer ">
                                            Activities
                                    </span>
                                    <div className="absolute left-0 z-10 hidden bg-white border-gray-100 rounded-md shadow-md top-full min-w-max group-hover:block">

                            <Link to="/events" className="block w-full p-3 px-4 py-2 text-sm text-left text-gray-700 bg-gray-50 hover:bg-gray-100 ">Events</Link>
                            <Link to="/activities" className="block w-full p-3 px-4 py-2 text-sm text-left text-gray-700 bg-gray-50 hover:bg-gray-100">Activities</Link>
                                    </div>
                            </div>

                            
                            <Link to="/management" className="p-3 bg-gray-50 hover:bg-gray-100 ">Management</Link>
                            <Link to="/contact" className="p-3 bg-gray-50 hover:bg-gray-100 ">Contact</Link>                   
                            </nav>
                    </div>
            </div>
    </header>
)
}