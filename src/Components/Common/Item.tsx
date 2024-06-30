import { MultiInnerDataModel } from "@/app/catalog/multisplit-inner/page";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SemiIndModelCollection } from "@/app/catalog/col-conditioners/page";

function Item({ el, currencyVal, uri, children }: { el: MultiInnerDataModel | SemiIndModelCollection; currencyVal: number; uri: string; children: ReactNode }) {
   return (
      <Link href={`${uri}/${el.url}_${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}></Link>
   );
}
export default Item;
