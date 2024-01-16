// import dynamic from "next/dynamic";
// const Image = dynamic(() => import("next/image"), { ssr: false });
import Image from "next/image";
import user1 from "../../../public/assets/svgs/user1.svg";
import star_fill from "../../../public/assets/svgs/star_fill.svg";
import star_outline from "../../../public/assets/svgs/start_outline.svg";
import { whatTheySayPictures } from "@/data/whatTheySayPictures";

const WhatTheySay = () => {
	const fiveStar = [];
	for (let index = 0; index < 4; index++) {
		fiveStar.push(star_fill);
	}
	fiveStar.push(star_outline);

	return (
		<main className="what-they-say bg-[#FAFAFA] md:flex md:flex-row flex-col items-center justify-center gap-20 w-screen px-[45px] md:px-[195px] py-[48px]">
			<div className=" flex flex-col items-center gap-[28px] text-[24px] pb-20">
				<div className="title">
					<h1 className="text-center max-w-[12rem] sm:max-w-full font-bold">
						What they say about us
					</h1>
				</div>
				<div className="flex flex-col items-center justify-center gap-[20px]">
					<div className="flex items-center justify-center">
						<Image
							src={user1}
							alt=""
							className="flex items-center justify-center"
						></Image>
					</div>
					<div className="flex items-center justify-center">
						{fiveStar.map((img: any, index: number) => (
							<Image className="cursor-pointer" key={index} src={img} alt="" />
						))}
					</div>

					<span className="font-bold text-[14px] text-[#737373] text-center">
						Slate helps you see how many more days you need to work to reach
						your financial goal.
					</span>

					<div className="flex flex-col items-center">
						<span className="font-bold text-[14px] text-[#23A6F0]">
							Regina Miles
						</span>
						<p className="font-bold text-[14px]">Designer</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 place-items-center gap-4">
				{whatTheySayPictures.map((pics: any, index: number) => (
					// <div className="">
					<Image className="" key={index} src={pics} alt=""></Image>
					// </div>
				))}
			</div>
		</main>
	);
};

export default WhatTheySay;
