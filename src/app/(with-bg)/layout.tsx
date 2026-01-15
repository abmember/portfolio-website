import type { Metadata } from 'next';
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "@/app/components/Background/Background";
import AppWrapper from "@/app/components/Preloader/AppWrapper";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: "Cameron Cooke | Senior Full-Stack Developer",
    template: "%s | Cameron Cooke",
  },
  description: "Full-stack engineer with 7+ years of experience building scalable web applications for SaaS, analytics, and enterprise clients.",
  keywords: [
    "Cameron Cooke",
    "Product Manager",
    "Lead Developer",
    "Senior Full-Stack Developer",
    "Full-Stack Developer",
    "Front-End Developer",
    "Portfolio",
    "React Developer",
    "Next.js",
    "Azure",
    "AWS",
    "GCP",
    "Product Strategy",
    "Denver Colorado",
    "Software Engineer"
  ],
  authors: [{ name: "Cameron Cooke", url: "https://cameron917.vercel.app/" }],
  creator: "Cameron Cooke",
  publisher: "Cameron Cooke",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://cameron917.vercel.app/",
    siteName: "Cameron Cooke Portfolio",
    title: "Cameron Cooke | Senior Full-Stack Developer",
    description: "Full-stack engineer with 7+ years of experience building scalable web applications for SaaS, analytics, and enterprise clients. ",
    images: [
      {
        url: "https://cameron917.vercel.app//images/LOGO/pavlopic3.png",
        width: 1200,
        height: 630,
        alt: "Cameron Cooke - Senior Full-Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cameron Cooke | Senior Full-Stack Developer",
    description: "Full-stack engineer with 7+ years of experience building scalable web applications for SaaS, analytics, and enterprise clients.",
    images: ["https://cameron917.vercel.app//images/LOGO/pavlopic3.png"],
    creator: "@cameron",
    site: "@cameron",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cameron917.vercel.app/",
  },
  category: "portfolio",
};

export default function WithBgLayout({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    return (
        <AppWrapper>
            <ErrorBoundary>
                <Background />
                <h3 id="coords"></h3>
                <Header />
                {children}
                <Footer />
                <Analytics />
            </ErrorBoundary>
        </AppWrapper>
    );
}