/**
 * Site configuration that can be imported by both TypeScript and JavaScript files
 * This file is used by next.config.mjs and lib/content.ts
 */
export const siteConfig = {
    title: "John Doe | Data Scientist & AI Specialist",
    description: "Personal portfolio showcasing data science, AI, and machine learning projects and insights.",
    url: "https://yourusername.github.io/portfolio",
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  };
  