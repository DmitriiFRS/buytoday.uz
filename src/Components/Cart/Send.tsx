import styles from "./Cart.module.scss";

function Send() {
   return (
      <div className={styles.popup__send}>
         <button type="submit">Отправить</button>
      </div>
   );
}
export default Send;
