import Task from './Task'


const Tasks = ({ tasks, onDelete, toggleReminder }) => {
    
    return (
        <>
          {tasks.map((task) => (
          <Task toggleReminder={toggleReminder} onDelete={onDelete} key={task.id} task={task} />
          ))}
        </>
    )

}
export default Tasks
