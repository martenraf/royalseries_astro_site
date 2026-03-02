import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Marten Busstra'),
    pubDate: z.coerce.date(),
    readTime: z.string().optional(),
    lang: z.enum(['en','nl']),
  }),
});

export const collections = { blog };
