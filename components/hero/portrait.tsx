"use client"
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";


export default function Portrait() {
    return <motion.div className={"flex items-center justify-center relative w-full h-full"}
                       initial={{opacity: 0}}
                       animate={{
                           opacity: 1,
                           transition: {delay: 1, duration: 0.4, ease: "easeIn"},
                       }}>
        <motion.svg className={"w-[300px] xl:w-[506px] h-[300px] xl:-[506px] "}
                    fill={"transparent"}
                    viewBox={"0 0 506 506"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type: "tween", duration: 1}}
        >
            <motion.circle
                cx={"253"}
                cy={"253"}
                r={"192"}
                stroke={"violet"}
                strokeWidth={"4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{duration: 20, repeat: Infinity, repeatType: "reverse"}}
            >
            </motion.circle>
        </motion.svg>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}}
                    transition={{type: "tween", duration: 1}} className={"absolute"}>
            <Image src={"/danylo.jpg"} alt={"Danylo Burenkov Portrait"} width="192" height="192"
                   quality={95}
                   priority={true}
                   className={"h-[13.9rem] w-[13.9rem] rounded-full  object-contain shadow-xl"}/>
        </motion.div>
    </motion.div>
}