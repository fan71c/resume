"use client"
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className={"mb-10 px-4 text-center text-gray-500"}>
            <small className={"mb-2 block text-xs"}>
                &copy; {currentYear} Danylo Burenkov. All rights reserved.
            </small>
            <p className={"text-xs"}>
                <span className={"font-semibold "}>
                    About this website:
                </span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Docker, and deployed on Vercel. API Data fetched from Strava, React Email & Resend
            </p>
        </footer>
    );
};

export default Footer;
