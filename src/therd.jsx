
import './index.css'
import ICON from "./assets/doodle-color-27-globe-hover-rotate.json";
import ICONN from "./assets/wired-flat-12-layers-hover-squeeze.json";
import ICONNN from "./assets/wired-flat-970-browser-video-conference-hover-pinch.json";
import {useRef } from "react";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
function Therd() {
    const oneArrowRef = useRef(null);
    const threeArrowRef = useRef(null);
    const twoArrowRef = useRef(null);
    return (
        <>
            <div className="h-screen w-full  relativ" id='about'>
                <div className='  about'>
                    <div className='dash2'>
                        <div className='dash'></div>
                        <motion.h2
                            className=" logo2 "
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{duration: 1, ease:[0.22,1,0.36,1] }}
                        >
                            About Me
                        </motion.h2>
                        
                    </div>
                    <motion.h5 className='logo3  text-gray-200 about2'
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease:[0.22,1,0.36,1] }}
                    >
                        Passionate Front-End Developer with hands-on experience in HTML,
                        
                    </motion.h5>
                    <motion.h5 className='logo3  text-gray-200 about2'
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4, ease:[0.22,1,0.36,1] }}
                    >
                        CSS, JavaScript, React, Next.js, Tailwind CSS, and Bootstrap. 
                    </motion.h5>
                    <motion.h5 className='logo3  text-gray-200 about2'
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6, ease:[0.22,1,0.36,1] }}
                    >
                        Skilled in building responsive, interactive, and modern web 
                    </motion.h5>
                    <motion.h5 className='logo3  text-gray-200 about2'
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8, ease:[0.22,1,0.36,1] }}
                    >
                        interfaces with a strong focus on clean UI and user experience.
                    </motion.h5> <br />
                    <motion.h5 className='logo3  text-gray-200 about2'
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration1:1, delay: 1, ease:[0.22,1,0.36,1] }}
                    >
                        Experienced in developing projects such as E-commerce websites, 
                    </motion.h5>
                    <motion.h5 className='logo3  text-gray-200 about2'
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2, ease:[0.22,1,0.36,1] }}
                    >
                        Weather Apps, Movie platforms, Car Shops, Library systems, 
                    </motion.h5>
                    <motion.h5 className='logo3  text-gray-200 about2'
                        initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.4, ease:[0.22,1,0.36,1] }}
                    >
                        and personal portfolios, using APIs and modern front-end libraries
                    </motion.h5>
                    
                </div>
                <div className='divs1'>
                    <motion.div  
                        className='divs12'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration1:1, delay: 2, ease:[0.22,1,0.36,1] }}>
                        <h1 className='h11 logo2'>20+</h1>
                        <h5>Completed <br /> Projects</h5>
                    </motion.div >
                    <motion.div  
                        className='divs12'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration1:1, delay: 2, ease:[0.22,1,0.36,1] }}>
                        <h1 className='h11 logo2'>30+</h1><br />
                        <h5 >Client <br /> Satisfaction</h5>
                    </motion.div >
                    <motion.div  
                        className='divs12'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration1:1, delay: 2, ease:[0.22,1,0.36,1] }}>
                        <h1 className='h11 logo2'>0+</h1><br />
                        <h5>Years <br /> Experience</h5>
                    </motion.div >
                </div>
                <div className='divs'>
                    <div className='divss'>
                        <motion.div 
                            className='square'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2.6, ease:[0.22,1,0.36,1] }}
                            onMouseEnter={() => oneArrowRef.current?.playFromBeginning()}>
                                <Player 
                                    ref={oneArrowRef} 
                                    icon={ICON} 
                                    size={50} 
                                />
                        </motion.div>
                        <motion.div 
                            className='word'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2.6, ease:[0.22,1,0.36,1] }}
                        >Responsive Web Design</motion.div>
                    </div>
                    <div className='divss'>
                        <motion.div 
                            className='square'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2.4, ease:[0.22,1,0.36,1] }}
                            onMouseEnter={() => threeArrowRef.current?.playFromBeginning()}>
                            <Player 
                                ref={threeArrowRef} 
                                icon={ICONN} 
                                size={60} 
                            />
                        </motion.div>
                        <motion.div 
                            className='word'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2.4, ease:[0.22,1,0.36,1] }}
                        >React Development</motion.div>
                    </div>
                    <div className='divss'>
                        <motion.div 
                            className='square'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2.2, ease:[0.22,1,0.36,1] }}
                            onMouseEnter={() => twoArrowRef.current?.playFromBeginning()}>
                            <Player 
                                ref={twoArrowRef} 
                                icon={ICONNN} 
                                size={50} 
                            />
                        </motion.div>
                        <motion.div 
                            className='word'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2.2, ease:[0.22,1,0.36,1] }}
                        >UI Development</motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Therd;