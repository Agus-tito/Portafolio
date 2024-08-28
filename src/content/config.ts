import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    projects: z.array(z.object({
      id: z.string(),
      image: z.string(),
      url: z.string(),
      technologies: z.array(z.string()),
      translations: z.object({
        es: z.object({
          title: z.string(),
          date: z.string(),
          description: z.string(),
        }),
        en: z.object({
          title: z.string(),
          date: z.string(),
          description: z.string(),
        }),
      }),
    })),
  }),
});

export const collections = {
  'projects': projectsCollection,
};