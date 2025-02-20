import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { MiniMenu } from "./MiniMenu";

export function ResponsiveNavBar() {
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize(){
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };}, []);

    return (
    <>
      {windowWidth>450 ? <Navbar /> : <MiniMenu  />}
    </>
  );
}