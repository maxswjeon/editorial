import jose from "jose";
import ResponseDTO from "utils/Response";

const secret = new TextEncoder().encode(process.env.COOKIE_SECRET);

export async function POST(req: Request) {
  const data = await req.json();

  if (!("refreshToken" in data) || !(typeof data.refreshToken === "string")) {
    return ResponseDTO.status(400).json({
      result: false,
      error: {
        title: "Bad request",
        message: "Missing refresh token",
      },
    });
  }

  const refreshToken = data.refreshToken as string;

  try {
    const { payload } = await jose.jwtVerify(refreshToken, secret, {
      issuer: process.env.BASE_URL,
    });

    if (!("userId" in payload) || !(typeof payload.userId === "string")) {
      return ResponseDTO.status(400).json({
        result: false,
        error: {
          title: "Bad request",
          message: "Invalid refresh token",
        },
      });
    }
  } catch {
    return ResponseDTO.status(400).json({
      result: false,
      error: {
        title: "Bad request",
        message: "Invalid refresh token",
      },
    });
  }

  return ResponseDTO.json({
    refreshToken: "refreshToken",
  });
}
