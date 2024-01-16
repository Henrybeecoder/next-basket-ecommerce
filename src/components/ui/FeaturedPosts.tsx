import { featuredPostsCard } from "@/data/featuredPostsCard";
import { featuredPostsCardInterface } from "@/interfaces/data.interface";
import Image from "next/image";
import alarm_clock from "../../../public/assets/icons/alarm_clock.svg";
import graph from "../../../public/assets/icons/graph.svg";
import arrow from "../../../public/assets/icons/arrow.svg";

const FeaturedPosts = () => {
	return (
		<main className="featured-posts pt-[80px] px-[45px] md:px-[195px]">
			{/* heading */}
			<div className="flex flex-col items-center gap-[10px]">
				<p className="text-[#23A6F0] text-[14px] font-bold text-center">
					Practice Advice
				</p>
				<div className=" text-[#252B42] max-w-[7rem] sm:max-w-full text-center text-[40px] font-bold text-xl">
					Featured Products
				</div>
				{/* <img src={bedroom} alt="" /> */}
				<div className="cards-div md:flex md:flex-row flex-col gap-3 pt-[80px]">
					{featuredPostsCard.map(
						(data: featuredPostsCardInterface, index: number) => (
							<div key={index} className="flex flex-col relative pt-[30px]">
								<p className="new-tag text-white absolute top-[49px] left-[14px] rounded-[3px] bg-[#E74040] font-bold text-[14px] px-[10px]">
									NEW
								</p>
								<div>
									<Image
										// className="w-[348px] h-[300px]"
										src={data.image}
										alt=""
									/>
								</div>
								<div className="lower-div p-[25px] flex flex-col gap-[10px] max-w-[350px]">
									<div className="flex gap-[15px] text-[12px] font-normal">
										<p className="text-[#8EC2F2] cursor-pointer">Google</p>
										<p className="cursor-pointer">Trending</p>
										<p className="cursor-pointer">New</p>
									</div>
									<h1 className="text-[20px] font-normal text-[#252B42]">
										{data.title}
									</h1>
									<span className="text-[14px] font-normal">
										{data.subtitle}
									</span>
									<div className="py-[15px] flex items-center justify-between">
										<span className="flex items-center gap-1">
											<Image src={alarm_clock} alt="" />
											<p className="text-[12px]">{data.date}</p>
										</span>
										<span className="flex items-center gap-1">
											<Image src={graph} alt="" />
											<p className="text-[12px]">{data.comments}</p>
										</span>
									</div>
									<span className="flex cursor-pointer group items-center gap-1">
										<p className="text-[14px]">Learn more</p>
										<Image
											className="h-[12px] group-hover:translate-x-1"
											src={arrow}
											alt=""
										/>
									</span>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</main>
	);
};

export default FeaturedPosts;
