import FeaturesGrid from "@/features/landing page/featuresGrid";
import Hero from "@/features/landing page/hero";
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative flex min-h-screen items-center justify-center bg-white dark:bg-black font-sans w-full">
			<div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_2px)] [background-size:16px_16px] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"></div>
			
			<main className="relative z-10 flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 sm:items-start">
				<Hero />
				<FeaturesGrid></FeaturesGrid>
			</main>
		</div>
	);
}
