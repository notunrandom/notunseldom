import { blogPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = await blogPosts();
	const sorted = posts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});
	return json(sorted);
};
