import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [activeTasks, setActiveTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [showActive, setShowActive] = useState(false)
  const [showCompleted, setShowCompleted] = useState(false)

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function addTask() {
    setActiveTasks(prev => [...prev, inputValue])
  }

  function toggleTask(e) {
    const task = e.target.parentNode.textContent;
    if (e.target.checked) {
      setCompletedTasks(prev => prev.filter(el => el !== task));
      setActiveTasks(prev => [...prev, task])
    } else {
      setActiveTasks(prev => prev.filter(el => el !== task));
      setCompletedTasks(prev => [task, ...prev ])
    }
  }

  function deleteTask(e) {
    const task = e.target.parentNode.previousSibling.textContent;
    if (e.target.checked) {
      setCompletedTasks(prev => prev.filter(el => el !== task));
    } else {
      setActiveTasks(prev => prev.filter(el => el !== task));
    }
  }

  function deleteAll() {
    setCompletedTasks([]);
    setActiveTasks([])
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="app_title">#todo</h1>
        <nav className="nav_tabs">
          <div className="nav_tab" style={showAll ? {borderBottom: "4px solid #2F80ED"}: ""}>All</div>
          <div className="nav_tab" style={showActive ? {borderBottom: "4px solid #2F80ED"} : null}>Active</div>
          <div className="nav_tab" style={showCompleted ? {borderBottom: "4px solid #2F80ED"} : null}>Completed</div>
        </nav>
        <div className="add_task_group">
          <input type="text" placeholder='add details' name="" id="addTask" value={inputValue} onChange={handleInputChange} />
          <label onClick={addTask} htmlFor="addTask">Add</label>
        </div>
        <div className="task_list">
          {activeTasks.map((task,i) => {
            return (<div className="task_item">
            <label htmlFor={`task${i}`} >
              <input  type="checkbox" onMouseUp={toggleTask} checked={false}  name="" id={`task${i}`} />
              {task}
            </label>
            <button onClick={deleteTask} className="btn_delete">
                <span className="material-symbols-outlined">delete</span>
            </button>
            </div>)
            }
          )}
          {completedTasks.map((task,i) => {
            return (<div className="task_item">
            <label htmlFor={`completed_task${i}`} style={{textDecoration: "line-through"}}>
              <input type="checkbox" checked={true} onMouseUp={toggleTask}  name="" id={`completed_task${i}`} />
              {task}
            </label>
            <button onClick={deleteTask} className="btn_delete">
                <span className="material-symbols-outlined">delete</span>
            </button>
            </div>)
            }
          )}
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
