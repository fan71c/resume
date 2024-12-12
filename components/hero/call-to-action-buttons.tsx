import React from "react";
import {motion} from "framer-motion";
import {ActiveSectionContext} from "@/components/context/active-section-context";
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";


export default function CallToAction() {
    const {activeSection, setActiveSection, setTimeOfLastClick} = React.useContext(ActiveSectionContext)
    return <motion.div
        className={"flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"}
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
    >
        <Link onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now)
        }} href={"#contact"}
              className={"group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"}>
            Contact me here{" "}
            <BsArrowRight className={"opacity-70 group-hover:translate-x-1 transition"}/>
        </Link>
        <a className={"group bg-gray-700/15 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"}
           href={"/CV.pdf"} download>
            Download CV{" "}
            <HiDownload className={"opacity-60 group-hover:translate-y-1 transition"}/>
        </a>
        <a className={"group bg-gray-700/15 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"}
           href={"https://www.linkedin.com/in/danylo-burenkov/"} target={"_blank"} rel="noreferrer">
            <BsLinkedin/>
        </a>
        <a className={"group bg-gray-700/15 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"}
           href={"https://github.com/fan71c"} target={"_blank"} rel="noreferrer">
            <FaGithubSquare/>
        </a>
    </motion.div>
}