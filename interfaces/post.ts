import Author from './author';
import Category from './category';

type Post = {
	_id: string;
	title: string;
	slug: string;
	author: Author;
	image: string;
	categories: Category[];
	description: string;
	readTime: number;
	content: string[];
};

export default Post;
