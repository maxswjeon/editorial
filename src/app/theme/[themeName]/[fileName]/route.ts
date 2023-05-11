import fs from "fs/promises";
import path from "path";

import Handlebars from "handlebars";
import mime from "mime-types";

import ResponseDTO from "utils/Response";

const templateBaseDir = path.resolve(process.cwd(), "data", "templates");

export async function GET(request: Request) {
  const url = new URL(request.url);

  const pathParts = url.pathname.split("/");
  const fileName = pathParts.pop();
  const theme = pathParts.pop();

  if (!fileName) {
    return ResponseDTO.status(400).json({
      result: false,
      error: {
        title: "Bad request",
        message: "Missing file name",
      },
    });
  }

  if (!theme) {
    return ResponseDTO.status(400).json({
      result: false,
      error: {
        title: "Bad request",
        message: "Missing theme name",
      },
    });
  }

  const filePath = path.join(templateBaseDir, theme, fileName);

  const fileType = mime.lookup(fileName) || "text/html";
  try {
    const data = await fs.readFile(filePath, "utf-8");

    if (fileType !== "text/x-handlebars-template") {
      return ResponseDTO.status(200)
        .header("Content-Type", fileType)
        .text(data);
    }

    const source = Handlebars.compile(data);
    return ResponseDTO.status(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .text(source({}));
  } catch {
    return ResponseDTO.status(404).json({
      result: false,
      error: {
        title: "Not found",
        message: "File not found",
      },
    });
  }
}
