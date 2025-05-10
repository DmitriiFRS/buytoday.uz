import Container from "@/Components/Common/Container";
import pormotion1 from "@/../public/Img/Homepage/promotion-1.webp";
import pormotion2 from "@/../public/Img/Homepage/promotion-2.webp";
import Image from "next/image";
import Link from "next/link";
import { getPromotions } from "@/fetch/getPromotions";
import { strapiUrl } from "@/service/const";

interface Promotion {
	id: number;
	attributes: {
		title?: string;
		description?: string;
		image?: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
		slug?: string;
	};
}

const Promotions = async () => {
	const data = await getPromotions();
	return (
		data.data &&
		data.data.length > 0 && (
			<section className="mt-10 md:mt-[100px]">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[60px]">
						{data.data.map((el: Promotion) => {
							return (
								<div key={el.id} className="flex flex-col gap-5">
									{el.attributes.slug ? (
										<Link href={el.attributes.slug} className="">
											<Image
												src={strapiUrl + el.attributes.image?.data.attributes.url}
												alt="promotion"
												width={1920}
												height={1920}
												className="w-full h-full rounded-[16px]"
											/>
										</Link>
									) : (
										<Image
											src={strapiUrl + el.attributes.image?.data.attributes.url}
											alt="promotion"
											width={1920}
											height={1920}
											className="w-full h-full rounded-[16px]"
										/>
									)}
									<div className="flex flex-col gap-5 px-[10px]">
										{el.attributes.title && <h2 className="text-[24px] font-semibold leading-[120%]">{el.attributes.title}</h2>}
										{el.attributes.description && <p className="leading-[120%]">{el.attributes.description}</p>}
									</div>
								</div>
							);
						})}
					</div>
				</Container>
			</section>
		)
	);
};

export default Promotions;
