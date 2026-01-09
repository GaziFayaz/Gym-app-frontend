import Link from "next/link";
import { Dumbbell, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-black border-t border-border/40 py-12 md:py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					{/* Brand Column */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center gap-2">
							<Dumbbell className="h-6 w-6 text-primary" />
							<span className="text-xl font-bold font-heading tracking-tight">
								FitPlatform
							</span>
						</Link>
						<p className="text-muted-foreground text-sm max-w-xs">
							Train anywhere, anytime. Connect with elite experts and transform
							your life through hybrid fitness coaching.
						</p>
						<div className="flex items-center gap-4">
							<SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
							<SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
							<SocialLink icon={<Youtube className="h-5 w-5" />} href="#" />
							<SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" />
						</div>
					</div>

					{/* Links: Trainees */}
					<div>
						<h3 className="font-heading font-semibold text-lg mb-4">
							For Trainees
						</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<Link
									href="/trainers"
									className="hover:text-primary transition-colors"
								>
									Find a Coach
								</Link>
							</li>
							<li>
								<Link
									href="/courses"
									className="hover:text-primary transition-colors"
								>
									Browse Courses
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="hover:text-primary transition-colors"
								>
									Success Stories
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="hover:text-primary transition-colors"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Links: Trainers */}
					<div>
						<h3 className="font-heading font-semibold text-lg mb-4">
							For Trainers
						</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<Link
									href="/become-coach"
									className="hover:text-primary transition-colors"
								>
									Become a Coach
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="hover:text-primary transition-colors"
								>
									Coach Resources
								</Link>
							</li>
							<li>
								<Link
									href="/login"
									className="hover:text-primary transition-colors"
								>
									Trainer Login
								</Link>
							</li>
						</ul>
					</div>

					{/* Links: Company */}
					<div>
						<h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<Link
									href="/about"
									className="hover:text-primary transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-primary transition-colors"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/#"
									className="hover:text-primary transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-border/20 mt-12 pt-8 text-center text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} FitPlatform. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
	return (
		<Link
			href={href}
			className="bg-secondary/50 p-2 rounded-full hover:bg-primary hover:text-white transition-all text-muted-foreground"
		>
			{icon}
		</Link>
	);
}
