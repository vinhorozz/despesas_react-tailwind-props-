import React from "react";
import { Lista } from "../listas/listas";

export function Navbar() {
    
    return(
    <>    
    
        <div className="w-full h-12  bg-white ">
            <div className="flex justify-between items-center ml-5 p-2">                
                <div className="flex space-x-4">
            <Lista/>                    
                </div>                    
            </div>
       </div>
    </>
    )};

 