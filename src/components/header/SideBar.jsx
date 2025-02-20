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
                
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="/home" className="text-blue-700 font-bold block">Home</a>                    
                    <a href="/login" className="text-blue-700 font-bold block">Login</a>
                    <a href="/sobre" className="text-blue-700 font-bold block">Sobre</a>
                </div>
                </div>
          
        </>
    );
}
