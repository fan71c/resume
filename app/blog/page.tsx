import {BlogPosts} from "@/components/posts";

export const metadata = {
  title: 'Projects',
  description: 'Check out my Projects',
}

export default function Page() {
  return (
    <section className={"min-h-[100rem]"}>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <BlogPosts />
    </section>
  )
}
