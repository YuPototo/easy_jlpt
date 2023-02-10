import { authRouter } from "./router/auth";
import { bookRouter } from "./router/book";
import { postRouter } from "./router/post";
import { sectionRouter } from "./router/section";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  book: bookRouter,
  section: sectionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
