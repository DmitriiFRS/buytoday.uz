import styles from "./Utilities.module.scss";
function Loader() {
   return (
      <div className={styles.container}>
         <span className={styles.loader}></span>
      </div>
   );
}
export default Loader;
