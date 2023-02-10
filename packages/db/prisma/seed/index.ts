import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: "N2 Words",
        uniqueTitle: "n2-words",
      },
      {
        title: "N1 Words",
        uniqueTitle: "n1-words",
      },
      {
        title: "N3 Words",
        uniqueTitle: "n3-words",
      },
      {
        title: "N2 Reading",
        uniqueTitle: "n2-reading",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
