"use client";

import { useEffect, useState } from "react";
import classes from "./s.module.scss";
import Image from "next/image";
import calltg from "@/../public/Icons/calltg.svg";
import callButton from "@/../public/Icons/callButton.svg";
import blackCross from "@/../public/Icons/blackcross.svg";

const CallButton = () => {
	const [open, setOpen] = useState("none");
	const [newMessageIcon, setNewMessageIcon] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setNewMessageIcon(true);
		}, 4000);
	}, []);

	const handleChange = () => {
		if (open === "opened") {
			setOpen("closed");
		} else {
			setOpen("opened");
		}
	};
	return (
		<div className={classes.button_wrapper}>
			<div className={`${classes.buttons} ${classes[open]}`}>
				<a href={"https://t.me/+998771343660"} target="_blank" className="relative" onClick={() => setNewMessageIcon(false)}>
					{newMessageIcon && (
						<div className="absolute z-[1] top-1 right-1 size-4">
							{/* Пульсирующий круг */}
							<span className="absolute top-0 right-0 inline-flex w-full h-full rounded-full bg-red-400 animate-ping"></span>
							{/* Фиксированный красный кружок с цифрой */}
							<div className="relative flex items-center justify-center w-full h-full rounded-full bg-red-500">
								<span className="text-white text-xs">1</span>
							</div>
						</div>
					)}
					<Image src={calltg} alt="CallButton" width={49} height={49} className={classes.button} />
				</a>
				<a href={"tel:" + "+998771343660"}>
					<Image src={callButton} alt="CallButton" width={49} height={49} className={classes.button} />
				</a>
			</div>
			{open === "opened" ? (
				<Image src={blackCross} alt="CallButton" width={49} height={49} className={classes.button} onClick={handleChange} />
			) : (
				<button className="relative" onClick={handleChange}>
					{newMessageIcon && (
						<div className="absolute z-[1] top-1 right-1 w-4 h-4">
							{/* Пульсирующий круг */}
							<span className="absolute top-0 right-0 inline-flex w-full h-full rounded-full bg-red-400 animate-ping"></span>
							{/* Фиксированный красный кружок с цифрой */}
							<div className="relative flex items-center justify-center w-full h-full rounded-full bg-red-500">
								<span className="text-white text-xs">1</span>
							</div>
						</div>
					)}
					<Image src={callButton} alt="CallButton" width={49} height={49} className={classes.button} />
				</button>
			)}
		</div>
	);
};

export default CallButton;
