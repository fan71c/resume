import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import Badge from "@mui/material/Badge";



export default function BadgeCustom() {
    return <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1}}
    >
        <Link href={"https://www.strava.com/athletes/104656393"} >
            <Badge badgeContent={"Strava"} color="primary"
                   className={"-translate-y-[1rem]"}
            />
        </Link>

    </motion.div>;
}