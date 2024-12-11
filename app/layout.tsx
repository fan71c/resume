import type {Metadata} from "next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {ThemeProvider} from "@/components/context/theme-provider";
import {ModeToggle} from "@/components/ui/mode-toggle";
import {BackgroundBeamsWithCollision} from "@/components/context/background-beams-with-collision";



import { Roboto } from 'next/font/google'
import Header from "@/components/header/header";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true} className="scroll-smooth light">
        <body
            className={`${roboto.className} antialiased`}

        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
                {children}
                <div className={"fixed bottom-6 right-6 "}>
                    <ModeToggle/>
                </div>
        </ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
