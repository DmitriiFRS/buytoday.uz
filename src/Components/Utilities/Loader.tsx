import styles from "./Utilities.module.scss";
function Loader({ className }: { className?: string }) {
   return (
      <div className={`${styles.container} ${className}`}>
         <span className={styles.loader}></span>
      </div>
   );
}
export default Loader;
