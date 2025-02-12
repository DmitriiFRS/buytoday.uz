import styles from "./Homepage.module.scss";
import Image from "next/image";
import banner from "@/../public/Img/Homepage/Slider/iphone midea.webp";
import bannerM from "@/../public/Img/Homepage/Slider/iphone midea mob.webp";
import Link from "next/link";

function Banners() {
     return (
          <section className={styles.banners}>
               <div className="container">
                    <Link href={"/catalog/air-conditioners"} className="overflow-hidden block rounded-[10px]">
                         <Image src={banner} alt="Midea iPhone акция" width={1920} height={1080} className="h-auto w-full object-cover hidden md:block" />
                         <Image src={bannerM} alt="Midea iPhone акция" width={1920} height={1080} className="h-auto w-full object-cover block md:hidden" />
                    </Link>
               </div>
          </section>
     );
}
export default Banners;
