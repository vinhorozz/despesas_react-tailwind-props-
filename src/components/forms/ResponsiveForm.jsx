import { useEffect, useState } from "react";
import { FormSpread } from "./FormSpread";
import { FormShrink } from "./FornShrink";

export function ResponsiveForm(props){
    const[windowWidth, setWindowWidth]=
    useState(window.innerWidth);
    
    useEffect(()=>{
        function handleResize(){
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize',handleResize);
        return()=>{
            window.removeEventListener('resize',handleResize);
        }; },[]); 
    
    return(
        <>
        {windowWidth>450?<FormSpread />:<FormShrink />}        
        </>
    )
}