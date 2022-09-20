import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [activeTasks, setActiveTasks] = useState([])

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function addTask() {
    setActiveTasks(prev => [...prev, inputValue])
  }


  return (
    <div className="App">
      <div className="container">
        <h1 className="app_title">#todo</h1>
        <nav className="nav_tabs">
          <div className="nav_tab">All</div>
          <div className="nav_tab">Active</div>
          <div className="nav_tab">Completed</div>
        </nav>
        <div className="add_task_group">
          <input type="text" placeholder='add details' name="" id="addTask" value={inputValue} onChange={handleInputChange} />
          <label onClick={addTask} htmlFor="addTask">Add</label>
        </div>
        <div className="task_list">
          {activeTasks.map((task,i) => {
            return (<div className="task_item">
            <label htmlFor={`task${i}`}>
              <input type="checkbox"  name="" id={`task${i}`} />
              {task}
            </label>
            <button className="btn_delete">
                <span class="material-symbols-outlined">delete</span>
            </button>
            </div>)
            }
          )}
        </div>
        <button className='btn_delete_all'>
          <span class="material-symbols-outlined">delete</span>
          delete all
        </button>
      </div>
    </div>
  )
}

export default App
