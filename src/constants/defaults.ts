import { Metadata } from "next";

export const defaultConfig = {
  theme: "default",
  language: "ko",
};

export const defaultMetadata = {
  title: "My Blog",
  description: "My personal blog",
} satisfies Metadata;

export type Config = typeof defaultConfig;

export const defaultContent = {
  type: "document",
  content: [
    {
      type: "title",
      attrs: {
        level: 1,
      },
    },
    {
      type: "description",
    },
    {
      type: "draggable",
      content: [
        {
          type: "paragraph",
        },
      ],
    },
  ],
};
