import { authRouter } from "./router/auth";
import { bookRouter } from "./router/book";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  book: bookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
