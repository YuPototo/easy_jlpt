import type { NextPage } from "next";

import AddBookForm from "~/components/AddBookForm";

const AdminPage: NextPage = () => {
  return (
    <>
      <main className="">
        <h1>新增练习册</h1>

        <AddBookForm />
      </main>
    </>
  );
};

export default AdminPage;
