import { useState } from "react";
import { Link } from "react-router-dom";
import {Mail, Phone} from 'lucide-react'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
return (
    <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="hidden container mx-auto px-2 py-2 md:grid grid-cols-3 items-center">
                    <div className="col-span-1 justify-self-center flex items-center gap-2">
                            <Phone size={16} />
                            <p> +91 9745804605</p>
                    </div>

                    <div className="col-span-1 justify-self-center flex items-center gap-2">
                            <Mail size={16} />
                            <p>shamsulhudaacademy@yahoo.com</p>
                    </div>

                    <div className="col-span-1 justify-self-center flex items-center gap-2">
                            
                            <p><span className="text-green-600">WhatsApp</span> +91 9745804605</p>
                    </div>
            </div>
            <div className="container mx-auto px-4 py-3 grid grid-cols-2  md:grid-cols-3 items-center">
                    <div className="col-span-1 justify-self-start">
                            <Link to="/">
                            <img 
                            src="/shia  WATERMARK.png" 
                            alt="Logo"
                            className="h-10"
                             /></Link>
                    </div>
                    <nav className="hidden lg:flex col-span-1 justify-self-center space-x-6 items-center">
                            <Link to="/" className="  hover:underline">Home</Link>
                            <Link to="/mission" className=" hover:underline">Mission</Link>
                            <Link to="/facilities" className=" hover:underline">Facilities</Link>
                            <Link to="/faculties" className=" hover:underline">Faculties</Link>

                            <div className="relative group">
                                    <span className="cursor-pointer hover:underline">
                                            Activities
                                    </span>
                                    <div className="absolute top-full left-0 z-10 min-w-max bg-white  shadow-md rounded-md border-gray-100 hidden group-hover:block">

                            <Link to="/events" className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">Events</Link>
                            <Link to="/activities" className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">Activities</Link>
                                    </div>
                            </div>

                            
                            <Link to="/management" className="hover:underline">Management</Link>
                            <Link to="/contact" className=" hover:underline">Contact</Link>
                            
                    </nav>
                    <div className="hidden md:flex col-span-1 lg:justify-end md:justify-center">
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
                    <div className="fixed top-0 left-0 w-64 bg-white h-full  shadow-lg p-5 z-50">
                            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                            </button>
                            <nav className="my-5 flex flex-col space-y-4">
                            <Link to="/" className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg ">Home</Link>
                            <Link to="/mission" className="p-3 bg-gray-50 hover:bg-gray-100 ">Mission</Link>
                            <Link to="/facilities" className="p-3 bg-gray-50 hover:bg-gray-100">Facilities</Link>
                            <Link to="/faculties" className="p-3 bg-gray-50 hover:bg-gray-100 ">Faculties</Link>

                            <div className="relative bg-gray-50 p-3 group">
                                    <span className="p-3 cursor-pointer ">
                                            Activities
                                    </span>
                                    <div className="absolute top-full left-0 z-10 min-w-max bg-white  shadow-md rounded-md border-gray-100 hidden group-hover:block">

                            <Link to="/events" className="p-3 bg-gray-50 hover:bg-gray-100 block w-full px-4 py-2 text-left text-sm text-gray-700 ">Events</Link>
                            <Link to="/activities" className="p-3 bg-gray-50 hover:bg-gray-100 block w-full px-4 py-2 text-left text-sm text-gray-700">Activities</Link>
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