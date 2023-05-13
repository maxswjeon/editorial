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
