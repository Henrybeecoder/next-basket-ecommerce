"use client";
import { ApiCall } from "@/utils/Api/apiCall";
import { ApiUrl } from "@/utils/Api/apiURL";
import { productDataInterface } from "@/interfaces/data.interface";
import Image from "next/image";
import blue_circle from "../../../../public/assets/icons/blue_circle.svg";
import green_circle from "../../../../public/assets/icons/green_circle.svg";
import orange_circle from "../../../../public/assets/icons/orange_circle.svg";
import black_circle from "../../../../public/assets/icons/black_circle.svg";
import starfill from "../../../../public/assets/svgs/star_fill.svg";
import staroutline from "../../../../public/assets/svgs/start_outline.svg";
import like_icon from "../../../../public/assets/icons/like_icon.svg";
import cart2_icon from "../../../../public/assets/icons/cart2_icon.svg";
import toggle_icon from "../../../../public/assets/icons/toggle2_icon.svg";
import GetAllProducts from "@/components/ui/getAllProducts";
import hooli_logo from "../../../../public/assets/icons/hooli_logo.svg";
import lyft_logo from "../../../../public/assets/icons/lyft_logo.svg";
import leaf_logo from "../../../../public/assets/icons/leaf_logo.svg";
import stripe_logo from "../../../../public/assets/icons/stripe_logo.svg";
import aws_logo from "../../../../public/assets/icons/aws_logo.svg";
import reddit_logo from "../../../../public/assets/icons/reddit_logo.svg";
import Footer from "@/components/ui/Footer";
import { localStorageClass } from "@/utils/LocalStorage/localstorage.util";
import { useEffect, useState } from "react";
import cart1_icon from "../../../../public/assets/icons/cart1_icon.svg";
import NavBar from "@/components/ui/NavBar";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "@/redux/features/cart-slice";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import home_arrow from "../../../../public/assets/icons/home_arrow.svg";
import arrow from "../../../../public/assets/icons/arrow.svg";
import arrow2 from "../../../../public/assets/icons/arrow2.svg";

const ProductDetail = ({ params }: { params: productDataInterface }) => {
	const dispatch = useDispatch();

	const [product, setProduct] = useState<any>({});
	const [productInCart, setProductInCart] = useState<boolean>(false);
	const [starArray, setStarArray] = useState<string[]>([]);

	// console.log(product);

	// console.log(starArray);

	useEffect(() => {
		const apiCall = new ApiCall();
		const apiUrl = new ApiUrl(params.id.toString());
		const fetchData = async () => {
			try {
				const response = await apiCall.getRequest(apiUrl.getASingleProduct());
				const product: productDataInterface = response.data;
				setProduct(product);

				const rating = Math.floor(product.rating);

				const starsForProduct: string[] = [];

				// Push starfill image to the array based on the rating
				for (let index = 0; index < rating; index++) {
					starsForProduct.push(starfill);
				}

				// If the length is less than 5, push staroutline images to the array
				for (let index = 0; index < 5 - starsForProduct.length; index++) {
					starsForProduct.push(staroutline);
				}

				// Set the starArray state with the array of stars
				setStarArray(starsForProduct);
			} catch (error) {
				console.error(error);
				// Handle error
			}
		};

		fetchData();
	}, [params]);

	const localstorage = new localStorageClass();

	function addToCart() {
		localstorage.addToStorage(`cart-item${params.id}`, product);
		setProductInCart(true);
		window.location.reload();
		dispatch(addProduct(product));
	}
	function removeFromCart() {
		localstorage.removeFromStorage(`cart-item${params.id}`);
		setProductInCart(false);
		window.location.reload();
		dispatch(removeProduct(params.id));
	}
	useEffect(() => {
		const localstorage = new localStorageClass();
		const product = localstorage.getFromStorage(`cart-item${params.id}`);
		if (product) {
			setProductInCart(true);
		}
	}, [params]);

	return (
		<div className="flex flex-col justify-center ">
			<NavBar />
			{/* product section */}
			<div className="md:flex md:flex-row flex-col items-start justify-between pb-[48px] h-full w-auto bg-[#FAFAFA] pt-16 px-[45px] md:px-[195px]">
				<div className="flex md:items-start items-center justify-center">
					<div className="absolute flex items-center justify-center gap-[15px]">
						<Link href={"/"} className="text-[#252B42] text-[14px] font-bold">
							Home
						</Link>
						<Image src={home_arrow} alt="" />
						<p className="text-[#BDBDBD] text-[14px] font-bold">Shop</p>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start">
					<div className="md:h-[370px] h-[200px] flex items-center justify-center relative">
						{product.images && product.images.length > 0 && (
							<Image src={product.images[0]} alt="" height={200} width={200} />
						)}
						<Image
							className="origin-center rotate-180 absolute left-0 p-3 z-10 rounded-xl cursor-pointer"
							src={arrow}
							alt=""
						/>
						<Image
							className="absolute right-0 cursor-pointer p-3 z-10 rounded-xl"
							src={arrow}
							alt=""
						/>
					</div>

					<div className="flex item-start gap-2">
						{product.images && product.images.length > 0 && (
							<Image src={product.images[1]} alt="" height={50} width={50} />
						)}
						{product.images && product.images.length > 0 && (
							<Image src={product.images[2]} alt="" height={50} width={50} />
						)}
					</div>
				</div>
				<div className="flex flex-col md:items-start items-start justify-around gap-2 h-[450px]">
					<div>
						<span className="text-[20px]">{product.title}</span>
						<div className="pt-4 flex items-center">
							{Array.isArray(starArray) &&
								starArray.map((star: any, index: number) => (
									<Image
										className="cursor-pointer"
										key={index}
										src={star}
										alt=""
									/>
								))}
						</div>
						<div>
							<p className="text-[24px] text-[#252B42] font-bold pt-4">
								${product.price}
							</p>

							<p className="font-bold text-[14px] text-[#252b42]">
								Availability :{" "}
								<span className="text-[#23A6F0]">
									{product.stock > 0 ? "In stock" : "Out of stock"}
								</span>
							</p>
						</div>
					</div>
					<div className="md:mt-10 -mt-14 -mb-4">
						<p className="text-[14px] md:hidden block pt-10 pb-4 text-left text-[#858585]">
							{product.description}
						</p>
						<hr />
						<div className="mt-4 flex items-center gap-2">
							<Image src={blue_circle} alt="" width={30} height={30} />
							<Image src={green_circle} alt="" width={30} height={30} />
							<Image src={orange_circle} alt="" width={30} height={30} />
							<Image src={black_circle} alt="" width={30} height={30} />
						</div>
					</div>
					<div className="flex items-center justify-center gap-[20px] ">
						<button className="bg-[#23A6F0] py-[10px] md:px-[20px] px-[18px] rounded-[5px] font-bold  md:text-[14px] text-[12px] text-white">
							Select Options
						</button>
						<div className="flex items-center justify-center gap-[10px]">
							<Image src={like_icon} alt="" />
							{productInCart ? (
								<Image
									onClick={removeFromCart}
									className="cursor-pointer"
									src={cart1_icon}
									alt=""
									height={25}
									width={25}
								/>
							) : (
								<Image
									onClick={addToCart}
									src={cart2_icon}
									className="cursor-pointer"
									alt=""
								/>
							)}
							<Image src={toggle_icon} alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* description section */}
			<div className="px-[45px] md:px-[195px] pb-10 md:block hidden">
				<div className="flex items-center justify-center gap-5 cursor-pointer">
					<p className="text-[#737373] text-[14px] font-bold p-[24px]">
						Description
					</p>
					<p className="text-[#737373] text-[14px] font-bold p-[24px] cursor-pointer">
						Additional Information
					</p>
					<p className="text-[#737373] text-[14px] font-bold p-[24px] cursor-pointer">
						Reviews(0)
					</p>
				</div>
				<hr />
				<p className="text-[14px] md:block hidden pt-10 text-center text-[#858585]">
					{product.description}
				</p>
			</div>

			{/* best seller products section  */}
			<div className="md:pt-20 bg-[#FAFAFA] px-[45px] md:px-[195px]">
				<div className="md:block hidden">
					<p className="text-[#252B42] font-bold text-[24px]">
						BEST SELLER PRODUCTS
					</p>
					<div>
						<GetAllProducts />
					</div>
				</div>
				{/* companies logo section */}
				<div className="flex items-center justify-center pb-20">
					<div className="md:flex md:flex-row flex-col items-center justify-between gap-10">
						<Image
							src={hooli_logo}
							alt=""
							width={80}
							height={80}
							className="pt-8"
						/>
						<Image
							src={lyft_logo}
							alt=""
							width={80}
							height={80}
							className="pt-8"
						/>
						<Image
							src={leaf_logo}
							alt=""
							width={80}
							height={80}
							className="pt-8"
						/>
						<Image
							src={stripe_logo}
							alt=""
							width={80}
							height={80}
							className="pt-8"
						/>
						<Image
							src={aws_logo}
							alt=""
							width={80}
							height={80}
							className="pt-8"
						/>
						<Image
							src={reddit_logo}
							alt=""
							width={80}
							height={80}
							className="pt-8"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductDetail;
