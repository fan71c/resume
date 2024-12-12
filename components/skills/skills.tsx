"use client";
import React from 'react';
import SectionHeading from "@/components/ui/section-heading";
import {skillsData} from "@/lib/data";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";


const Skills = () => {

    // const ref = useSectionInView("Skills");
    return (
        <section className={"mb-28 max-w-[53rem] scroll-mt-28 text-center "} id={"skills"}>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className={"flex flex-wrap justify-center gap-2 text-lg dark:text-gray-800 text-gray-200"}>
                {
                    skillsData.map((skill, index) => (
                        <motion.li key={index} className={"dark:bg-white bg-gray-700 border border-black[0.1] rounded-xl px-5"}
                                   initial={{scale: 0}}
                                   whileInView={{scale: 1}}
                                   transition={{delay: index * 0.1}}
                                   viewport={{once: true}}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Skills;
