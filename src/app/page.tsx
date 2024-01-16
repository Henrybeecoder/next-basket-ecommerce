import BestSellerProducts from "@/components/ui/BestSellerProducts";
import BestServices from "@/components/ui/BestServices";
import DesignBetterExperience from "@/components/ui/DesignBetterExperience";
import FeaturedPosts from "@/components/ui/FeaturedPosts";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import NavBar from "@/components/ui/NavBar";
import WhatTheySay from "@/components/ui/WhatTheySay";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-between">
			<NavBar />
			<main className="flex min-h-screen flex-col items-center justify-between ">
				<Hero />
				<BestSellerProducts />
				<BestServices />
				<FeaturedPosts />
				<WhatTheySay />
				<DesignBetterExperience />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
