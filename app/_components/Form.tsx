"use client";

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulário enviado com sucesso!');
  }

  return (
    <form onSubmit={handleSubmit} className='lg:px-24 mt-10 flex flex-col gap-4'>
      <h2 className='font-semibold text-3xl'>Adicionar Tarefa</h2>

      <div className='mt-4'>
        <label htmlFor="description">Título</label>
        <input type="text" className='bg-slate-200 rounded-md p-2 w-full'/>
      </div>

      <div>
        <label htmlFor="description">Descrição</label>
        <input type="text" className='bg-slate-200 rounded-md p-2 w-full'/>
      </div>

      <button type="submit" className='bg-green-500 p-4 w-64 rounded-lg'>Salvar</button>
    </form>
  );
}

export default Form;