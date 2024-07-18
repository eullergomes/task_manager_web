"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Header = () => {
  const { data } = useSession();

  const handleLoginClickGithub = () => {
    return signIn('github');
  };

  const handleLogoutClick = () => signOut();

  return (
    <header className="px-5 bg-slate-200 flex items-center justify-between md:border md:border-b lg:px-24">
      <a href="/" className='font-semibold text-lg'>{`<TaskManager/>`}</a>

      <nav>
        <ul className='flex gap-14 items-center justify-center'>
          <li onClick={handleLogoutClick} className="p-2 hover:bg-slate-300 rounded-lg"><a href="">Home</a></li>
          <li className="p-2 hover:bg-slate-300 rounded-lg"><a href="">Tarefas</a></li>
          {data ? (
            <div className="flex items-center justify-center gap-1 bg-yellow-300 p-2 rounded-lg hover:opacity-85">
              <Image
                src={data.user?.image as string}
                alt={data.user?.name as string}
                width={30}
                height={30}
                className="rounded-full"
              />
              <p>{data.user?.name}</p>
            </div>
          ) : (
            <button onClick={handleLoginClickGithub} className="flex items-center justify-center gap-1 bg-yellow-300 p-2 rounded-lg hover:opacity-85">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="user-circle"
                className="h-5 w-5"
              >
                <path fill="#000000" d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"></path>
              </svg>
              <span className="font-semibold">Fazer login</span>
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;