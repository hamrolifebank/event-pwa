import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("[middleware.js--[6]], ");
  const authorization = request.headers.get("Authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    console.log("[middleware.js--[9]], authorization", authorization);
    const token = authorization.split("bearer ")[1];
    // const decodedUser = jwt.verify(token, process.env.SECRET);
    // request.user = decodedUser;
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/organization",
// };
