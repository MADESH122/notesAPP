import React from "react";
import { useState } from "react";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { TiTick } from "@react-icons/all-files/ti/TiTick";
import "./Home.css"
function Home() {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                itemTitle: "Feedbacks",
                Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."

            },
            {
                id: 2,
                itemTitle: "Weekly Task",
                Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."

            },
            {
                id: 3,
                itemTitle: "Lyrics",
                Para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."

            }

        ])
        const handleDelete = (id) => {
            const listItems = items.filter((item) =>
                item.id !== id)
            setItems(listItems)
            localStorage.setItem('Add_Notes', JSON.stringify(listItems))
        }
    
    return (
            <div className="Homepage">
                <h1 id="user">Welcome John</h1>
                <div className="container-fluid">
                    <div className="row" id="recentnotes">
                        <div className="col-md-12">
                            <h1>My Notes</h1>
                        </div>
                        <div className="col-md-12" >
                            <h5>Recent viewed</h5>
                        </div>

                        {(items.length) ? (
                            <div className="col-md-12" id="cards">

                                {items.map((item) => (
                                    <div className="savedNotes" key={item.id}>
                                        <h4>{item.itemTitle}
                                            <MdDelete
                                                role="button"
                                                onClick={() => handleDelete(item.id)}
                                            />
                                        </h4>
                                        <p>{item.Para}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (<div id="default">
                            <h1>+</h1>
                            <p>Your list is empty</p>
                        </div>)}
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
            
    )
}

export default Home;