"use client";
import { productDataInterface } from "@/interfaces/data.interface";
import { localStorageClass } from "@/utils/LocalStorage/localstorage.util";
import Image from "next/image";
import { useEffect, useState } from "react";
import starfill from "../../../public/assets/svgs/star_fill.svg";
import staroutline from "../../../public/assets/svgs/start_outline.svg";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import arrow from "../../../public/assets/icons/arrow.svg";

const Cart = () => {
	const [cartProducts, setCartProducts] = useState<productDataInterface[]>([]);
	const [starArrays, setStarArrays] = useState<string[][]>([]);

	// const individualStarArray: string[] = [];

	// class instantiations

	// const cartKeys = Object.keys(localStorage);
	// const cartKeysItems = cartKeys.filter((key: string) =>
	// 	key.startsWith("cart-item")
	// );

	useEffect(() => {
		if (typeof window !== "undefined") {
			const cartKeys = Object.keys(localStorage);
			const cartKeysItems = cartKeys.filter((key: string) =>
				key.startsWith("cart-item")
			);
			const localstorageUtil = new localStorageClass();
			// Map over cartKeysItems to retrieve products from localStorage
			const items = cartKeysItems.map((key: string) => {
				const parsedItems = localstorageUtil.getFromStorage(key);
				return parsedItems;
			});

			const ratingsArrays = items.map((product: productDataInterface) => {
				const rating = Math.floor(product.rating);
				const starsForProduct: string[] = [];

				// Push starfill image to the array based on the rating
				for (let index = 0; index < rating; index++) {
					starsForProduct.push(starfill);
				}

				if (starsForProduct.length !== 5) {
					for (let index = 0; index < 5 - starsForProduct.length; index++) {
						starsForProduct.push(staroutline);
					}
				}

				return starsForProduct;
			});

			setStarArrays(ratingsArrays);

			// Filter out potential null values (items not found in localStorage)
			const validItems = items.filter((item) => item !== null);

			// Update the state with the retrieved products
			setCartProducts(validItems);
			// console.log(cartProducts);
		}
	}, []);

	function removeFromCart(id: number) {
		const localstorageUtil = new localStorageClass();
		localstorageUtil.removeFromStorage(`cart-item${id}`);
		window.location.reload();
	}

	return (
		<div>
			<NavBar />
			<div className="cart px-[45px] md:px-[195px] py-10">
				<h1 className="font-bold text-3xl pb-10 text-[#23A6F0]">Your Cart</h1>
				<div className="grid md:grid-cols-2 gap-10 md:w-screen">
					{cartProducts.length < 1 ? (
						<p>Your cart seems empty :)</p>
					) : (
						cartProducts.map((product: productDataInterface, index: number) => (
							<div
								key={index}
								className="md:flex md:flex-row flex-col items-center gap-20"
							>
								<div className="flex items-start justify-start pb-5">
									{product.images && product.images.length > 0 && (
										<Image
											src={product.images[0]}
											alt=""
											height={100}
											width={100}
										/>
									)}
								</div>
								<div className="flex flex-col justify-between gap-2 ">
									<div>
										<span className="text-[20px]">{product.title}</span>
										<div className="pt-4 flex items-center">
											{starArrays[index].map((star: any, starIndex: number) => (
												<Image
													className="cursor-pointer"
													key={starIndex}
													src={star}
													alt=""
												/>
											))}
										</div>

										<p className="text-[24px] text-[#252B42] font-bold pt-4 ">
											${product.price}
										</p>
										<div className="flex items-center gap-2">
											<span
												onClick={() => removeFromCart(product.id)}
												className="material-symbols-outlined text-red-700 cursor-pointer"
											>
												delete
											</span>
											<div className="flex items-center gap-2 font-semibold text-[#23A6F0] p-2 cursor-pointer group">
												<p>Checkout </p>
												<Image
													src={arrow}
													alt=""
													className="group-hover:translate-x-1"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
