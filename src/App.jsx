import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'


function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [showActive, setShowActive] = useState(false)
  const [showCompleted, setShowCompleted] = useState(false)

  function Task({text, completed, id}) {
    return (
      <div className="task_item">
            <label htmlFor={id} style={completed ? {textDecoration: "line-through"} : null}>
              <input  type="checkbox" onMouseUp={() => toggleTask(id)} defaultChecked={completed} id={id} />
              {text}
            </label>
            <button onClick={() => deleteTask(id)} className="btn_delete">
                <span className="material-symbols-outlined">delete</span>
            </button>
      </div>
    )
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)
    
  }

  function addTask() {
    setTasks(prev => [...prev, {text: inputValue, completed: false, id: nanoid()}]);
    setInputValue('')
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(el => el.id !== id));
  }

  function deleteAll() {
    setTasks([]);
  }

  function showOnlyActive() {
    setShowActive(true)
    setShowCompleted(false)
    setShowAll(false)
  }
  
  function showOnlyCompleted() {
    setShowActive(false)
    setShowCompleted(true)
    setShowAll(false)
  }

  function showAllTasks() {
    setShowActive(false)
    setShowCompleted(false)
    setShowAll(true)
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="app_title">#todo</h1>
        <nav className="nav_tabs">
          <div className="nav_tab" style={showAll ? {borderBottom: "4px solid #2F80ED"}: {}} onClick={showAllTasks}>All</div>
          <div className="nav_tab" style={showActive ? {borderBottom: "4px solid #2F80ED"} : {}} onClick={showOnlyActive}>Active</div>
          <div className="nav_tab" style={showCompleted ? {borderBottom: "4px solid #2F80ED"} : {}} onClick={showOnlyCompleted}>Completed</div>
        </nav>
        <div className="add_task_group">
          <input type="text" placeholder='add details' name="" id="addTask" value={inputValue} onChange={handleInputChange} />
          <label onClick={addTask} htmlFor="addTask">Add</label>
        </div>
        <div className="task_list">
          {showAll ? (tasks.map((task) => 
            <Task 
              text={task.text} 
              completed={task.completed} 
              id={task.id} 
              key={task.id}
            />
          )) :
          showActive ? (tasks.filter(task => !task.completed).map((task) =>  
            <Task 
              text={task.text} 
              completed={task.completed} 
              id={task.id} 
              key={task.id}
            />
            )) :
          showCompleted ? (tasks.filter(task => task.completed).map((task) =>  
          <Task 
            text={task.text} 
            completed={task.completed} 
            id={task.id} 
            key={task.id}
          />
          )) :
          null
          }
        </div>
        <button className='btn_delete_all' onClick={deleteAll}>
          <span className="material-symbols-outlined">delete</span>
          delete all
        </button>
      </div>
    </div>
  )
}

export default App
