import TaskItem from './task-item';

const Tasksdata = [
  {
    id: 1,
    title: 'Acordar',
    description: 'Acordar às 05:30 da manhã.',
    date: '17-07-2024'
  },
  {
    id: 2,
    title: 'Ir para o IFMA',
    description: 'Chegar no IFMA às 07:00 da manhã.',
    date: '18-07-2024'
  },
  {
    id: 3,
    title: 'Comprar lanche',
    description: 'Ir comprar lanche durante o intervalo',
    date: '19-07-2024'
  },
  {
    id: 4,
    title: 'Almoçar',
    description: 'Ir almoçar no refeitório após o fim das aulas da manhã.',
    date: '17-07-2024'
  },
  {
    id: 5,
    title: 'Estagiar',
    description: 'Cumprir as horas obrigatórias de estágio durante a tarde.',
    date: '17-07-2024'
  }
];

const Tasks = () => {
  return (
    <div className="px-5 lg:px-24">
      {Tasksdata.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
 
export default Tasks;