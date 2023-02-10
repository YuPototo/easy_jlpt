import type { NextPage } from "next";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Book: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const uniqueTitle = query.uniqueTitle as string;

  const { data } = api.book.byUniqueTitle.useQuery(uniqueTitle);

  // get param
  return (
    <>
      <main className="flex h-screen flex-col items-center">
        {data ? (
          <div>
            <h1>{data.title}</h1>
            <div>{data.createdAt.toString()}</div>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Book;
