import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

interface Props {
     items: {
          id: number;
          title: string;
          image: StaticImageData;
          slug: string;
     }[];
}

const Catalog: React.FC<Props> = ({ items }) => {
     return (
          <ul className="grid grid-cols-1 gap-[35px] xs:grid-cols-2 lg:grid-cols-3">
               {items.map((el) => {
                    return (
                         <li key={el.id}>
                              <Link href={el.slug}>
                                   <Image src={el.image} alt={el.title} width={1000} height={1000} className="h-auto aspect-square w-full object-cover rounded-[20px]" />
                                   <div className="text-center mt-3 text-[16px] font-medium lg:text-[20px]">{el.title}</div>
                              </Link>
                         </li>
                    );
               })}
          </ul>
     );
};

export default Catalog;
