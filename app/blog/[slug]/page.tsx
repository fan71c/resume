"use server"
import { baseUrl } from "@/app/sitemap";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { CustomMDX } from "@/components/mdx";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import { Metadata } from "next";

// Async `generateStaticParams`
export async function generateStaticParams() {
  const [posts] = await Promise.all([getBlogPosts()]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fix the `generateMetadata` function with async params access
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // Await params destructuring
  const [post] = await Promise.all([getBlogPosts().find((post) => post.slug === slug)]);

  if (!post) {
    notFound();
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// Fixed Blog component with proper async destructuring from params
export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Properly `await` params here
  const [post] = await Promise.all([getBlogPosts().find((post) => post.slug === slug)]);

  if (!post) {
    notFound();
  }


  return (
    <section className={"min-h-[1000rem] mx-auto max-w-screen-md "}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose ">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
