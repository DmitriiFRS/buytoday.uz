import { GrNext } from "react-icons/gr";
import styles from "./Header.module.scss";
import Image from "next/image";

type SideBody = {
   title: string;
   href: string;
};

type Sidemenu = {
   id: number;
   icon: string;
   title: string;
   content: {
      title: string;
      body: SideBody[];
   };
};

type Props = {
   sidemenu: Sidemenu[];
};

function MobileSidebar({ sidemenu }: Props) {
   return (
      <ul className={`${styles.menu__sidebar} ${styles.mobileSidebar}`}>
         {sidemenu.map((el, index) => {
            return (
               <li onMouseEnter={() => toggleActiveElement(index)} key={el.id} className={styles.menu__sidebar__item}>
                  <Image src={el.icon} alt={el.title} width={50} height={50} />
                  <div className={styles.menu__sidebar__title}>{el.title}</div>
                  <GrNext className={styles.menu__sidebar__icon} />
               </li>
            );
         })}
      </ul>
   );
}
export default MobileSidebar;
