import { AircondDataInner } from "@/app/catalog/air-conditioners/page";
import styles from "./AirConditioners.module.scss";

function Item({ el }: { el: AircondDataInner }) {
   return <div className={styles.aircond__item}></div>;
}
export default Item;
