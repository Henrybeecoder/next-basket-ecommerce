import Image from "next/image";
import image1 from "../../../public/assets/svgs/background1.svg";
import image11 from "../../../public/assets/svgs/background1_square.svg";
import image2 from "../../../public/assets/svgs/background2.svg";
import image22 from "../../../public/assets/svgs/background2_square.svg";
import image3 from "../../../public/assets/svgs/background3.svg";
import image4 from "../../../public/assets/svgs/background4.svg";

const Hero = () => {
	return (
		<div className="hero-section md:flex-row md:flex flex-col items-center justify-center gap-[15px] px-[45px] py-[80px] md:px-[195px] h-full transition-all duration-300">
			<div className="background-div1 relative mt-[15px]">
				<Image
					className="md:static absolute md:block hidden"
					src={image1}
					alt=""
				/>
				<Image
					className="md:absolute static md:hidden block"
					src={image11}
					alt=""
				/>
				<div className="absolute top-[24px] left-[24px]">
					<p className="text-[#2DC071] font-bold text-[14px]">5 items</p>
					<h1 className="text-[#252B42] font-bold md:text-[40px] text-[24px]">
						FURNITURE
					</h1>
					<p className="text-[#252B42] font-bold text-[14px] cursor-pointer">
						Read more
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-[15px] pt-[15px]">
				<div className="background-div2 relative">
					<Image
						className="md:static absolute md:block hidden"
						src={image2}
						alt=""
					/>
					<Image
						className="md:absolute static md:hidden block"
						src={image22}
						alt=""
					/>
					<div className="absolute top-[24px] left-[24px]">
						<p className="text-[#2DC071] font-bold text-[14px]">5 items</p>
						<h1 className="text-[#252B42] font-bold text-[24px]">FURNITURE</h1>
						<p className="text-[#252B42] font-bold text-[14px] cursor-pointer">
							Read more
						</p>
					</div>
				</div>
				<div className="flex md:flex-row flex-col items-center justify-center gap-[15px]">
					<div className="relative">
						<Image className="" src={image3} alt="" />
						<div className="absolute top-[24px] left-[24px]">
							<p className="text-[#2DC071] font-bold text-[14px]">5 items</p>
							<h1 className="text-[#252B42] font-bold text-[24px]">
								FURNITURE
							</h1>
							<p className="text-[#252B42] font-bold text-[14px] cursor-pointer">
								Read more
							</p>
						</div>
					</div>
					<div className="relative">
						<Image className="" src={image4} alt="" />
						<div className="absolute top-[24px] left-[24px]">
							<p className="text-[#2DC071] font-bold text-[14px]">5 items</p>
							<h1 className="text-[#252B42] font-bold text-[24px] cursor-pointer">
								FURNITURE
							</h1>
							<p>Read more</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
