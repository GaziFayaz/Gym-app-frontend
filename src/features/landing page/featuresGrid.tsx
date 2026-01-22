import SpotlightCard from "@/components/ui/SpotlightCard";
import {
	Dumbbell,
	Users,
	Calendar,
	TrendingUp,
	BookOpen,
	MonitorPlay,
} from "lucide-react";

const FeaturesGrid = () => {
	const features = [
		{
			title: "Join 10,000+ Members",
			icon: Users,
			subtitle: "Train alongside a motivated global community.",
		},
		{
			title: "Verified trainers",
			icon: Dumbbell,
			subtitle: "Expert guidance from certified fitness professionals.",
		},
		{
			title: "Diverse Programs",
			icon: BookOpen,
			subtitle: "Tailored workout plans for every skill level.",
		},
		{
			title: "Flexible Scheduling",
			icon: Calendar,
			subtitle: "Book training sessions that fit your busy lifestyle.",
		},
		{
			title: "Hybrid Learning",
			icon: MonitorPlay,
			subtitle: "Combine live coaching with on-demand video access.",
		},
		{
			title: "Trending Courses",
			icon: TrendingUp,
			subtitle: "Stay ahead with the latest, high-impact workout trends.",
		},
	];
	return (
		<div className="flex w-full">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-16">
				{features.map((feature, index) => {
					return (
						<SpotlightCard
							key={index}
							spotlightColor={`color-mix(in srgb, var(--primary), transparent ${100 - 70}%)`}
							className="px-10 py-14"
						>
							<feature.icon className="w-12 h-12 mb-3 text-primary shrink-0" />

							{/* Title with minimum height for alignment */}
							<h2 className="font-heading font-semibold text-3xl text-primary min-h-16">
								{feature.title}
							</h2>

							{/* Subtitle */}
							<p className="text-muted text-lg leading-relaxed">
								{feature.subtitle}
							</p>
						</SpotlightCard>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturesGrid;
