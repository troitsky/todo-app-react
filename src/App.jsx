import { useState } from 'react'
import './App.css'

function App() {

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
          <input type="text" placeholder='add details' name="" id="addTask" />
          <label htmlFor="addTask">Add</label>
        </div>
        <div className="task_list">
          <div className="task_item">
            <label htmlFor="checkbox1">
              <input type="checkbox"  name="" id="checkbox1" />
              Task 1
            </label>
            <button className="btn_delete">
                <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
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
