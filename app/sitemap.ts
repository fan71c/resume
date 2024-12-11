import { getBlogPosts } from "@/app/blog/utils";

//TODO: change the url for your website
export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

interface Post {
  slug: string;
  metadata: {
    publishedAt: string;
  };
}

export default function sitemap() {
  const blogs = getBlogPosts().map((post: Post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}