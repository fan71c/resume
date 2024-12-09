"use client";
import React, {useContext} from 'react';
import {motion} from "motion/react"
import {links} from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import {ActiveSectionContext} from "@/components/context/active-section-context";


export default function Header() {
    const {activeSection, setActiveSection, setTimeOfLastClick} = useContext(ActiveSectionContext)
    return (
        <header className="z-[999] relative top-0 left-0 w-full h-24 ">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-300 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-50 dark:border-white/40 dark:bg-opacity-75"
                initial={{y: -100, x: "-50%", opacity: 0}}
                animate={{y: 0, x: "-50%", opacity: 1}}
            ></motion.div>
            <nav
                className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className={"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-5"}>
                    {
                        links.map((link, i) => (
                            <motion.li key={link.hash} className={"h-3/4 flex items-center justify-center relative"}
                                       initial={{y: -100, opacity: 0}}
                                       animate={{y: 0, opacity: 1, transition: {delay: i * 0.1}}}
                            >
                                <Link
                                    onClick={() => {
                                        setActiveSection(link.name)
                                        setTimeOfLastClick(Date.now())
                                    }}
                                    href={link.hash}
                                    className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-violet-700 transition", {"text-gray-950": activeSection === link.name})}>
                                    {link.name}

                                    {
                                        link.name === activeSection && (
                                            <motion.span className={"bg-gray-100 rounded-full absolute inset-0 -z-10"}
                                                         layoutId={"activeSection"}
                                                         transition={{type: "spring", stiffness: 150, damping: 30}}
                                            ></motion.span>)
                                    }
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}
