import type { Metadata, ResolvingMetadata } from "next";

export type GenerateMetadataProps<
  P extends Record<string, string | string[] | undefined> = {}
> = {
  params: P;
  searchParams: { [key: string]: string | string[] | undefined };
};

export type GenerateMetadata = (
  props: GenerateMetadataProps,
  parent?: ResolvingMetadata
) => Promise<Metadata>;
