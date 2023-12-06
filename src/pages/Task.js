import React from "react";
import { useState } from "react";
import './Task.css';
import { TiTick } from "@react-icons/all-files/ti/TiTick";

function Task() {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        itemTitle: "File uploding",
      },
      {
        id: 2,
        itemTitle: "System update",
      },
      {
        id: 3,
        itemTitle: "Quality check",
      }
      
    ])


  const [getTask, setTask] = useState('')
  function handleTask(e) {
    setTask(e.target.value)
  }

   function handleButton() {
    if (!getTask) return
    addItem(getTask)
    setTask('')
  }

  const addItem = (itemTitle) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewTask = { id,itemTitle }
    const listItems = [...items, addNewTask]
    setItems(listItems)
    localStorage.setItem('Add_Notes', JSON.stringify(listItems))
  }


  return (
    <div className="container-fluid" id="body">
      <div className="row">
        <div className="container-fluid">
          <div className="row" id="inputbox">
            <div className="col-md-12" id='headingbtn'>
              <h1>Add Tasks</h1>
              <button
                type="submit"
                value={getTask}
                onClick={handleButton}
              >Save
              </button>
            </div>
            {/* <form> */}
            <div className="col-md-12">
              <h2>Title</h2>
            </div>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Add a Task..."
                onChange={handleTask}
                value={getTask}
              />
            </div>
            {/* </form> */}
            <div className="col-md-12">
              <h4>
                <input
                  type="date"
                />
              </h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" id="recentnotes">
            <div className="col-md-12">
              <h2><TiTick /> My Tasks</h2>
            </div>
            <div className="col-md-12" id="TaskBox">
              {items.map((item) => (
                <div className="savedTask" key={item.id}>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                    />
                  </div>
                  <div className="teaklist">
                    <h5>{item.itemTitle}</h5>
                    <p>Time</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
