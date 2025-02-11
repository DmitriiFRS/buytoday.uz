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
     isSubcatalog?: boolean;
}

const Catalog: React.FC<Props> = ({ items, isSubcatalog }) => {
     return (
          <ul className="grid grid-cols-1 gap-[35px] sm:grid-cols-2 xs:grid-cols-3 lg:grid-cols-4">
               {items.map((el) => {
                    return (
                         <li key={el.id}>
                              <Link href={el.slug} className="">
                                   <Image
                                        src={el.image}
                                        alt={el.title}
                                        width={1000}
                                        height={1000}
                                        className={`h-auto aspect-square w-full rounded-[20px] ${isSubcatalog ? "object-contain" : "object-cover"}`}
                                   />
                                   <div className="text-center mt-3 border-b border-[#cccccc] font-medium text-[20px] pb-5 sm:pb-0 sm:border-b-0">{el.title}</div>
                              </Link>
                         </li>
                    );
               })}
          </ul>
     );
};

export default Catalog;
