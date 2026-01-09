import type { Metadata } from "next";
import { Kanit, Rubik } from "next/font/google"; // Option 3 Fonts
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Headings Font (Techno/Speed)
const kanit = Kanit({
	variable: "--font-kanit",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"], // Full range for impact
	style: ["normal", "italic"],
});

// Body Font (Readable/Rounded)
const rubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Fitness Coaching Platform",
	description: "Train Anywhere, Anytime.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${kanit.variable} ${rubik.variable} antialiased bg-background text-foreground font-body flex flex-col min-h-screen`}
			>
				<Navbar />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
