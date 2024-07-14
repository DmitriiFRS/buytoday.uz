import styles from "@/Components/Aircond&SemiInd/Params.module.scss";
import ReactMarkdown from "react-markdown";
import "@/app/globals.scss";

type Props = {
   mainDescription: string;
   descriptions: string;
};

function Description({ mainDescription, descriptions }: Props) {
   return (
      <div className={`${styles.description} ${styles.params} `}>
         <h4 className={styles.description__title}>{mainDescription}</h4>
         {descriptions && <ReactMarkdown>{descriptions}</ReactMarkdown>}
      </div>
   );
}
export default Description;
