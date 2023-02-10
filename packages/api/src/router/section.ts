import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const sectionRouter = createTRPCRouter({
  byBookId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const bookId = input;
    return ctx.prisma.section.findMany({ where: { bookId } });
  }),
});
