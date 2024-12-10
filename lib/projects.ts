import TerraconImg from "@/public/Projects/terr/M&A Final.pptx.png";
import greatblueheron from "@/public/Projects/gbho/img.png";
import airbnblogo from "@/public/Projects/AirBnb/image.png";
import meta from "@/public/Projects/APM/META/meta.jpeg";
import lgih from "@/public/Projects/APM/LGIH/logo.jpeg";
import cffn from "@/public/Projects/APM/CFFN/img.png";
import brofi from "@/public/Projects/BroFi/img.png";

export const projectsData = [
    // {
    //     id: 1,
    //     title: "BroFi",
    //     description:
    //         "Developing BroFi, a financial management platform with real-time data and analytics to empower users with informed financial decision-making",
    //     tags: ["Next.js", "TypeScript", "Django", "Docker", "Kubernetes"],
    //     imageUrl: brofi,
    //     link: "https://brofi.app/",
    //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "icons8-docker.svg", "Django.svg"],
    //     date: "2024",
    //     area: "Web Development",
    // },
    {
        id: 2,
        title: "Portfolio Management CFFN",
        description:
            "Conducted financial analysis and valuation, recommending a Buy rating based on dividend yield and strategic asset management",
        tags: ["Financial Analysis", "DCF Valuation", "Valuation"],
        imageUrl: cffn,
        link: "/projects/finance/capitol-federal-financial",
        iconLists: ["excel.svg", "word.svg", "power-point.svg"],
        date: "2022",
        area: "Finance",
    },
    {
        id: 3,
        title: "Portfolio Management META",
        description:
            "Conducted valuation and recommended a Buy rating based on strong DAUs and Metaverse potential.",
        tags: ["Financial Analysis", "DCF Valuation"],
        imageUrl: meta,
        link: "/projects/finance/meta",
        iconLists: ["excel.svg", "word.svg", "power-point.svg"],
        date: "2022",
        area: "Finance",
    },
    {
        id: 4,
        title: "Portfolio Management LGIH",
        description:
            "Conducted valuation using DCF and P/E methods, recommending a Hold rating",
        tags: ["Big Data Analytics", "Statistical Analysis"],
        imageUrl: lgih,
        link: "/projects/finance/lgi-homes",
        iconLists: ["excel.svg", "word.svg", "power-point.svg", "rstudio.svg"],
        date: "2022",
        area: "Finance",
    },
    {
        id: 5,
        title: "Terracon Sell-Side M&A",
        description:
            "Conducted a sell-side M&A advisory analysis for Terracon achieving an acquisition price of $1.54 billion.",
        tags: ["Mergers & Acquisitions (M&A)", "DCF Valuation", "Private Equity"],
        imageUrl: TerraconImg,
        link: "/projects/finance/terracon",
        iconLists: ["excel.svg", "word.svg", "power-point.svg"],
        date: "2023",
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
        link: "/projects/marketing/great-blue-heron-outdoors",
        date: "2022",
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
        link: "/projects/marketing/airbnb",
        date: "2022",
        area: "Marketing",
    },
] as const;