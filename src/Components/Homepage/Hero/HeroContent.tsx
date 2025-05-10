import OneclickButton from "@/ComponentsNew/ProductCard/Main/OneclickButton";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
	return (
		<div className="relative flex items-center order-1 lg:order-2">
			<div className="">
				<div className="tracking-0.02">
					<h1 className="text-[26px] leading-110 xlg:text-[42px] md:text-[32px] max-w-full">
						Кондиционеры и бытовая техника от Midea и Welkin
					</h1>
					<p className="mt-5 font-medium leading-120 text-[16px] text-[#4a4c5b] max-w-full">
						Предлагаем широкий ассортимент высококачественных бытовых и промышленных кондиционеров
					</p>
					<OneclickButton buttonTitle="Оставить заявку" className="max-w-[300px]" />
				</div>
			</div>
		</div>
	);
};

export default HeroContent;
