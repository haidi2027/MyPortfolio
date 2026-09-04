import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import "../component/oceanBackground.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function OceanBackground() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const fish = document.querySelector(".fish");

            const fishHeadAndBody = [
                ...document.querySelectorAll(".fish__head"),
                ...document.querySelectorAll(".fish__body"),
            ];

            const sections = [
                ...document.querySelectorAll(".portfolio-section"),
            ];

            const lights = [
                ...document.querySelectorAll("[data-lights]"),
            ];

            const bubbles = gsap.timeline({ paused: true });

            bubbles.set(".bubbles__bubble", {
                y: 100,
            });

            bubbles.to(".bubbles__bubble", {
                scale: 1.2,
                y: -300,
                opacity: 1,
                duration: 2,
                stagger: 0.2,
            });

            bubbles.to(
                ".bubbles__bubble",
                {
                    scale: 1,
                    opacity: 0,
                    duration: 1,
                },
                "-=1"
            );

            const width = window.innerWidth;
            const height = window.innerHeight;

            const rx = width < 1000 ? width / 1200 : 1;
            const ry = height < 700 ? height / 1200 : 1;

            const path = [
                { x: 800, y: 200 },
                { x: 900, y: 20 },
                { x: 1100, y: 100 },

                { x: 1000, y: 200 },
                { x: 900, y: 20 },
                { x: 10, y: 500 },

                { x: 100, y: 300 },
                { x: 500, y: 400 },
                { x: 1000, y: 200 },

                { x: 1100, y: 300 },
                { x: 400, y: 400 },
                { x: 200, y: 250 },

                { x: 100, y: 300 },
                { x: 500, y: 450 },
                { x: 1100, y: 500 },
            ];

            const scaledPath = path.map(({ x, y }) => ({
                x: x * rx,
                y: y * ry,
            }));

            // Fish animation
            const fishTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                },
            });

            fishTimeline.to(fish, {
                motionPath: {
                    path: scaledPath,
                    align: "self",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                },
                duration: 10,
            });

            fishTimeline.to(
                fish,
                {
                    rotateX: 180,
                },
                1
            );

            fishTimeline.to(
                fish,
                {
                    rotateX: 0,
                },
                2.5
            );

            fishTimeline.to(
                fish,
                {
                    z: -500,
                    duration: 2,
                },
                2.5
            );

            fishTimeline.to(
                fish,
                {
                    rotateX: 180,
                },
                4
            );

            fishTimeline.to(
                fish,
                {
                    rotateX: 0,
                },
                5.5
            );

            fishTimeline.to(
                fish,
                {
                    z: -50,
                    duration: 2,
                },
                5
            );

            fishTimeline.to(
                fish,
                {
                    rotate: 0,
                    duration: 1,
                },
                "-=1"
            );

            fishTimeline.to(
                ".fish__skeleton",
                {
                    opacity: 0.6,
                    duration: 0.1,
                    repeat: 4,
                },
                "-=3"
            );

            fishTimeline.to(
                fishHeadAndBody,
                {
                    opacity: 0,
                    duration: 0.1,
                    repeat: 4,
                },
                "-=3"
            );

            fishTimeline.to(
                ".fish__inner",
                {
                    opacity: 0.1,
                    duration: 1,
                },
                "-=1"
            );

            // Lights
            if (lights[0]) {
                const lightsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 6,
                    },
                });

                lightsTimeline.from(lights[0], {
                    x: width * -1,
                    y: height,
                    duration: 80,
                    ease: "power4.out",
                });
                lightsTimeline.to(lights[0], {
                    x: width,
                    y: height * -1,
                    duration: 80,
                    ease: "power4.out",
                });
            }

            // Sections / bubbles
            sections.forEach((section, i) => {
                const p = section.querySelector("p");

                if (!p) return;

                gsap.set(p, {
                    opacity: 0,
                });

                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",

                    onEnter: () => {
                        gsap.to(p, {
                            opacity: 1,
                            duration: 1,
                        });

                        const { top, left } = fish.getBoundingClientRect();

                        gsap.set(".bubbles", {
                            x: left,
                            y: top,
                        });

                        bubbles.restart();

                        if (i > 6) {
                            gsap.to(".bubbles", {
                                opacity: 0,
                            });
                        }
                    },

                    onLeave: () => {
                        gsap.to(p, {
                            opacity: 0,
                            duration: 1,
                        });
                    },

                    onLeaveBack: () => {
                        gsap.to(p, {
                            opacity: 0,
                            duration: 1,
                        });
                    },
                });
            });

            // Rays
            gsap.to(".rays", {
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "30% top",
                    scrub: true,
                },

                opacity: 0,
                y: -500,
                ease: "power4.in",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="ocean-background"
        >
            {/* Lights */}
            <div className="lights">
                <div className="lights__group" data-lights>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                    <div className="lights__light"></div>
                </div>
            </div>

            {/* Fish */}
            <div className="fish-wrapper">
                <div className="fish">
                    <div className="fish__skeleton"></div>

                    <div className="fish__inner">

                        <div className="fish__body"></div>
                        <div className="fish__body"></div>
                        <div className="fish__body"></div>
                        <div className="fish__body"></div>

                        <div className="fish__head"></div>
                        <div className="fishhead fishhead--2"></div>
                        <div className="fishhead fishhead--3"></div>
                        <div className="fishhead fishhead--4"></div>

                        <div className="fish__tail-main"></div>
                        <div className="fish__tail-fork"></div>

                        <div className="fish__fin"></div>
                        <div className="fishfin fishfin--2"></div>

                    </div>
                </div>
            </div>

            {/* Bubbles */}
            <div className="bubbles">
                <div className="bubbles__inner">
                    <div className="bubbles__bubble"></div>
                    <div className="bubbles__bubble"></div>
                    <div className="bubbles__bubble"></div>
                </div>
            </div>

            {/* Rays */}
            <div className="rays">
                <div data-rays></div>
            </div>
        </div>
    );
}

export default OceanBackground;