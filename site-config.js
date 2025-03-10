/**
 * Site configuration that can be imported by both TypeScript and JavaScript files
 * This file is used by next.config.mjs and lib/content.ts
 */
export const siteConfig = {
    title: "Girivardhana | Data Science, Engineering & Machine Learning",
    description: "Personal portfolio showcasing data science, AI, and machine learning projects and insights.",
    url: "https://reddiarg.github.io/my-website",
    basePath: process.env.NODE_ENV === 'production' ? '/my-website' : '',
  };
  