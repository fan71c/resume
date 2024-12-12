import Hero from "@/components/hero/hero";
import {Separator} from "@/components/ui/separator";
import Projects from "@/components/projects/projects";
import Resume from "@/components/resume/resume";
// import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {

    return (
        < main className={"flex flex-col items-center px-4 "}>
            <Hero/>
            <Separator className={"bg-gray-700 dark:bg-white mt-1 sm:mt-8 w-1/2 mb-8"} animate={true}/>
            <Projects/>
            <Separator className={"bg-gray-700 dark:bg-white mt-1 sm:mt-8 w-1/2 mb-8"} animate={true}/>
            <Resume/>
            {/*<Contact/>*/}
            <Footer/>
        </main>
    );
}


