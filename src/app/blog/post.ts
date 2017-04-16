export class Post {
	title: string
	slug: string
	image: string
	content: string
	categories: Array<any>
	updated: Date
	constructor(title: string, slug: string, image: string, content: string, categories: Array<any>, updated: Date)
	{
		this.title = title;
		this.slug = slug;
		this.image = image;
		this.content = content;
		this.categories = categories;
		this.updated = updated;
	}
};