import React from "react";
import CountUp from "react-countup";
import useSWR from "swr";
import axios from "axios";


const fetcher = (url: string) => axios.get(url).then(res => res.data);

interface Stat {
    title: string;
    count: number;
}

export default function Stats() {
    const {data, error} = useSWR('/api/strava', fetcher);
    const milesRan = 1891;
    const stats: Stat[] = [
        {title: "Projects", count: 7},
        {title: "Technologies mastered", count: 4},
        {title: "Years of work experience", count: 2},
        {title: "Miles ran", count: milesRan},
    ];

    return(
        <section className={"mt-5"}>
            <div className={"container mx-auto"}>
                <div className={"flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none xl:justify-start"}>
                    {stats.map((stat, index) => (
                        <div key={index} className={"relative flex-1 flex gap-4 items-center justify-center"}>
                            <CountUp
                                end={stat.count}
                                duration={5}
                                delay={0.5}
                                className={"text-5xl font-extrabold"}
                            />
                            <p className={`${stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-xl`}>
                                {stat.title}
                            </p>
                        </div>
                    ))}
                </div>
                {/*{error &&*/}
                {/*<div>Failed to load stats, displaying default values</div>*/}
                {/*}*/}
            </div>
        </section>
    )
}