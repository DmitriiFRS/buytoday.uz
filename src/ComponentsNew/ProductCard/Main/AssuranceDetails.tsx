import Image, { StaticImageData } from "next/image";

interface Props {
     img: StaticImageData;
     title: string;
     subtitle: string;
}

const AssuranceDetails: React.FC<Props> = ({ img, title, subtitle }) => {
     return (
          <div className="shadow-[2px_4px_18px_0px_rgba(0,_0,_0,_0.04)] p-[10px] flex items-center gap-5 rounded-[10px] md:flex-[0_1_50%]">
               <Image src={img} alt="icon" width={50} height={50} />
               <div className="flex flex-col gap-2 font-medium">
                    <div>{title}</div>
                    <div>{subtitle}</div>
               </div>
          </div>
     );
};

export default AssuranceDetails;
