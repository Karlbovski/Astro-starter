import {defineCollection, z} from "astro:content";

const postsCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        category: z.string(),
        date: z.string().transform((str) => new Date(str)),
        featured: z.boolean(),
        image: image(),
        summary: z.string(),
        title: z.string()
    }),
});

export const collections = {
    posts: postsCollection
};