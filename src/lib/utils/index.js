export const blogPosts = async () => {
	const files = Object.entries(import.meta.glob('/src/routes/blog/*.md'));
	const posts = await Promise.all(
		files.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	return posts;
};
