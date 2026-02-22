import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    client: z.string().optional(),
    year: z.string(),
    role: z.string(),
    team: z.string().optional(),
    featuredImage: z.string().optional(),
    link: z.string().url().optional(),
    metaDescription: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
