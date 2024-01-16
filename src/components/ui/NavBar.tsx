"use client";

import Image from "next/image";
import white_instagram from "../../../public/assets/icons/white_instagram.svg";
import white_youtube from "../../../public/assets/icons/white_youtube.svg";
import white_facebook from "../../../public/assets/icons/white_facebook.svg";
import white_twitter from "../../../public/assets/icons/white_twitter.svg";
import phone from "../../../public/assets/icons/phone_icon.svg";
import email from "../../../public/assets/icons/email_icon.svg";
import { navbarLinkData } from "@/data/navbarLinksData";
import { navbarListDataInterface } from "@/interfaces/data.interface";
import Link from "next/link";
import arrow2 from "../../../public/assets/icons/arrow2.svg";
import person_icon from "../../../public/assets/icons/person_icon.svg";
import search_icon from "../../../public/assets/icons/search_icon.svg";
import cart_icon from "../../../public/assets/icons/cart1_icon.svg";
import favorite_icon from "../../../public/assets/icons/favorite.svg";
import { useEffect, useState } from "react";
import { localStorageClass } from "@/utils/LocalStorage/localstorage.util";
import navbar_icon from "../../../public/assets/icons/menu_icon.svg";

const NavBar = () => {
	const [cartCount, setCartCount] = useState<number>(0);
	const [navbarIsOpen, setNavBarIsOpen] = useState<boolean>(false);

	useEffect(() => {
		// Function to update cart count
		function updateCartCount() {
			const cartItems = Object.keys(localStorage);
			const itemCount = cartItems.filter((key) =>
				key.includes("cart-item")
			).length;

			// Update cart count only if there is a change
			if (itemCount !== cartCount) {
				setCartCount(itemCount);
			}
		}

		updateCartCount();

		const storageChangeListener = (e: StorageEvent) => {
			if (e.key && e.key.includes("cart-item")) {
				updateCartCount();
			}
		};

		window.addEventListener("storage", storageChangeListener);

		return () => {
			window.removeEventListener("storage", storageChangeListener);
		};
	}, [cartCount]);

	function toggleNavBar() {
		setNavBarIsOpen(!navbarIsOpen);
		console.log("navbar clicked");
	}
	return (
		<div className="navbar text-white w-full transition-all duration-300">
			{/* top navbar */}
			<div className="bg-[#23856D] h-[58px] px-[36px] lg:flex hidden items-center justify-around text-[12px]">
				<div className="flex items-center justify-center gap-2">
					<Image src={phone} alt="" />
					<p className="">(225) 555-0118</p>
				</div>
				<div className="flex items-center justify-center gap-2">
					<Image src={email} alt="" />
					<p>michelle.rivera@example.com</p>
				</div>
				<p>Follow Us and get a chance to win 80% off</p>
				<div className="flex items-start justify-between gap-2">
					<p className="font-bold">Follow Us :</p>
					<div className="flex items-center justify-between gap-3">
						<Image className="cursor-pointer" src={white_instagram} alt="" />
						<Image className="cursor-pointer" src={white_youtube} alt="" />
						<Image className="cursor-pointer" src={white_facebook} alt="" />
						<Image className="cursor-pointer" src={white_twitter} alt="" />
					</div>
				</div>
			</div>
			{/* bottom navbar */}
			<div
				className={`bottom-navbar flex md:items-center items-start md:justify-around justify-between px-[36px] transition-all duration-300 ${
					!navbarIsOpen ? "h-auto" : "h-[20rem]"
				} py-4 relative `}
			>
				<div>
					<h1 className="text-[#252B42] text-[24px] font-bold">Bandage</h1>
				</div>
				<div className="flex justify-center">
					<div
						className={`md:static absolute top-[7rem] md:pb-0 md:flex md:flex-row flex-col items-center justify-center md:gap-[15px] gap-[30px] transition-all duration-300 ${
							!navbarIsOpen ? "hidden" : "block"
						}`}
					>
						{navbarLinkData.map(
							(link: navbarListDataInterface, index: number) => (
								<Link
									href={link.link}
									key={index}
									className={`relative flex items-center justify-center gap-[15px] group md:text-[14px] text-[30px] text-[#737373] md:font-bold font-normal hover:text-[#23A6F0]  ${
										index === 1 || index == 2 || index == 3 || index === 7
											? "md:block hidden"
											: ""
									} ${index === 1 ? "pr-4" : ""} 
									${index === 4 || index === 5 ? "md:hidden md:opacity-0 block" : ""}`}
								>
									{link.name}

									{index === 1 && (
										<Image
											className="absolute top-2 right-0 md:block hidden origin-center group-hover:rotate-180"
											src={arrow2}
											alt=""
										/>
									)}
								</Link>
							)
						)}
					</div>
				</div>
				<div className="md:flex hidden items-center justify-center gap-1">
					<Image src={person_icon} alt="" />
					<div className="flex items-center justify-center gap-1 font-bold text-[14px] text-[#23A6F0]">
						<Link href={""} className="">
							Login
						</Link>
						<p className="">/</p>
						<Link href={""} className="">
							Signup
						</Link>
					</div>
				</div>
				<div className="flex items-center justify-center gap-6 ">
					<div>
						<Image className="cursor-pointer" src={search_icon} alt="" />
					</div>
					<Link
						href={"/cart"}
						className="flex items-center justify-center gap-1 cursor-pointer"
					>
						<Image className="" src={cart_icon} alt="" />
						<p className="text-[#23A6F0] font-normal text-12px">{cartCount}</p>
					</Link>
					<div className="md:flex hidden items-center justify-center gap-1 cursor-pointer">
						<Image className="" src={favorite_icon} alt="" />
						<p className="text-[#23A6F0] font-normal text-12px">1</p>
					</div>
					<Image
						className="md:hidden block cursor-pointer"
						onClick={toggleNavBar}
						src={navbar_icon}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
