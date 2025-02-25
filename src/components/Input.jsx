
import React, { forwardRef } from 'react';

const InputComponent = (props, ref) => {
    return (
        <input
            ref={ref} {...props}
            type="text"
            className="w-full rounded-md p-2 text-center text-lg border border-slate-300 outline-blue-400 px-2 py-2 hover:bg-green-300"
           
        />
    );
};

export const Input = forwardRef(InputComponent);