import DarkblueLink from "@/Components/Utilities/Buttons/DarkblueLink";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";

function Delivery() {
   return (
      <div className={styles.item__delivery}>
         <DarkblueLink href={"/delivery"} title={"Бесплатная доставка по Ташкенту"} />
         <DarkblueLink href={"/service"} title={"Заказать установку"} />
      </div>
   );
}
export default Delivery;
