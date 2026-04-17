import "./globals.css";

export const metadata = {
  title: "Aryan Jha | Full-Stack Developer & AI Engineer",
  description:
    "Pre-final year Computer Science student at SRM IST specializing in full-stack development, AI-powered applications, and open-source contributions. Explore my projects, skills, and experience.",
  keywords: [
    "Aryan Jha",
    "Full-Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Aryan Jha" }],
  openGraph: {
    title: "Aryan Jha | Full-Stack Developer & AI Engineer",
    description:
      "Pre-final year CS student building scalable web apps and AI-powered developer tools.",
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
