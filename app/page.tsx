import {BlogPosts} from "@/components/posts";
import Hero from "@/components/hero/hero";
import {Separator} from "@/components/ui/separator";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import Resume from "@/components/resume/resume";

export default function Home() {

    return (

        < main className={"flex flex-col items-center px-4 min-h-[1000rem]"}>
            <Hero/>
            <Separator className={"bg-gray-700 dark:bg-white mt-1 sm:mt-8 w-1/2 mb-8"} animate={true}/>
            <Projects/>
            <Separator className={"bg-gray-700 dark:bg-white mt-1 sm:mt-8 w-1/2 mb-8"} animate={true}/>
            {/*<Skills/>*/}
            <Resume/>
            {/*<Experience/>*/
            }
            {/*<Contact/>*/
            }
        </main>
    );
}



