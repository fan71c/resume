"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "./navbar-menu";
import {cn} from "@/lib/utils";

export function Header() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2"/>
        </div>
    );
}

function Navbar({className}: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActiveAction={setActive}>
                <MenuItem setActiveAction={setActive} active={null} item="Services">

                </MenuItem>
                <MenuItem setActiveAction={setActive} active={null} item="Products">

                </MenuItem>
                <MenuItem setActiveAction={setActive} active={null} item="Pricing">

                </MenuItem>
            </Menu>
        </div>
    );
}
