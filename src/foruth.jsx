import ICON from "./assets/doodle-motif-742-pagination-hover-pinch.json";
import ICON3 from "./assets/system-outline-3973-clipboard-bar-chart-hover-pinch.json";
import ICON4 from "./assets/doodle-color-35-pencil-hover-circle.json";
import {useRef } from "react";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
function Foruth() {
    const LefttArrowRef = useRef(null);
    const oneArrowRef = useRef(null);
    const towArrowRef = useRef(null);
    return (
        <>
        <div className='w-full h-screen  flex justify-center items-center flex-wrap ' id='services'>
            <div className='words8'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='dashs' />
                    <h1 className='logo2'>Services</h1>
                    <div className='dashs'/>
                </div>
                <div className='flex justify-center items-center gap-3 logo3'>
                    <h5 className='h55'>Specialized services tailored to bring your digital vision to life</h5>
                </div>
            </div>

            <div className='services'>
                <motion.div className='service'
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                    onMouseEnter={() => LefttArrowRef.current?.playFromBeginning()}>
                    <div className='div9' >
                        <Player 
                            ref={LefttArrowRef} 
                            icon={ICON} 
                            size={80} 
                        />
                    </div>
                    <div className='word2'> 
                        <h3 className='logo23'>Web Development</h3>
                        <p className='h55'>Building modern, responsive website with <br /> clean code and best practices using React <br /> and Tailwind.</p>
                    </div>
                </motion.div>
                <motion.div className='service'
                    initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                    onMouseEnter={() => oneArrowRef.current?.playFromBeginning()}>
                    <div className='div9'>
                        <Player 
                            ref={oneArrowRef} 
                            icon={ICON4} 
                            size={70} 
                        /> 
                    </div>
                    <div className='word2'> 
                        <h3 className='logo23'>UI Developer</h3>
                        <p className='h55'>Turning UI designs into responsive, clean,  functional websites.</p>
                    </div>
                </motion.div>
                <motion.div className='service'
                    initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                    onMouseEnter={() => towArrowRef.current?.playFromBeginning()}>
                    <div className='div9'>
                        <Player 
                            ref={towArrowRef} 
                            icon={ICON3} 
                            size={50} 
                        />
                    </div>
                    <div className='word2'> 
                        <h3 className='logo23'>Performance Optimization</h3>
                        <p className='h55'>Optimizing web applications for speed, accessibility, and search engine rankings.</p>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}

export default Foruth
