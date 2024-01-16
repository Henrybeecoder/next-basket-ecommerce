import footerData from "@/data/footerData";
import { footerDataInterface } from "@/interfaces/data.interface";
import facebook from "../../../public/assets/icons/facebook.svg";
import instagram from "../../../public/assets/icons/instagram.svg";
import twitter from "../../../public/assets/icons/twitter.svg";
import Image from "next/image";

const Footer = () => {
	return (
		<main className="md:flex-col flex-row items-start justify-start md:w-auto w-screen">
			<div className="sm:flex-row flex flex-col gap-5 justify-between px-[45px] xl:px-[195px] w-screen bg-[#FAFAFA] py-[30px]">
				<span className="font-bold text-[24px] text-[#252B42]">Bandage</span>
				<div className="flex items-center gap-[20px]">
					<a href="">
						<Image src={facebook} alt="" />
					</a>
					<a href="">
						<Image src={instagram} alt="" />
					</a>
					<a href="">
						<Image src={twitter} alt="" />
					</a>
				</div>
			</div>

			<div className="grid lg:grid-flow-col md:grid-cols-2 sm:grid-cols-2 gap-[30px] py-[50px] px-[45px] xl:px-[195px]">
				{/* <div className="flex justify-center gap-[20px]"> */}
				{footerData.map((data: footerDataInterface, index: number) => (
					<div key={index} className="flex flex-col gap-[20px]">
						<h1 className="font-bold text-[16px] text-[#252B42]">
							{data.title}
						</h1>
						<div className="flex flex-col gap-[10px]">
							{/* Map over the links array to render individual links */}
							{data.links.map(
								(link: { name: string; link: string }, linkIndex: number) => (
									<div key={linkIndex} className="">
										<a
											href={link.link}
											className="text-[#737373] font-bold text-[14px]"
										>
											{link.name}
										</a>
									</div>
								)
							)}
						</div>
					</div>
				))}
				{/* </div> */}
				<div className="flex flex-col gap-[20px]">
					<h1 className="font-bold text-[16px] text-[#252B42]">Get In Touch</h1>
					<div className="flex flex-col gap-[-2px]">
						<div className="">
							<input
								type="text"
								placeholder="Your Email"
								className="footer-input p-[15px] border-[#E6E7E7] text-[14px] border placeholder:text-[#737373] text-[#737373] placeholder:font-normal focus:border-[#23A6F0] outline-none bg-[#F9F9F9]"
							/>
							<button className="footer-button py-[16px] text-[14px] px-[22.5px] bg-[#23A6F0] text-white">
								Subsribe
							</button>
						</div>
						<p className="text-[12px]">Lore imp sum dolor Amit</p>
					</div>
				</div>
			</div>
			<div className="sm:flex-row flex flex-col gap-5 justify-between px-[45px] xl:px-[195px] w-screen bg-[#FAFAFA] py-[30px]">
				<span className="text-[#737373] font-bold text-[14px]">
					Made With Love By Finland All Right Reserved
				</span>
			</div>
		</main>
	);
};

export default Footer;
