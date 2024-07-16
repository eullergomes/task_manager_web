const Header = () => {
  return (
    <header className="bg-slate-200 flex items-center justify-between p-5 md:border md:border-b lg:px-24">
      <a href="/" className='font-semibold'>{`<TaskManager/>`}</a>

      <nav>
        <ul className='flex gap-14 items-center justify-center'>
          <li><a href="">Home</a></li>
          <li><a href="">Tarefas</a></li>
          <li><a href="">Perfil</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;