import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
import ICON from "./assets/wired-lineal-215-arrow-u-turn-left-down-hover-pointing.json";
import ICONN from "./assets/wired-lineal-218-arrow-out-circle-down-right-hover-pointing.json"
function App() {
  const RightArrowRef = useRef(null);
  const LefttArrowRef = useRef(null);

  useEffect(() => {
    RightArrowRef.current?.playFromBeginning();
    LefttArrowRef.current?.playFromBeginning();
  }, []);


  return (
    <>

    <section className="w-full h-screen text-white text-5xl font-bold relative" id='home'>
      <div className="absolute top-48 left-36 motions">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="loader">
            <div className="scanner">
              <span>HELLO!!!</span>
            </div>
          </div>
        </motion.div>

  <motion.h2
    className="text-5xl logo2 mt-5"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    I'm Haidi Romany
  </motion.h2>

  <motion.h1
    className="text-6xl logo2"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.4 }}
  >
    Frontend
  </motion.h1>

  <motion.h1
    className="text-6xl logo2"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.6 }}
  >
    Developer
  </motion.h1>

  <motion.p
    className="text-lg text-gray-200 logo3"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.8 }}
  >
    Front-End Developer | Building fast, modern websites with
  </motion.p>

  <motion.p
    className="text-lg text-gray-200 logo3"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 1 }}
  >
    React, Tailwind.css,  Next.js, TypeScript, optimized for SEO
  </motion.p>



        <div className="flex gap-12 mt-10">
          <MDBBtn className="bttn w-44 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" 
            onClick={() => {
  document.getElementById("project")?.scrollIntoView({
    behavior: "smooth",
  });

}}>
            <span> Got a broject?</span>
            <span className="d-flex align-items-center">
              <Player ref={LefttArrowRef} icon={ICONN} size={25} />
            </span>
          </MDBBtn>
          <MDBBtn className="bttn2 w-44 logo3 d-flex align-items-center justify-content-center flex-nowrap gap-2" onClick={() => RightArrowRef.current?.playFromBeginning()}>
            <a href="https://drive.google.com/file/d/126xZwY_NYFTD8--IykJCZ3aIUlGrRsyV/view?usp=sharing"><span>My Resume</span></a>
            <span className="d-flex align-items-center">
              <Player ref={ RightArrowRef} icon={ICON} size={25} />
            </span>
          </MDBBtn>
        </div>
      </div>

      
      
      <div className="orbital">
        <div className="ringOne"></div>
        <div className="ringTwo"></div>
        <div className="ringThree"></div>
        <div className="core"></div>
        <div className="spin"></div>
      </div>

    </section>
    
    
    </>
  );
}

export default App;