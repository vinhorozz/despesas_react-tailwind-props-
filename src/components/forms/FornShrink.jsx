import React from 'react';
import { FormFields } from "./FormFields";

export function FormShrink(props){    
    return (
        <>
            <ul className="w-93 space-y-4 bg-slate-200  rounded-2xl  shadow-md p-4 justify-center flex-col">  
                 <FormFields onAddItemSubmit={props.onAddItemSubmit} />
            </ul>       
       </>
    )
}