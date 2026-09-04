import {useRef } from "react";
import { Player } from "@lordicon/react";
import ICON1 from "./assets/wired-lineal-2632-logo-circle-linkedin-hover-pinch.json";
import ICON2 from "./assets/doodle-motif-3090-mail-open-document-hover-pinch.json";
import ICON3 from "./assets/wired-lineal-2572-logo-github-hover-pinch.json";
function Footer() {
    const oneArrowRef = useRef(null);
    const towArrowRef = useRef(null);
    const sixArrowRef = useRef(null);
    return (
        <div className='w-full h-56 ' id="footer">
            <div className='w-full h-16  mt-4 flex justify-center items-center gap-5'>
                <div className='icons'onMouseEnter={() => sixArrowRef.current?.playFromBeginning()}>
                        <a href="https://github.com/haidi2027"><Player 
                            ref={sixArrowRef} 
                            icon={ICON3} 
                            size={60} 
                        /> </a>
                </div>
                <div className='icons'onMouseEnter={() => oneArrowRef.current?.playFromBeginning()}>
                        <a href="https://www.linkedin.com/in/haidi-romany-42a25b25a/"><Player 
                            ref={oneArrowRef} 
                            icon={ICON1} 
                            size={60} 
                        /> </a>
                </div>
                <div className='icons'onMouseEnter={() => towArrowRef.current?.playFromBeginning()}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=haidiromany1@gmail.com" target="_blank" rel="noreferrer"><Player 
                            ref={towArrowRef} 
                            icon={ICON2} 
                            size={60} 
                        /> </a>
                </div>
            </div>
            <div className='w-full h-20 flex justify-center items-center gap-2 text-white'>
                <h5>©{new Date().getFullYear()} Haidi Romany. All rights reserved.</h5>
            </div>
        </div>
    )
}

export default Footer
