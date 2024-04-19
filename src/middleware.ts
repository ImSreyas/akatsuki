import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({publicRoutes: ["/history"]});

export const config = {
  matcher: ['/((?!api|home|_next/static|_next/image|favicon.ico|$).*)'],
};