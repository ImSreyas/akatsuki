import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: ['/((?!api|home|_next/static|_next/image|favicon.ico|$).*)'],
};