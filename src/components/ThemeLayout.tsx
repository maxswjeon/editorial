"use client";

import { ReactElement } from "react";
import { renderToString } from "react-dom/server";

import ParseAsReact from "html-react-parser";

type ParseResult = string | ReactElement | ReactElement[];

type Props = {
  layout: ParseResult;
  child?: ReactElement;
};

const handleParseResult = (result: ParseResult) => {
  if (typeof result === "string" || Array.isArray(result)) {
    return <>{result}</>;
  }

  return result;
};

export function ThemeLayout({ layout, child }: Props) {
  const layoutString = renderToString(handleParseResult(layout));

  const childString = child ? renderToString(child) : "";

  const layoutWithChild = layoutString.replace("<!--child-->", childString);

  const result = handleParseResult(ParseAsReact(layoutWithChild));

  return result;
}
