import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

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
    updates: defineCollection({
        loader: file("src/content/updata/Update_List.md"),
        schema: z.object({
            title: z.string(),
        }),
    }),
};
