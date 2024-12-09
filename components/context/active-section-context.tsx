"use client"
import React, {useState} from 'react';
import type {SectionName} from "@/lib/types";





type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

export const ActiveSectionContext = React.createContext<{
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}>({
    activeSection: "Home",
    setActiveSection: () => {},
    timeOfLastClick: 0,
    setTimeOfLastClick: () => {}
})

const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {
    // we set the active section to be the first section in the array
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    // we need to keep track of the time of the last click to prevent the active section from changing when the user scrolls
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
            {children}
        </ActiveSectionContext.Provider>
    );
};


export default ActiveSectionContextProvider;
