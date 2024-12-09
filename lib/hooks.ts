import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import {SectionName} from "@/lib/types";
import {ActiveSectionContext} from "@/components/context/active-section-context";



export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView} = useInView({threshold})
    const {setActiveSection, timeOfLastClick} = React.useContext(ActiveSectionContext)
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName])
    return ref;
}