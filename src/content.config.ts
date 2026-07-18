import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const collections = {
    blog: defineCollection({
        loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
        schema: z.object({
            title: z.string(),
            date: z.string(),
            description: z.string(),
            previous: z.string(),
            img: z.string(),
        }),
    }),
    log: defineCollection({
        loader: glob({ pattern: "**/*.md", base: "src/content/log" }),
        schema: z.object({
            title: z.string(),
            author: z.string(),
            genre: z.string(),
            rating: z.coerce.number(),
            description: z.string(),
            img: z.string(),
            book: z.string(),
        }),
    }),
    updates: defineCollection({
        loader: glob({ pattern: "**/*.md", base: "src/content/updata" }),
        schema: z.object({
            title: z.string(),
        }),
    }),
};
