import Link from "next/link";
import styles from "../Utilities.module.scss";

function DarkblueLink({ href, title }: { href: string; title: string }) {
   return (
      <Link href={href} className={styles.darkblueLink}>
         {title}
      </Link>
   );
}
export default DarkblueLink;
