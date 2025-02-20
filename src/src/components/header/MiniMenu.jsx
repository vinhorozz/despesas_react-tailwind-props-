import { Sidebar } from "./SideBar";
import { useState } from "react";

export function MiniMenu(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return(
        <>
         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            
                    <div className="absolute inset-y-1 left-1 flex h-10 sm:hidden">
                        {/* Mobile menu button */}
                        <button  onClick={toggleSidebar} type="button" className=" bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            
                            
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/* Heroicon name: menu */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Heroicon name: x */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {isSidebarOpen && <Sidebar />}
                        </div>
                    </div>
             

         
        </>
    )
}