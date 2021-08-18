import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import { useState, useEffect } from "react"


const { REACT_APP_API_URL_TASK } = process.env;

function App() {

  const [showAddTask,setShowAddTask] = useState (false)

  const [tasks,setTasks] = useState({})

useEffect(() => {
  const getTasks = async () => {
    const tasksfromServer = await fetchTasks()
    setTasks(tasksfromServer)
  }
  console.log(REACT_APP_API_URL_TASK)
  getTasks()
}, [])

// Fetch data
const fetchTasks = async () => {
  const res = await fetch(REACT_APP_API_URL_TASK)
  
  const data = await res.json()

  return data 
}

const fetchTask = async (id) => {
  const res = await fetch(REACT_APP_API_URL_TASK+`/${id}`)
  console.log(REACT_APP_API_URL_TASK+`/${id}`)
  const data = await res.json()
  return data 
}

//Add Task
const addTask = async (task) => {
  //
  //const id = Math.floor(Math.random() * 1000) +1
  //const newTask = {id,...task}

  const res = await fetch(REACT_APP_API_URL_TASK, {
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(task),
  })

  const data = await res.json()
  
  setTasks([...tasks,data])
  console.log(data)
}

//toggle reminder
const toggleReminder = async (id) => {
  const taskToggle = await fetchTask(id)
  const updateTask =  {...taskToggle,reminder: !taskToggle.reminder}

  const res = await fetch(REACT_APP_API_URL_TASK+`/${id}`, {
    method: 'PUT',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(updateTask)
  })

  const data = await res.json()

  //console.log(id);
  setTasks(tasks.map((task) => (task.id === id) ? {...task, reminder : data.reminder}: task ))

}

//delete task
const deleteTask = async (id) => {
  await fetch(REACT_APP_API_URL_TASK+`/${id}`, {
    method: 'DELETE'
  })
  
  setTasks(tasks.filter((task) => task.id !== id))
  
};
  

  return (

    <Router>
    <div className="container">
    
    
    <Route path='/task-tracker' exact render={(props) => (
        
        <>
          <Header onClickAddButton={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker..." />
          {showAddTask && <AddTask onAdd={addTask}/>}
          
          {
            tasks.length > 0 ? (<Tasks toggleReminder={toggleReminder} onDelete={deleteTask} tasks={tasks}/>) : ('No Task')
          }
        </>
       )
      }
    /> 
    
      <Route path='/about' component={About} />

      <Footer />
      
    </div>



    </Router>
  );
}

export default App;
