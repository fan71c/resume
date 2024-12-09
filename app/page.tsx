import Hero from "@/components/hero/hero";
import {Separator} from "@/components/ui/separator";
import Header from "@/components/header/header";

export default function Home() {
    return (
        <main className={"flex flex-col items-center px-4"}>
            <Hero/>
            <Separator className={"bg-gray-700 dark:bg-white mt-1 sm:mt-8 w-1/2 mb-8"}/>
            {/*<Projects/>*/}
            {/*<Separator className={"bg-gray-700 dark:bg-white mt-1 sm:mt-8 w-1/2 mb-8"} animate={true}/>*/}
            {/*<Skills/>*/}
            {/*<Experience/>*/}
            {/*<Contact/>*/}
        </main>
    );
}
