import Link from "next/link";

const HeroVideo: React.FC = () => {
	return (
		<Link href={"/catalog/air-conditioners"} className="max-h-180 overflow-hidden xl:max-h-220 rounded-[16px] order-2 sm:order-1">
			<video className="w-full h-full object-cover" autoPlay loop muted playsInline>
				<source src="/videos/aircond-promotion-1.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</Link>
	);
};

export default HeroVideo;
