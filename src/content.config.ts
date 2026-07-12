import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/chapters' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			order: z.number().default(0),
			description: z.string().optional(),
			photos: z.array(
				z.object({
					src: image(),
					alt: z.string(),
					caption: z.string().optional(),
				}),
			),
		}),
});

export const collections = { chapters };
