import styles from "@/Components/Aircond&SemiInd/Params.module.scss";

function Reviews({ review }: { review: string }) {
   if (review) {
      return (
         <div className={`${styles.review} ${styles.params}`}>
            <iframe
               width="560"
               height="315"
               src="https://www.youtube.com/embed/2zNSgSzhBfM?si=f06pLPYqOjfCliYE"
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
         </div>
      );
   } else {
      return <h5 className={styles.review__notFound}>Видео-обзор товара пока недоступен</h5>;
   }
}
export default Reviews;
