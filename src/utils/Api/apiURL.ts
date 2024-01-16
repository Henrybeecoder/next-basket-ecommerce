export class ApiUrl {
	private liveUrl = "https://dummyjson.com";

	public param: string | undefined;
	constructor(param?: string) {
		this.param = param;
	}

	private productUrl = this.liveUrl + "/products";

	//products routes
	public getAllProducts = this.productUrl;
	public getASingleProduct = () => `${this.productUrl}/${this.param}`;
	public getLimitedProducts({
		limit = 0,
		skip = 0,
		select,
	}: {
		limit: number;
		skip?: number | undefined;
		select?: string[] | undefined;
	}) {
		const selectString = select ? `&select=${select.join(",")}` : "";
		const skipString = skip !== undefined ? `&skip=${skip}` : "";
		return `${this.productUrl}/?limit=${limit}${skipString}${selectString}`;
	}
}
