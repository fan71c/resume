//
//
import React from "react";
import {FaBriefcase, FaChartLine, FaChartPie, FaGraduationCap, FaMoneyCheckAlt} from "react-icons/fa";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    // {
    //     name: "About",
    //     hash: "#about",
    // },
    {
        name: "Projects",
        hash: "#finance",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Achievements",
        hash: "#achievements",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Junior Accountant - Capital Market Service",
        location: "Sofia City, Bulgaria · Remote",
        description: "Managed daily accounting and tax needs for Capital Market Services clients, administered a portfolio of 10+ SPVs, and prepared reconciliations for the European Central Bank",
        icon: React.createElement(FaBriefcase),
        date: "Oct 2023 - Apr 2024",
    },
    {
        title: "Master's degree, Computer and Information Technology",
        location: "University of Pennsylvania, USA",
        description:
            "Currently pursuing a Master's degree with a focus on Computer and Information Technology",
        icon: React.createElement(FaGraduationCap),
        date: "Jul 2023 - Aug 2025",
    },
    {
        title: "Marketing Behavioral Lab Research Assistant",
        location: "Lawrence, Kansas, United States",
        description: "Analyzed behavioral study data with Excel and IBM SPSS, supported lab operations with 12+ participants, and extracted specific consumer behavior insights to inform targeted marketing strategies",
        icon: React.createElement(FaChartLine),
        date: "Aug 2022 - May 2023",
    },
    {
        title: "Financial Economist",
        location: "Zaporizhzhya, Ukraine · Remote",
        description:
            "Boosted profitability by 6% and streamlined operations by analyzing financial statements, trained staff on data analysis tools, and saved 4-7% per transaction by integrating digital asset payments during the war",
        icon: React.createElement(FaMoneyCheckAlt),
        date: "Oct 2022 - Apr 2023",
    },

    {
        title: "Study Abroad - Finance",
        location: "The London School of Economics and Political Science (LSE), UK",
        description: "Completed a Finance study abroad program specializing in Alternative Investments",
        icon: React.createElement(FaGraduationCap),
        date: "Jun 2022 - Jul 2022",
    },
    {
        title: "Study Abroad - Marketing",
        location: "CIMBA, Paderno del Grappa, Italy",
        description:
            "Studied International Marketing and The Global Consumer, focused on Global Business Education in Italy",
        icon: React.createElement(FaGraduationCap),
        date: "May 2022 - Jun 2022",
    },
    {
        title: "Applied Portfolio Management (APM): Student Analyst",
        location: "Lawrence, Kansas, United States",
        description:
            "Managed a $500K endowment fund with a team, applied market capitalization techniques, and gained hands-on experience from Wall Street professionals",
        icon: React.createElement(FaChartPie),
        date: "Jan 2022 - May 2022",
    },
    {
        title: "Double Bachelor's degree, Finance & Marketing",
        location: "The University of Kansas School of Business, USA",
        description:
            "Graduated with a double major in Finance and Marketing, consistently achieving Honor Roll status with a GPA of 3.9 or higher throughout all semesters",
        icon: React.createElement(FaGraduationCap),
        date: "Aug 2020 - May 2023",
    }

] as const;


export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "Prisma",
    "Python",
    "Docker",
    "MS Excel",
    "DCF Valuation",
    "Java",
    "C",
    "SQL",
    "Pandas/Numpy",
    "Sklearn",
    "PyTorch",
] as const;