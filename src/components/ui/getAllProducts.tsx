"use client";

import { ApiCall } from "@/utils/Api/apiCall";
import { ApiUrl } from "@/utils/Api/apiURL";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import { productDataInterface } from "@/interfaces/data.interface";
import Link from "next/link";

const GetAllProducts = () => {
	const [productsData, setProductsData] = useState<any[]>([]);
	const [error, setError] = useState<any>("");

	// console.log(productsData);

	//Api instantiations
	const apiCall = new ApiCall();
	const apiUrl = new ApiUrl();

	async function getProducts() {
		try {
			const response = await apiCall.getRequest(
				apiUrl.getLimitedProducts({ limit: 8 })
			);
			return response.data.products;
		} catch (error: any) {
			console.error(error);
			setError(error?.message);
			throw error; // Re-throw the error to let react-query handle it
		}
	}

	const {
		isLoading,
		error: queryError,
		data,
	} = useQuery("products", getProducts, {
		enabled: Boolean(productsData),
	});

	useEffect(() => {
		if (data) {
			setProductsData(data);
			setError("");
		}
	}, [data, queryError]);

	return (
		<div className="py-10">
			<div className="grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
				{isLoading ? (
					<div className="flex items-center justify-center ">
						{/* <Spinner aria-label="Medium sized spinner example" size="md" /> */}
						<p className="text-center">Loading products...</p>
					</div>
				) : (
					productsData.length > 0 &&
					productsData.map((data: productDataInterface) => (
						<Link
							href={"/products/" + data.id}
							key={data.id}
							className="flex flex-col items-center justify-center bg-white p-2"
						>
							<div className="h-[238px]">
								<Image src={data.images[0]} alt="" height={100} width={100} />
							</div>
							<div className="flex flex-col items-center justify-center gap-[10px]">
								<p className="text-center font-bold text-[16px] text-[#252B42]">
									{data.title}
								</p>
								<p className="text-center font-bold text-[14px] text-[#737373]">
									English Department
								</p>
								<div className="flex items-center justify-center gap-[5px]">
									<p className="text-[#BDBDBD] text-[16px] font-bold">$16.48</p>
									<p className="text-[#23856D] text-[16px] font-bold">
										${data.price}
									</p>
								</div>
							</div>
						</Link>
					))
				)}
			</div>
		</div>
	);
};

export default GetAllProducts;
