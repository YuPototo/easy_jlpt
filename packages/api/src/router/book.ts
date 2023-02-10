import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const bookRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.book.findMany();
  }),
  byUniqueTitle: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const uniqueTitle = input;
    return ctx.prisma.book.findUnique({ where: { uniqueTitle } });
  }),
});
