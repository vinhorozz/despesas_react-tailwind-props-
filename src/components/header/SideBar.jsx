import React from 'react';
import { Lista } from '../listas/listas';

export function Sidebar() {
    return (
        <>
            <style jsx>{`
                .sidebar {
                    position: fixed;
                    top: 3px;
                    left: 3px; 
                    width: max-content;
                    background-color: white;
                    border: 1px solid #ccc; 
                    border-radius: 8px;
                    padding: 4px;
                }
            `}</style>

            <div className="sidebar">
                
                <div className="px-2 pt-2 pb-3 flex flex-col space-y-1">
                    <Lista/>                   
                </div>
                </div>
          
        </>
    );
}
