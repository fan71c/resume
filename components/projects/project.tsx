import {projectsData} from "@/lib/projects";
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "motion/react";
import {FaLocationArrow} from "react-icons/fa6";
import {PinContainer} from "@/components/ui/3d-pin";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = typeof projectsData[number];

export default function Project({title, description, tags, imageUrl, link, date, iconLists}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                position: "relative",
            }}
            className="group mb-3 sm:mb-8 last:mb-0 "
        >
            <PinContainer
                title={title}
                href={link}
                className={"text-white"}
            >
                <div
                    className="relative flex items-center justify-center sm:w-[30rem] w-full overflow-hidden h-32 lg:h-72 mb-6 "
                >
                    <Image
                        src={imageUrl}
                        alt="Cover"
                        className="z-10 bottom-0 w-full h-auto"
                    />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                </h1>

                <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                    }}
                >
                    {description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-3 mb-3">
                    <div className="flex items-center">
                        {iconLists.map((icon: string, index: number) => (
                            <div
                                key={index}
                                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
                                style={{
                                    transform: `translateX(-${5 * index + 2}px)`,
                                }}
                            >
                                <Image src={icon} alt={`Icon ${index}`} className="p-2" width={"400"} height={"400"}/>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center ">
                        <Link className="flex lg:text-xl md:text-xs text-sm text-purple " href={link}>
                            Learn More
                            <FaLocationArrow className="ml-3 mt-1.5" color="#CBACF9" href={link}/>
                        </Link>
                    </div>
                </div>
            </PinContainer>
        </motion.div>
    );
}
