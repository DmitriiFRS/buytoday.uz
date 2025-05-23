"use client";

import { postApplication } from "@/Components/Common/Application/application";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "../../Cart/Cart.module.scss";
import Loader from "@/Components/Utilities/Loader";
import AcceptRequest from "@/Components/Cart/AcceptRequest";

type SubmitData = {
	name: string;
	phone: string;
	question: string;
};

const title = "Оформление заявки";
const comment = "Что важно учесть?";
const fromOtherPagesForm = true;

const CatalogForm: React.FC = () => {
	const [isSubmitting, setSubmit] = useState(false);
	const [isOrderAccepted, setOrderAccept] = useState(false);
	const pathname = usePathname();
	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
		setError,
	} = useForm();
	async function onSubmit(data: SubmitData) {
		if (!isValidPhoneNumber(data.phone)) {
			setError("phone", {
				type: "manual",
				message: "Неверный номер телефона",
			});
		} else {
			setSubmit(true);
			const res = await postApplication({
				name: data.name,
				phone: data.phone,
				description: data.question,
				url: pathname,
				fromOtherPagesForm,
			});
			setOrderAccept(true);
			setSubmit(false);
		}
	}
	return (
		<div
			className={`mt-10 grid grid-cols-1 gap-10 bg-[#202020] rounded-[10px] p-10  ${
				isOrderAccepted ? "md:grid-cols-1" : "md:grid-cols-2"
			}`}
		>
			{!isOrderAccepted && (
				<div className="flex flex-col gap-10 justify-center">
					<h2 className="text-[26px] leading-120 text-white">Устали от жары? Подберём кондиционер под ваш бюджет за 5 минут</h2>
					<p className="text-[16px] leading-120 tracking-[0.03em] text-white">
						Расскажите, что вам нужно — мы подберем модель по бюджету и площади.
					</p>
				</div>
			)}
			{isSubmitting ? (
				<div className={styles.popup__isLoading}>
					<Loader />
				</div>
			) : isOrderAccepted ? (
				<div className="flex items-center w-1/2 mx-auto text-center">
					<AcceptRequest fromOtherPagesForm={fromOtherPagesForm} />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit as () => void | unknown)} className="flex flex-col gap-5">
					<div className={`${styles.popup__field} ${styles.popup__field__name}`}>
						<label htmlFor="orderName" className="text-[#fff_!important]">
							Как к вам обращаться <span>*</span>
						</label>
						<input
							className={styles.popup__input}
							{...register("name", {
								required: true,
							})}
							type="text"
							id="orderName"
							placeholder="Ваше имя"
						/>
					</div>
					<div className={`${styles.popup__field} ${styles.popup__field__tel}`}>
						<label htmlFor="orderPhone" className="text-[#fff_!important]">
							Телефон <span>*</span>
						</label>
						<Controller
							name="phone"
							control={control}
							rules={{ required: true }}
							render={({ field: { onChange, onBlur, value } }) => (
								<PhoneInput
									className={styles.popup__phoneInput}
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									limitMaxLength
									defaultCountry="UZ"
									id="orderPhone"
									placeholder="11-111-11-11"
								/>
							)}
						/>
						{errors.phone && <span>Некорректно набран номер</span>}
					</div>
					<div className={`${styles.popup__field} ${styles.popup__field__desc}`}>
						<label htmlFor="orderDesc" className="text-[#fff_!important]">
							{comment}
						</label>
						<textarea {...register("question")} className={styles.popup__input} id="orderDesc"></textarea>
					</div>
					<div className={styles.popup__send}>
						<button type="submit">Отправить</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default CatalogForm;
