import { createTRPCRouter, publicProcedure } from "../trpc";

export const bookRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.book.findMany();
  }),
});
