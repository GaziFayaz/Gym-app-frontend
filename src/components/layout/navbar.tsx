"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Dumbbell } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
	{ name: "Find a Coach", href: "/trainers" },
	{ name: "Explore Courses", href: "/courses" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			// Show navbar if scrolling up or at the very top
			if (currentScrollY < lastScrollY || currentScrollY < 100) {
				setIsVisible(true);
			} else if (currentScrollY > lastScrollY && currentScrollY > 50) {
				// Hide navbar if scrolling down and not at the top
				setIsVisible(false);
			}
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"fixed top-4 left-4 right-4 z-50 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl lg:max-w-7xl rounded-2xl border border-white/10 bg-neutral-800/40 backdrop-blur-xl shadow-lg/50 transition-transform duration-300",
				!isVisible && !isOpen ? "-translate-y-[200%]" : "translate-y-0"
			)}
		>
			<div className="px-6 h-16 flex items-center justify-between gap-4">
				{/* Left: Brand */}
				<Link
					href="/"
					className="flex  items-center w-full lg:w-auto justify-center gap-2"
				>
					<Dumbbell className="h-8 w-8 text-primary" />
					<span className="text-2xl font-bold font-heading tracking-tight">
						FitPlatform
					</span>
				</Link>

				{/* Center: Desktop Links */}
				<div className="hidden lg:flex items-center md:gap-4 lg:gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-sm font-medium text-muted hover:text-primary transition-colors"
						>
							{link.name}
						</Link>
					))}
					<Link
						href="/#how-it-works"
						className="text-sm font-medium text-muted hover:text-primary transition-colors"
					>
						How it Works
					</Link>
				</div>

				{/* Right: Actions (Desktop) */}
				<div className="hidden lg:flex items-center md:gap-2 lg:gap-4">
					<Link
						href="/become-coach"
						className="text-sm font-medium text-muted hover:text-foreground transition-colors"
					>
						Become a Coach
					</Link>
					<Button variant="ghost" asChild>
						<Link href="/login">Log in</Link>
					</Button>
					<Button asChild>
						<Link href="/register">Get Started</Link>
					</Button>
				</div>

				{/* Mobile Menu Trigger */}
				<div className="lg:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="[&_svg]:size-6">
								<Menu />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-80 border border-white/10 bg-neutral-800/30 backdrop-blur-xl shadow-lg/50 top-4 right-4 bottom-4 h-auto rounded-2xl"
						>
							<div className="flex flex-col gap-6 mt-8 ">
								<div className="flex flex-col gap-4">
									{navLinks.map((link) => (
										<Link
											key={link.name}
											href={link.href}
											onClick={() => setIsOpen(false)}
											className="text-lg font-medium text-foreground hover:text-primary transition-colors"
										>
											{link.name}
										</Link>
									))}
									<Link
										href="/#how-it-works"
										onClick={() => setIsOpen(false)}
										className="text-lg font-medium text-foreground hover:text-primary transition-colors"
									>
										How it Works
									</Link>
								</div>
								<hr className="border-border" />
								<div className="flex flex-col gap-4">
									<Link
										href="/become-coach"
										onClick={() => setIsOpen(false)}
										className="text-lg font-medium text-muted-foreground hover:text-foreground"
									>
										Become a Coach
									</Link>
									<Button
										variant="outline"
										asChild
										className="w-full justify-start"
									>
										<Link href="/login" onClick={() => setIsOpen(false)}>
											Log in
										</Link>
									</Button>
									<Button asChild className="w-full justify-start">
										<Link href="/register" onClick={() => setIsOpen(false)}>
											Get Started
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
