interface TaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    date: string;
  };
}

const TaskItem = ({ task }: TaskProps) => {
  return (
    <div className="bg-gray-300 space-y-1 border-b">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.date}</p>
    </div>
  );
};

export default TaskItem;
