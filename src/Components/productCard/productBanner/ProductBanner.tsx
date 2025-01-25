
import s from './s.module.scss'
import Image from 'next/image';
import banner from '@/../public/Img/Item/winter.webp';
import { AircondProductTypeModel } from '@/Types/AircondProductType.type';
import NextBreadcrumb from '@/Components/Utilities/Breadcrumbs';

type PropTypes = {
    productModel: AircondProductTypeModel;
};

export default function ProductMain({productModel}: PropTypes) {
    return <section className={s.banner}>
        <div className={s.shadow}></div>
        <Image src={banner} alt='Midea banner' priority quality={100} width={1920} height={1080} className={s.image} />
        <div className={`container ${s.text}`}>
        <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <p className={s.p}>{productModel.attributes.paramsWrapper?.mainDescription || productModel.attributes.paramsWrapper?.aircond?.product?.data.attributes.mainDescription}</p>
        </div>
    </section>
}