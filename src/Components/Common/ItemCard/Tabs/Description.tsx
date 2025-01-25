import styles from "@/Components/Aircond&SemiInd/Params.module.scss";
import ReactMarkdown from "react-markdown";
import "@/app/globals.scss";

type Props = {
     descriptions: string;
};

function Description({ descriptions }: Props) {
     return <div className={`${styles.description} ${styles.params} `}>{descriptions && <ReactMarkdown>{descriptions}</ReactMarkdown>}</div>;
}
export default Description;
