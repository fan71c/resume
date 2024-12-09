"use client"
import React from "react";
import {motion} from "motion/react"
import {useSectionInView} from "@/lib/hooks";
import {FlipWords} from "@/components/ui/flip-words";
import Portrait from "@/components/hero/portrait";
import CallToAction from "@/components/hero/call-to-action-buttons";
import Stats from "@/components/hero/stats";


export default function Hero() {
    const flipWords = ["Next.js", "Python", "Java", "Excel", "Typescript", "SQL", "Pandas/Numpy"]
    const ref = useSectionInView("Home")
    return (
        <section className={"mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-28"} ref={ref}>
            <Portrait/>
            <motion.h1
                className={"text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-400 dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 py-8"}
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{type: "tween", duration: 1}}
            >
                Danylo Burenkov
            </motion.h1>
            <div className={"flex center relative px-12"}>
                <motion.div className={"mb-10 mt-4 text-xl font-medium !leading-[1.5] sm:text-3xl"}
                            initial={{opacity: 0, y: 100}}
                            animate={{opacity: 1, y: 0}}
                >
                    <p>
                        <span className={"font-bold"}>Hello, I'am Danylo</span> I have a background in Finance and
                        Marketing, currently expanding my expertise through <span className={"font-bold"}>computer science studies</span>.
                        I thrive on analyzing financial data and optimizing processes, while also enjoying
                        building <span className={"italic"}>sites</span> as a rising full-stack developer.
                    </p>
                    <div className={"flex justify-center text-justify underline"}>
                        My focus is <FlipWords words={flipWords} className={"font-bold text-violet-700 dark:text-violet-300"}/>
                    </div>
                </motion.div>
            </div>
            <CallToAction/>
            <Stats/>
        </section>
    )
}