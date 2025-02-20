import { Link } from "react-router-dom";

export function Navbar() {
    
    return(
    <>    
    
        <div className="w-full h-12  bg-white ">
            <div className="flex justify-between items-center ml-5 p-2">                
                <div className="flex space-x-4">
               
                 
                    <a href="/" className="text-blue-600 font-bold hover:text-blue-100">
                    Home</a>
                    <a href="/login" className="text-blue-600 font-bold">
                    Login</a>
                    <a href="/about" className="text-blue-600 font-bold">
                    Sobre</a>
                </div>                    
            </div>
       </div>
    </>
    )}
