import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rashad Hussein | Web Developer",
  description:
    "A modern and responsive portfolio website built to showcase my front-end development skills and projects. Developed using React.js, Tailwind CSS, and Framer Motion for smooth animations. Features include project filtering, live demos, GitHub links, and a clean, user-friendly interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rashad Hussein" />
        <meta
          name="keywords"
          content="Front-End Developer, Web Developer, React Developer, JavaScript Developer, HTML, CSS, Tailwind CSS, React.js, Next.js, TypeScript, Responsive Design, Portfolio Website, UI Developer, Frontend Projects, Web Design, Framer Motion, GitHub Projects, Modern Web Development, Personal Portfolio, Software Developer"
        />
        <meta
          property="og:title"
          content="Rashad Hussein | Front-End Web Developer"
        />
        <meta
          property="og:description"
          content="A modern portfolio showcasing my front-end development projects, skills, and technologies like React, Tailwind CSS, and more."
        />
        <meta
          property="og:url"
          content="https://my-portfolio-zeta-six-n7iajs551t.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
