import styles from "./Cart.module.scss";
import accept from "../../../public/svg/accept.svg";
import Image from "next/image";

function AcceptRequest({ closeOrderWindow, fromOtherPagesForm }: { closeOrderWindow?: () => void; fromOtherPagesForm?: boolean }) {
	return (
		<div className={styles.popup__accept}>
			<div className={styles.popup__img}>
				<Image src={accept} alt="заявка принята" fill />
			</div>
			<h3 className={`${fromOtherPagesForm ? "text-[#fff_!important]" : ""}`}>Спасибо за заказ!</h3>
			<p className={`leading-120 ${fromOtherPagesForm ? "text-[#fff_!important]" : ""}`}>
				Ваш заказ принят в обработку. В ближайшее время с вами свяжется наш менеджер для уточнения деталей.
			</p>
			{!fromOtherPagesForm && (
				<button className={styles.popup__btnClose} onClick={closeOrderWindow}>
					Закрыть
				</button>
			)}
		</div>
	);
}
export default AcceptRequest;
