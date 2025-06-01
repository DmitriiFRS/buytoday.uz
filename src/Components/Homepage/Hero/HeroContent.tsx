import OneclickButton from "@/ComponentsNew/ProductCard/Main/OneclickButton";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
	return (
		<div className="relative flex items-center order-1 sm:order-2">
			<div className="">
				<div className="tracking-0.02">
					<h1 className="text-[26px] leading-110 xlg:text-[42px] md:text-[32px] max-w-full">
						Официальный представитель Midea в Узбекистане
					</h1>
					<p className="mt-[30px] font-medium leading-120 text-[16px] text-[#4a4c5b] max-w-full">
						Мы предлагаем оригинальную продукцию Midea и Welkin с гарантией и по самым выгодным ценам в Узбекистане
					</p>
					<a
						target="_blank"
						href="tel:998771393660"
						className={`mt-[30px] text-center px-2 w-full flex items-center justify-center h-[50px] rounded-[25px] bg-[#6A92FF] text-white text-[16px] duration-300 font-medium hover:bg-[#0f131e] max-w-[300px]`}
					>
						<span>Узнать цену и срок установки</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroContent;
