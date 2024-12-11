"use client"
import React, {useEffect, useState} from 'react';
import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {experiencesData} from "@/lib/data";
import {motion} from "motion/react";
import {useTheme} from "next-themes";
import {useSectionInView} from "@/lib/hooks";
import SectionHeading from "@/components/ui/section-heading";

const Experience: React.FC = () => {
    const ref = useSectionInView("Experience");
    const {theme, resolvedTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    return (
        <section id={"experience"} ref={ref} className={"scroll-mt-28 "}>
            <SectionHeading>
                Work Experience
            </SectionHeading>
            <VerticalTimeline lineColor={currentTheme === "light" ? "rgba(212,26,26,0.05)" : "rgba(255,255,255,0.15)"} animate={true}>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            visible={true}
                            contentStyle={{
                                background: currentTheme === "light" ? "rgba(232,6,6,0.05)" : "rgba(255, 255, 255, 0.9)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                visibility: "visible",
                                zIndex: 1,
                                color: currentTheme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgb(72,150,213)"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            dateClassName={"text-gray-900 dark:text-gray-100 mx-4 font-bold"}
                            icon={item.icon}
                            iconStyle={{
                                background: "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                                zIndex: 2
                            }}
                        >
                            <h3 className="font-semibold capitalize dark:text-gray-900">{item.title}</h3>
                            <p className="font-normal !mt-0 dark:text-gray-900">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;

// src/types/react-vertical-timeline-component.d.ts
declare module 'react-vertical-timeline-component';