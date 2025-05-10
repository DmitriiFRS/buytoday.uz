"use client";

import OrderPopup from "@/Components/Cart/OrderPopup";
import { useEffect, useState } from "react";

interface Props {
	isProm?: boolean;
	buttonTitle?: string;
	className?: string;
}

const title = "Оформление заявки";
const comment = "Комментарии к заявке";

const OneclickButton: React.FC<Props> = ({ isProm, buttonTitle, className }) => {
	const [isOrderActive, setOrderActive] = useState(false);
	function openOrderWindow() {
		const scrollWidth = window.innerWidth - document.body.clientWidth;
		setOrderActive(true);
		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = `${scrollWidth}px`;
	}
	useEffect(() => {
		return () => {
			document.body.style.overflow = "auto";
			document.body.style.paddingRight = "0";
		};
	}, []);
	return (
		<>
			<OrderPopup isOrderActive={isOrderActive} setOrderActive={setOrderActive} title={title} comment={comment} />
			<button
				onClick={openOrderWindow}
				className={`mt-[10px] w-full flex items-center justify-center h-[50px] rounded-[25px] bg-[#6A92FF] text-white text-[16px] duration-300 font-medium hover:bg-[#0f131e] ${className}`}
			>
				{!isProm ? <span>{buttonTitle ? buttonTitle : "Купить в один клик"}</span> : <span>Оставить заявку на покупку</span>}
			</button>
		</>
	);
};

export default OneclickButton;
