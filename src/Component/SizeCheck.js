import { useState, useEffect } from "react";

// CHECKS IF THE WIDTH IS EQUAL OR MORE THAN 1920 TO DISPLAY CERTAIN THINGS

const SizeCheck = () => {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {

        const media = window.matchMedia('(min-width: 1920px)');
        const listener = () => setIsDesktop(media.matches);
        listener();
        window.addEventListener('resize', listener);
  
        return () => window.removeEventListener('resize', listener);

    }, [isDesktop]);

    return isDesktop;

};
  
export default SizeCheck;