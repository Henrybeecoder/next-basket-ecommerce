import FetchedProducts from "./fetchedProducts";

const BestSellerProducts = () => {
	return (
		<main className="best-seller-products px-[45px] md:px-[195px] py-[80px]">
			<div className="flex flex-col items-center justify-center">
				<p className="text-[#737373] text-center text[20px]">
					Featured Products
				</p>
				<h1 className="text-[#252B42] text-center font-bold text-[24px]">
					BEST SELLER PRODUCTS
				</h1>
				<p className="text-[#737373] text-[14px] text-center">
					Problems trying to resolve the conflict between
				</p>
			</div>
			<FetchedProducts />
		</main>
	);
};

export default BestSellerProducts;
