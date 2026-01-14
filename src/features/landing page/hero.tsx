import Image from "next/image";
import hero from "@/../public/full-shot-man-training-with-laptop transparent.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between gap-5">
			<div className="max-w-md z-10 gap-4 flex flex-col">
				<h1 className="font-heading font-bold text-4xl leading-tight text-accent">
					Train Anywhere, Anytime.
					<br />
					Your Fitness, Your Schedule.
				</h1>
				<h3 className="font-body font-medium text-lg text-muted">
					Connect with elite trainers for 1-on-1 coaching, live classes, or
					self-paced courses.
				</h3>
				<div className="w-full flex justify-center lg:justify-start mt-4">
					<Button size="lg" className="rounded-l-full pr-4">
						Find a Trainer
					</Button>
          <Button size="lg" className="rounded-r-full pl-4">Become a Trainer</Button>
				</div>
			</div>

			{/* Image Wrapper for blending effects */}
			<div className="relative w-full lg:w-auto flex justify-center items-center mt-6 lg:mt-0">
				{/* 2. Gradient Mask & Brightness Control */}
				<Image
					src={hero}
					alt="Hero Image"
					className="w-full lg:max-w-[800px] h-auto object-contain [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] brightness-85"
					priority
				/>
			</div>
		</div>
	);
};

export default Hero;
