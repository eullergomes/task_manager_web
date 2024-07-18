import Form from './_components/Form';
import Header from './_components/Header';
import LoginAccounts from './_components/login-accounts';
import Table from './_components/tasks';

export default function App() {
  return (
    <>
      <Header />

      <section className="px-5 lg:px-24 mt-10">
        <details className="dropdown hover:cursor-pointer">
          <summary className="btn m-1 font-semibold text-3xl">
            Adicionar Tarefa

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1);" }}
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg> */}
          </summary>
          <Form />
        </details>
      </section>
      
      <Table />
    </>
  );
}
