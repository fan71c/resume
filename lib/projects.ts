import TerraconImg from "@/public/Projects/terr/M&A Final.pptx.png";
import greatblueheron from "@/public/Projects/gbho/img.png";
import airbnblogo from "@/public/Projects/AirBnb/image.png";
import meta from "@/public/Projects/APM/META/meta.jpeg";
import lgih from "@/public/Projects/APM/LGIH/logo.jpeg";
import cffn from "@/public/Projects/APM/CFFN/img.png";
import nba from "@/public/Projects/NBA/nba.png";

export const projectsData = [
    {
        id: 1,
        title: "NBA Player Performance Prediction",
        description:
            "Predicted NBA player performance using machine learning models and player statistics",
        tags: ["Python", "Machine Learning", "Pandas", "Numpy", "Scikit-learn"],
        imageUrl: nba,
        link: "/blog/nba",
        iconLists: ["numpy-seeklogo-2.svg", "pandas-seeklogo.svg", "scikit-learn.svg", "sql-database-generic.svg"],
        date: "2024",
        github: "",
        source: "",
        area: "Data Science",
    },
    {
        id: 2,
        title: "Portfolio Management CFFN",
        description:
            "Conducted financial analysis and valuation, recommending a Buy rating based on dividend yield and strategic asset management",
        tags: ["Financial Analysis", "DCF Valuation", "Valuation"],
        imageUrl: cffn,
        link: "/blog/capitol",
        iconLists: ["excel.svg", "word.svg", "power-point.svg"],
        date: "2022",
        github: "",
        source: "",
        area: "Finance",
    },
    {
        id: 3,
        title: "Portfolio Management META",
        description:
            "Conducted valuation and recommended a Buy rating based on strong DAUs and Metaverse potential.",
        tags: ["Financial Analysis", "DCF Valuation"],
        imageUrl: meta,
        link: "/blog/meta",
        iconLists: ["excel.svg", "word.svg", "power-point.svg"],
        date: "2022",
        github: "",
        source: "",
        area: "Finance",
    },
    {
        id: 4,
        title: "Portfolio Management LGIH",
        description:
            "Conducted valuation using DCF and P/E methods, recommending a Hold rating",
        tags: ["Big Data Analytics", "Statistical Analysis"],
        imageUrl: lgih,
        link: "/blog/lgi",
        iconLists: ["excel.svg", "word.svg", "power-point.svg", "rstudio.svg"],
        date: "2022",
        github: "",
        source: "",
        area: "Finance",
    },
    {
        id: 5,
        title: "Terracon Sell-Side M&A",
        description:
            "Conducted a sell-side M&A advisory analysis for Terracon achieving an acquisition price of $1.54 billion.",
        tags: ["Mergers & Acquisitions (M&A)", "DCF Valuation", "Private Equity"],
        imageUrl: TerraconImg,
        link: "/blog/terracon",
        iconLists: ["excel.svg", "word.svg", "power-point.svg"],
        date: "2023",
        github: "",
        source: "",
        area: "Finance",
    },
    {
        id: 6,
        title: "Great Blue Heron Outdoors",
        description:
            "Boosted brand awareness and customer engagement for gbho' coffee shop via survey and statistical analysis",
        tags: ["Survey Design", "Statistical Analysis"],
        iconLists: ["excel.svg", "word.svg", "power-point.svg", "IBM SPSS Statistics.svg"],
        imageUrl: greatblueheron,
        link: "/blog/gbho",
        date: "2022",
        github: "",
        source: "",
        area: "Marketing",
    },
    {
        id: 7,
        title: "Optimizing Airbnb Host Performance",
        description:
            "Analyzed Airbnb listings in the Netherlands to uncover factors impacting host revenues and customer satisfaction",
        tags: ["CRM", "PCA", "Regression Analysis"],
        iconLists: ["excel.svg", "word.svg", "power-point.svg", "rstudio.svg"],
        imageUrl: airbnblogo,
        link: "/blog/airbnb",
        date: "2022",
        github: "",
        source: "",
        area: "Marketing",
    },
] as const;