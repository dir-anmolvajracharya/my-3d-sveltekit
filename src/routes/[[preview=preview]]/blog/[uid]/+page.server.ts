import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getByUID('blog_post', params.uid);

	return {
		page,
		title: page.data.title,
		meta_description: page.data.meta_description || page.data.title,
		meta_title: page.data.meta_title || page.data.title,
		meta_image: page.data.meta_image || page.data.hover_image
	};
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('blog_post');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
