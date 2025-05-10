import Container from "@/Components/Common/Container";
import HeroSlider from "./HeroSlider";
import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";

const Hero = () => {
	return (
		<section className="mt-30 pt-7.5 xmd:mt-40">
			<Container className="">
				<div className="grid grid-cols-1 gap-10 lg:gap-20 sm:grid-cols-2 lg:grid-cols-[40%_1fr]">
					<HeroVideo />
					{/* <HeroSlider /> */}
					<HeroContent />
				</div>
			</Container>
		</section>
	);
};

export default Hero;
