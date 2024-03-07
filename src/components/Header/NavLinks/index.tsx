"use client"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { useEffect, useState } from "react"

const NavLinks = () => {
     const [isMobile, setIsMobile] = useState<boolean>(false)
     const MOBILE_THRESHOLD: number = 768
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateSize);
        }
    })
     function updateSize(): void {
         setIsMobile(window.innerWidth < MOBILE_THRESHOLD);
     }
    return (
        <>
            {isMobile ? <MobileNav /> : <DesktopNav />}
        </>
    )
}

export default NavLinks