import OneclickButton from "@/ComponentsNew/ProductCard/Main/OneclickButton";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
	return (
		<div className="relative flex items-center order-1 sm:order-2">
			<div className="">
				<div className="tracking-0.02">
					<h1 className="text-[26px] leading-110 xlg:text-[42px] md:text-[32px] max-w-full">Спасаем от жары за 1 день!</h1>
					<p className="mt-5 font-medium leading-120 text-[16px] text-[#4a4c5b] max-w-full">
						Подберём, привезём и установим кондиционер под ключ
					</p>
					<OneclickButton
						buttonTitle="Узнать цену и срок установки"
						className="max-w-[300px] rounded-[10px_!important] px-1 mt-[20px_!important]"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroContent;
