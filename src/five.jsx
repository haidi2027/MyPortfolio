
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
import ICONN from "./assets/wired-lineal-2572-logo-github-hover-pinch.json"
function Five() {
    const LefttArrowRef = useRef(null);

    useEffect(() => {
        LefttArrowRef.current?.playFromBeginning();
    }, []);

    return (
        <>
        <div className='w-screen h-auto  flex justify-center items-center flex-wrap ' id='project'>
            <div className='words8'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='dashs' />
                    <h1 className='logo2'>Projects</h1>
                    <div className='dashs' />
                </div>
                <div className='flex justify-center items-center  logo3'><h5 className='h55'>A showcase of my recent work and creative solutions</h5></div>
            </div>
            <div className='projects flex justify-center items-center  flex-wrap '>

                    <motion.div className="card"
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <div className='front'>
                            <div className='sime'>
                                <img src="/images/لقطة شاشة 2026-08-16 213638.png" alt="" style={{ width:"100%", height:"100%", borderRadius:"20px 20px 0 0"}} />
                            </div>
                            <div className='simee'>
                                <h3 className='logo2'>Car Store </h3>
                                <p>A modern car store offering a wide <br /> range of quality vehicles.</p>
                            </div>
                        </div>
                        <div className="details">
                            <div >
                                <h3 className='logo2'>Car Store </h3>
                            </div>
                            <div className='bttn3'>
                                <a href="https://github.com/haidi2027/project-U.git"><MDBBtn className="bttn w-32 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" onClick={() => LefttArrowRef.current?.playFromBeginning()}>
                                    <span> GitHub</span>
                                    <span className="d-flex align-items-center">
                                    <Player ref={LefttArrowRef} icon={ICONN} size={25} />
                                    </span>
                                </MDBBtn></a>
                                <a href="https://project-u-7y6q.vercel.app"><MDBBtn className="bttn2 w-36 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" >
                                    <span>Live Demo</span>
                                    
                                </MDBBtn></a>
                            </div>
                        </div>
                    </motion.div>
                
                    <motion.div className="card"
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="front">
                            <div className='sime'>
                                <img src="/images/لقطة شاشة 2026-08-30 170816.png" alt="" style={{ width:"100%", height:"100%", borderRadius:"20px 20px 0 0"}} />
                            </div>
                            <div className='simee'>
                                <h3 className='logo2'>Book Cinema Tickets</h3>
                                <p>Discover the latest movies, choose your favorite seates. and book your tickets.</p>
                            </div>
                        </div>
                        <div className="details">
                            <div >
                                <h3 className='logo2'>Book Cinema Tickets</h3>
                            </div>
                            <div className='bttn3'>
                                <a href=""><MDBBtn className="bttn w-32 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" onClick={() => LefttArrowRef.current?.playFromBeginning()}>
                                    <span> GitHub</span>
                                    <span className="d-flex align-items-center">
                                    <Player ref={LefttArrowRef} icon={ICONN} size={25} />
                                    </span>
                                </MDBBtn></a>
                                <a href=""><MDBBtn className="bttn2 w-36 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" >
                                    <span>Live Demo</span>
                                    
                                </MDBBtn></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="card"
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="front">
                            <div className='sime'>
                                <img src="/images/لقطة شاشة 2026-08-30 174024.png" alt="" style={{ width:"100%", height:"100%", borderRadius:"20px 20px 0 0"}} />
                            </div>
                            <div className='simee'>
                                <h3 className='logo2'>Clothing Store</h3>
                                <p>A modern clothing store offering stylish, <br /> high-quality fashion.</p>
                            </div>
                        </div>
                        <div className="details">
                            <div >
                                <h3 className='logo2'>Clothing Store</h3>
                            </div>
                            <div className='bttn3'>
                                <a href=""><MDBBtn className="bttn w-32 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" onClick={() => LefttArrowRef.current?.playFromBeginning()}>
                                    <span> GitHub</span>
                                    <span className="d-flex align-items-center">
                                    <Player ref={LefttArrowRef} icon={ICONN} size={25} />
                                    </span>
                                </MDBBtn></a>
                                <a href=""><MDBBtn className="bttn2 w-36 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" >
                                    <span>Live Demo</span>
                                    
                                </MDBBtn></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="card"
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <div className="front">
                            <div className='sime'>
                                <img src="/images/لقطة شاشة 2026-08-16 213857.png" alt="" style={{ width:"100%", height:"100%", borderRadius:"20px 20px 0 0"}} />
                            </div>
                            <div className='simee'>
                                <h3 className='logo2'>Candle Store</h3>
                                <p>Beautifully scented candles crafted to bring warmth.</p>
                            </div>
                        </div>
                        <div className="details">
                            <div >
                                <h3 className='logo2'>Candle Store</h3>
                            </div>
                            <div className='bttn3'>
                                <a href="https://github.com/haidi2027/storeCandle.git"><MDBBtn className="bttn w-32 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" onClick={() => LefttArrowRef.current?.playFromBeginning()}>
                                    <span> GitHub</span>
                                    <span className="d-flex align-items-center">
                                    <Player ref={LefttArrowRef} icon={ICONN} size={25} />
                                    </span>
                                </MDBBtn></a>
                                <a href="https://store-candle.vercel.app"><MDBBtn className="bttn2 w-36 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2">
                                    <span>Live Demo</span>
                                    
                                </MDBBtn></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="card"
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="front">
                            <div className='sime'>
                                <img src="/images/لقطة شاشة 2026-08-16 214144.png" alt="" style={{ width:"100%", height:"100%", borderRadius:"20px 20px 0 0"}} />
                            </div>
                            <div className='simee'>
                                <h3 className='logo2'>Clothing Store</h3>
                                <p>A modern clothing store offering stylish, <br /> high-quality fashion.</p>
                            </div>
                        </div>
                        <div className="details">
                            <div >
                                <h3 className='logo2'>Clothing Store</h3>
                            </div>
                            <div className='bttn3'>
                                <a href="https://github.com/haidi2027/e-commerce.git"><MDBBtn className="bttn w-32 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" onClick={() => LefttArrowRef.current?.playFromBeginning()}>
                                    <span> GitHub</span>
                                    <span className="d-flex align-items-center">
                                    <Player ref={LefttArrowRef} icon={ICONN} size={25} />
                                    </span>
                                </MDBBtn></a>
                                <a href="https://e-commerce-xi-red.vercel.app"><MDBBtn className="bttn2 w-36 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2">
                                    <span>Live Demo</span>
                                    
                                </MDBBtn></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="card"
                        initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="front">
                            <div className='sime'>
                                <img src="/images/لقطة شاشة 2026-08-30 171103.png" alt="" style={{ width:"100%", height:"100%", borderRadius:"20px 20px 0 0"}} />
                            </div>
                            <div className='simee'>
                                <h3 className='logo2'>Supermarket</h3>
                                <p>A convenient online supermarket offering fresh fruits and vegetables.</p>
                            </div>
                        </div>
                        <div className="details">
                            <div >
                                <h3 className='logo2'>Supermarket</h3>
                            </div>
                            <div className='bttn3'>
                                <a href=""><MDBBtn className="bttn w-32 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" onClick={() => LefttArrowRef.current?.playFromBeginning()}>
                                    <span> GitHub</span>
                                    <span className="d-flex align-items-center">
                                    <Player ref={LefttArrowRef} icon={ICONN} size={25} />
                                    </span>
                                </MDBBtn></a>
                                <a href=""><MDBBtn className="bttn2 w-36 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2">
                                    <span>Live Demo</span>
                                    
                                </MDBBtn></a>
                            </div>
                        </div>
                    </motion.div>
            </div>
        </div>
        </>
    )
}
export default Five
