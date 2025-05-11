import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import { FaGripfire } from "react-icons/fa";

type Props = {
	price: number;
	currencyVal: number;
	inStock: boolean;
	inPromotion?: boolean;
};

function PriceMore({ price, currencyVal, inStock, inPromotion }: Props) {
	return (
		<div className={styles.aircond__item__side}>
			<div className={styles.aircond__item__price}>
				{inStock ? (price * currencyVal).toLocaleString("en") + " " + "UZS" : "Нет в наличии"}
			</div>
			{inPromotion && (
				<div className={styles.aircond__item__inPromotion}>
					<FaGripfire color="#f34d00" size={18} />
					<span>Участвует в акции</span>
				</div>
			)}
			<button className={styles.aircond__item__btn}>
				<span>Быстрый заказ</span>
			</button>
		</div>
	);
}
export default PriceMore;
