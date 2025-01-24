import AcceptRequest from "@/Components/Cart/AcceptRequest";
import styles from "../../Components/Cart/Cart.module.scss";

const page = () => {
     return (
          <div className={styles.thanks}>
               <AcceptRequest />
          </div>
     );
};

export default page;
