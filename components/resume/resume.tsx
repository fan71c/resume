"use client";
import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "motion/react";
import Experience from "@/components/resume/experience";
import {about} from "@/lib/data";
import Schools from "@/components/resume/schools";
import Skills from "../skills/skills";
import {ExpandableCardDemo} from "@/components/resume/aboutme";

// Types for data



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
    description: ""
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
            className="min-h-[80vh] flex items-center justify-center py-4 xl:py-0 min-w-full"
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
                            {/*<TabsTrigger value="about">About me</TabsTrigger>*/}
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
                        {/*<TabsContent value="about">*/}
                        {/*    <Section title={about.title} description={about.description}>*/}
                        {/*        <ExpandableCardDemo/>*/}
                        {/*    </Section>*/}
                        {/*</TabsContent>*/}
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


export default Resume;