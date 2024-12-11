"use client";
import React from "react";
import {FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact,} from "react-icons/fa";
import {SiNextdotjs, SiTailwindcss} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "motion/react";
import Experience from "@/components/resume/experience";
import {about} from "@/lib/data";
import Schools from "@/components/resume/schools";
import Skills from "../skills/skills";
import {ExpandableCardDemo} from "@/components/resume/aboutme";

// Types for data
interface InfoItem {
    fieldName: string;
    fieldValue: string;
}

interface EducationItem {
    institution: string;
    degree: string;
    duration: string;
}

interface Skill {
    icon: React.ReactElement;
    name: string;
}


const experience = {
    title: "",
    description:
        ""
};

const education = {
    title: "",
    description:
        ""
};

const skills = {
    title: "",
    description:
        "",
    skillList: [
        {icon: <FaHtml5/>, name: "html 5"},
        {icon: <FaCss3/>, name: "css 3"},
        {icon: <FaJs/>, name: "javascript"},
        {icon: <FaReact/>, name: "react.js"},
        {icon: <SiNextdotjs/>, name: "next.js"},
        {icon: <SiTailwindcss/>, name: "tailwind.css"},
        {icon: <FaNodeJs/>, name: "node.js"},
        {icon: <FaFigma/>, name: "figma"},
    ] as Skill[],
};

// Component
const Resume: React.FC = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 min-w-full"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[100]"
                >
                    <div className="w-full max-w-[340px] mx-auto ">
                        {/* Table Title */}
                        <h1 className="text-9xl font-semibold mb-4">Why Hire Me?</h1>
                        {/* Title */}

                        <TabsList className="flex flex-col w-full gap-6">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About me</TabsTrigger>
                        </TabsList>
                    </div>


                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience">
                            <Section title={experience.title} description={experience.description}>
                                <ScrollArea className="h-[500px] ">
                                    <Experience/>
                                </ScrollArea>
                            </Section>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education">
                            <Section title={education.title} description={education.description}>
                                <ScrollArea className="h-[500px]">
                                    <Schools/>
                                </ScrollArea>
                            </Section>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills">
                            <Section title={skills.title} description={skills.description}>
                                {/*<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">*/}
                                {/*    {skills.skillList.map((skill, index) => (*/}
                                {/*        <SkillCard key={index} icon={skill.icon} name={skill.name}/>*/}
                                {/*    ))}*/}
                                {/*</ul>*/}
                                <Skills/>
                            </Section>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about">
                            <Section title={about.title} description={about.description}>
                                {/*<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">*/}
                                {/*    {about.info.map((item: InfoItem, index: number) => (*/}
                                {/*        <InfoItem key={index} label={item.fieldName} value={item.fieldValue}/>*/}
                                {/*    ))}*/}
                                {/*</ul>*/}
                                <ExpandableCardDemo/>
                            </Section>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

// Helper components
const Section: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({
                                                                                                  title,
                                                                                                  description,
                                                                                                  children
                                                                                              }) => (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
        {children}
    </div>
);

const Card: React.FC<{ title: string; subtitle: string; duration: string }> = ({title, subtitle, duration}) => (
    <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
        <span className="text-accent">{duration}</span>
        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{title}</h3>
        <div className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
            <p className="text-white/60">{subtitle}</p>
        </div>
    </li>
);

const SkillCard: React.FC<{ icon: React.ReactElement; name: string }> = ({icon, name}) => (
    <TooltipProvider delayDuration={100}>
        <Tooltip>
            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                <div className="text-6xl group-hover:text-accent transition-all duration-300">{icon}</div>
            </TooltipTrigger>
            <TooltipContent>
                <p className="capitalize">{name}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({label, value}) => (
    <li className="flex items-center justify-center xl:justify-start gap-4">
        <span className="text-white/60">{label}</span>
        <span className="text-xl">{value}</span>
    </li>
);

export default Resume;