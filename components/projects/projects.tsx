"use client";
import React, {useState} from 'react';
import {projectsData} from "@/lib/projects";
import {Button} from "@/components/ui/button";
import {useSectionInView} from "@/lib/hooks";
import Project from "@/components/projects/project";
import SectionHeading from "@/components/ui/section-heading";


const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const filters = ['All', 'Data Science', 'Finance', 'Marketing'];

    const handleFilterChange = (filter: React.SetStateAction<string>) => {
        setSelectedFilter(filter);
    };

    const filteredProjects = selectedFilter === 'All'
        ? projectsData
        : projectsData.filter(project => project.area.includes(selectedFilter));


    const ref = useSectionInView("Projects");

    return (
        <section id={"finance"} className={"scroll-mt-28 min-w-fit mx-2"} ref={ref}>
            <SectionHeading>
                My Projects
            </SectionHeading>

            <div className="flex justify-center mb-6 sm:flex-nowrap flex-wrap gap-2.5 ">
                {filters.map((filter, index) => (
                    <Button
                        key={index}
                        onClick={() => handleFilterChange(filter)}
                        className={`mx-2 px-4 py-2 rounded-full ${
                            selectedFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                        } transition-colors duration-200`}
                    >
                        {filter}
                    </Button>
                ))}
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center sm:gap-x-[5rem] gap-y-[6rem] sm:gap-y-[10rem] my-[8rem]">
                {
                    filteredProjects.map((project) => (
                        <React.Fragment key={project.id}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;


