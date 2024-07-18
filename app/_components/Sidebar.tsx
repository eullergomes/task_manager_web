import HomeIcon from '../assets/icons/home.svg';
import TasksIcon from '../assets/icons/task.svg';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white hidden lg:block">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p>
          Um simples{" "}
          <span className="text-[#00ADB5]">organizador de tarefas</span>.
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton icon={HomeIcon} variant="unselected">
          Início
        </SidebarButton>
        <SidebarButton icon={TasksIcon} variant="selected">
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
