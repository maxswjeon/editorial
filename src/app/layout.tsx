import React, { PropsWithChildren } from "react";
import { GenerateMetadata } from "types/next";

import { Config, defaultConfig, defaultMetadata } from "constants/defaults";
import { prisma } from "lib/prisma";
import { themeFile } from "utils/path";

import "normalize.css";

export default async function RootLayout({ children }: PropsWithChildren) {
  const configInfo = await prisma.metadata.findFirst({
    orderBy: {
      version: "desc",
    },
  });

  const config = configInfo
    ? (JSON.parse(configInfo.data) as Config)
    : defaultConfig;

  const lang = config.language;

  try {
    const headResponse = await fetch(themeFile(config.theme, "head.json"), {
      next: {
        revalidate: 5 * 60,
      },
    });
    const head = (await headResponse.json()) as {
      type: string;
      [key: string]: string;
    }[];

    return (
      <html lang={lang}>
        <head>
          {head.map(({ type, ...props }, index) =>
            React.createElement(type, { key: index, ...props })
          )}
          <link rel="stylesheet" href={themeFile(config.theme, "theme.css")} />
        </head>
        <body>{children}</body>
      </html>
    );
  } catch {
    return (
      <html lang={lang}>
        <head>
          <link rel="stylesheet" href={themeFile(config.theme, "theme.css")} />
        </head>
        <body>{children}</body>
      </html>
    );
  }
}

export const generateMetadata: GenerateMetadata = async () => {
  const config = await prisma.metadata.findFirst({
    orderBy: {
      version: "desc",
    },
  });

  return config ? JSON.parse(config.data) : defaultMetadata;
};
