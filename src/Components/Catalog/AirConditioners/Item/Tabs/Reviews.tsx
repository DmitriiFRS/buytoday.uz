import styles from "@/Components/Aircond&SemiInd/Params.module.scss";

function Reviews({ review }: { review: string }) {
   if (review) {
      return (
         <div className={`${styles.review} ${styles.params}`}>
            <iframe
               className={styles.review__iframe}
               width="100%"
               height="400"
               src={review}
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            ></iframe>
         </div>
      );
   } else {
      return <h5>Видео-обзор товара пока недоступен</h5>;
   }
}
export default Reviews;
