import {defineCollection, z} from "astro:content";

const articlesCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        category: z.string(),
        date: z.string(),
        featured: z.boolean(),
        image: image(),
        summary: z.string(),
        title: z.string()
    }),
});

export const collections = {
    articles: articlesCollection
};