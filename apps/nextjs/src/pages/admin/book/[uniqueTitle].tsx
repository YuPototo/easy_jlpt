import { NextPage } from "next";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Book: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const uniqueTitle = query.uniqueTitle as string;

  const { data: book } = api.book.byUniqueTitle.useQuery(uniqueTitle);

  // get sections
  const { data: sections } = api.section.byBookId.useQuery(book?.id as string, {
    enabled: !!book,
  });

  // get param
  return (
    <>
      <main className="flex h-screen flex-col items-center">
        {book ? (
          <div>
            <h1>{book.title}</h1>
            <div>{book.createdAt.toString()}</div>

            <div>
              {sections?.map((section) => (
                <div key={section.id}>
                  <h2>{section.title}</h2>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>Not exists</div>
        )}
      </main>
    </>
  );
};

export default Book;
