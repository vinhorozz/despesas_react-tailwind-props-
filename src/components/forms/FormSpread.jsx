import React from 'react';
import { FormFields } from './FormFields';

export function FormSpread(props){
    return (
        <>
            <div className="space-y-4 bg-slate-200 rounded-2xl shadow-md p-4 justify-center flex-col">
                <FormFields onAddItemSubmit={props.onAddItemSubmit} />
            </div>
        </>
    );
}