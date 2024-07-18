"use client";

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulário enviado!");
  }

  return (
    <form onSubmit={handleSubmit} className='mt-2 flex flex-col gap-4 w-full'>
      <div className='mt-4'>
        <label htmlFor="description" className="font-semibold">Título<span className="text-red-600">*</span></label>
        <input type="text" className='bg-slate-200 rounded-md p-2 w-full'/>
      </div>

      <div>
        <label htmlFor="description" className="font-semibold">Data<span className="text-red-600">*</span></label>
        <input type="date" name="" id="" className='bg-slate-200 rounded-md p-2 w-full'/>
      </div>

      <div>
        <label htmlFor="description" className="font-semibold">Descrição</label>
        <textarea name="" id="" className='resize-none bg-slate-200 rounded-md p-2 w-full h-28'></textarea>
      </div>

      <button type="submit" className='bg-green-500 p-3 rounded-lg w-full text-white font-semibold hover:opacity-85'>Salvar</button>
    </form>
  );
}

export default Form;