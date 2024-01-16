import boy_book from "../../../public/assets/svgs/boy_book.svg";
import book_icon from "../../../public/assets/svgs/book_icon.svg";
import growth_chart from "../../../public/assets/svgs/growth_chart.svg";
import Image from "next/image";

const BestServices = () => {
	return (
		<main className="best-services px-[45px] md:px-[195px] py-[80px]">
			<div className="flex flex-col items-center justify-center">
				<p className="text-[#737373] text-center text[20px]">
					Featured Products
				</p>
				<h1 className="text-[#252B42] text-center font-bold text-[24px]">
					THE BEST SERVICES
				</h1>
				<p className="text-[#737373] text-[14px] tedxt-center">
					Problems trying to resolve the conflict between
				</p>
			</div>
			<div className="md:flex md:flex-row flex-col items-center justify-between gap-[30px] py-[80px]">
				<div className="flex flex-col items-center justify-center gap-[20px]">
					<Image src={boy_book} alt="" />
					<h1 className="text-center text-[#252B42] font-bold text-[24px]">
						Easy wins
					</h1>
					<p className="text-center text-[#737373] font-normal text-[14px] max-w-[232px]">
						Get your best looking book smile now!
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-[20px]">
					<Image src={book_icon} alt="" />
					<h1 className="text-center text-[#252B42] font-bold text-[24px]">
						Concrete
					</h1>
					<p className="text-center text-[#737373] text-[14px] font-normal max-w-[232px]">
						Defalcate is most focused in helping you discover your most
						beautiful smile
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-[20px]">
					<Image src={growth_chart} alt="" />
					<h1 className="text-center text-[#252B42] font-bold text-[24px]">
						Hack Growth
					</h1>
					<p className="text-center text-[#737373] font-normal text-[14px] max-w-[232px]">
						Overcame any hurdle or any other problem.
					</p>
				</div>
			</div>
		</main>
	);
};

export default BestServices;
