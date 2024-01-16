export interface featuredPostsCardInterface {
	image: string;
	title: string;
	subtitle: string;
	date: string;
	comments: string;
}

export interface footerDataInterface {
	title: string;
	links: { name: string; link: string }[];
}

export interface productDataInterface {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

export interface navbarListDataInterface {
	name: string;
	link: string;
}
