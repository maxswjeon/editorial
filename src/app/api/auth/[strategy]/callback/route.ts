import { prisma } from "lib/prisma";
import ResponseDTO from "utils/Response";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const pathParts = url.pathname.split("/");
  // remove callback from path
  pathParts.pop();
  const strategy = pathParts.pop();

  if (!strategy) {
    return ResponseDTO.status(400).json({
      result: false,
      error: {
        title: "Bad request",
        message: "Missing strategy name",
      },
    });
  }

  const strategyConfig = prisma.authStrategy.findUnique({
    where: {
      name: strategy,
    },
  });

  if (!strategyConfig) {
    return ResponseDTO.status(400).json({
      result: false,
      error: {
        title: "Bad request",
        message: "Strategy not found or not configured",
      },
    });
  }
}
