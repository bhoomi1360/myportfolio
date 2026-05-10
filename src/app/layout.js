import "./globals.css";

export const metadata = {
  title: "Bhoomi | AI & ML Developer Portfolio",
  description:
    "Portfolio of Bhoomi — BCA student specializing in AI & Machine Learning, full-stack developer, cybersecurity enthusiast. Explore projects, skills, and experience.",
  keywords: [
    "Bhoomi",
    "Portfolio",
    "AI",
    "Machine Learning",
    "Web Developer",
    "BCA",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Bhoomi" }],
  openGraph: {
    title: "Bhoomi | AI & ML Developer Portfolio",
    description:
      "BCA student specializing in AI & Machine Learning. Full-stack developer with expertise in React, Next.js, Python and more.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
