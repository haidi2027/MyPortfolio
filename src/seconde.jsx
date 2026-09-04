import ICON from "./assets/doodle-motif-742-pagination-hover-pinch.json";
import ICONN from "./assets/wired-flat-12-layers-hover-squeeze.json";
import ICONNN from "./assets/doodle-color-1416-triangle-hover-pinch.json";
import ICON2 from "./assets/doodle-color-1325-code-branch-hover-pinch.json";
import ICON3 from "./assets/wired-lineal-2572-logo-github-hover-pinch.json";
import ICON4 from "./assets/doodle-color-35-pencil-hover-circle.json";

import {useRef } from "react";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
function Skill({ icon, name, size = 80, absolute = false }) {
    const iconRef = useRef(null);

    return (
        <div
            className="w-28 h-28 flex justify-center items-center flex-wrap cursor-pointer relative shrink-0"
            onMouseEnter={() => iconRef.current?.playFromBeginning()}
        >
            <div className={absolute ? "absolute top-2" : ""}>
                <Player
                    ref={iconRef}
                    icon={icon}
                    size={size}
                />
            </div>

            <h6 className={absolute ? "text-white absolute bottom-0" : "text-white"}>
                {name}
            </h6>
        </div>
    );
}


function SkillsGroup() {
    return (
        <div className="flex gap-16 shrink-0">

            <Skill
                icon={ICON}
                name="HTML"
            />

            <Skill
                icon={ICON4}
                name="CSS"
                size={70}
                absolute
            />

            <Skill
                icon={ICON}
                name="Javascript"
            />

            <Skill
                icon={ICONN}
                name="React"
            />

            <Skill
                icon={ICONNN}
                name="Next"
            />

            <Skill
                icon={ICON2}
                name="Git"
                size={70}
                absolute
            />

            <Skill
                icon={ICON3}
                name="GitHub"
                size={70}
                absolute
            />

        </div>
    );
}


function Seconde() {
    const LefttArrowRef = useRef(null);
    const towArrowRef = useRef(null);
    const threeArrowRef = useRef(null);
    const fourArrowRef = useRef(null);
    const fiveArrowRef = useRef(null);
    const sixArrowRef = useRef(null);
    const oneArrowRef = useRef(null);

    
    return (
        <>
        <div className="w-full h-40 flex justify-center items-center gap-5">
        <div className="w-full h-40  flex justify-center items-center gap-4 z-50 bar">
            <div className="w-full h-40 flex items-center overflow-hidden">

            <motion.div
                className="flex shrink-0 gap-15"
                style={{willChange:"transform"}}
                animate={{
                    x: ["0%", "-50%"]
                }}
                transition={{
                    x: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }}
            >

                
            <SkillsGroup />
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap cursor-pointer" 
                onMouseEnter={() => LefttArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={LefttArrowRef} 
                    icon={ICON} 
                    size={80} 
                />
                <h6 className="text-white">HTML</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                    onMouseEnter={() => oneArrowRef.current?.playFromBeginning()}>
                    <div className="absolute top-2">
                        <Player 
                            ref={oneArrowRef} 
                            icon={ICON4} 
                            size={70} 
                        /> 
                    </div>
                    <h6 className="text-white absolute bottom-0">CSS</h6>
                </div>
            <div className="w-28 h-28  flex justify-center items-center flex-wrap cursor-pointer"
                onMouseEnter={() => towArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={towArrowRef} 
                    icon={ICON} 
                    size={80} 
                />
                <h6 className="text-white">Javascript</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap cursor-pointer" 
                onMouseEnter={() => threeArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={threeArrowRef} 
                    icon={ICONN} 
                    size={80} 
                />
                <div><h6 className="text-white">React</h6></div>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                onMouseEnter={() => fourArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={fourArrowRef} 
                    icon={ICONNN} 
                    size={80} 
                /> 
                <h6 className="text-white ">Next</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                onMouseEnter={() => fiveArrowRef.current?.playFromBeginning()}>
                <div className="absolute top-2">
                    <Player 
                        ref={fiveArrowRef} 
                        icon={ICON2} 
                        size={70} 
                    /> 
                </div>
                <h6 className="text-white absolute bottom-0">Git</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                    onMouseEnter={() => sixArrowRef.current?.playFromBeginning()}>
                    <div className="absolute top-2">
                        <Player 
                            ref={sixArrowRef} 
                            icon={ICON3} 
                            size={70} 
                        /> 
                    </div>
                    <h6 className="text-white absolute bottom-0">GitHub</h6>
            </div>

            <SkillsGroup />
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap cursor-pointer" 
                onMouseEnter={() => LefttArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={LefttArrowRef} 
                    icon={ICON} 
                    size={80} 
                />
                <h6 className="text-white">HTML</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                    onMouseEnter={() => oneArrowRef.current?.playFromBeginning()}>
                    <div className="absolute top-2">
                        <Player 
                            ref={oneArrowRef} 
                            icon={ICON4} 
                            size={70} 
                        /> 
                    </div>
                    <h6 className="text-white absolute bottom-0">CSS</h6>
                </div>
            <div className="w-28 h-28  flex justify-center items-center flex-wrap cursor-pointer"
                onMouseEnter={() => towArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={towArrowRef} 
                    icon={ICON} 
                    size={80} 
                />
                <h6 className="text-white">Javascript</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap cursor-pointer" 
                onMouseEnter={() => threeArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={threeArrowRef} 
                    icon={ICONN} 
                    size={80} 
                />
                <div><h6 className="text-white">React</h6></div>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                onMouseEnter={() => fourArrowRef.current?.playFromBeginning()}>
                <Player 
                    ref={fourArrowRef} 
                    icon={ICONNN} 
                    size={80} 
                /> 
                <h6 className="text-white ">Next</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                onMouseEnter={() => fiveArrowRef.current?.playFromBeginning()}>
                <div className="absolute top-2">
                    <Player 
                        ref={fiveArrowRef} 
                        icon={ICON2} 
                        size={70} 
                    /> 
                </div>
                <h6 className="text-white absolute bottom-0">Git</h6>
            </div>
            <div  className="w-28 h-28  flex justify-center items-center flex-wrap relative" 
                    onMouseEnter={() => sixArrowRef.current?.playFromBeginning()}>
                    <div className="absolute top-2">
                        <Player 
                            ref={sixArrowRef} 
                            icon={ICON3} 
                            size={70} 
                        /> 
                    </div>
                    <h6 className="text-white absolute bottom-0">GitHub</h6>
                </div>
            </motion.div>

        </div>
        </div>
        </div>
        </>
    );
}

export default Seconde;