import React from "react";
import { useState } from "react";
import './Notes.css';
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { FaTextHeight } from "@react-icons/all-files/fa/FaTextHeight";
import { IoMdColorFill } from "@react-icons/all-files/io/IoMdColorFill";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaAlignLeft } from "@react-icons/all-files/fa/FaAlignLeft";
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";
import { GrLinkNext } from "@react-icons/all-files/gr/GrLinkNext";

function Notes() {


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


    const [setTitle, setnewTitle] = useState('')
    function handleTitle(e) {
        setnewTitle(e.target.value)
    }

    const [setNotes, setnewNotes] = useState('')
    function handleNotes(e) {
        setnewNotes(e.target.value)
    }

    function handleSubmit() {
        if (!setTitle && !setNotes) return
        addItem(setTitle, setNotes)
        setnewTitle('')
        setnewNotes('')

    }

    const addItem = (itemTitle, Para) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const addNewItem = { id, itemTitle, Para }
        const listItems = [...items, addNewItem]
        setItems(listItems)
        localStorage.setItem('Add_Notes', JSON.stringify(listItems))
    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) =>
            item.id !== id)
        setItems(listItems)
        localStorage.setItem('Add_Notes', JSON.stringify(listItems))
    }



    return (

        <div className="container-fluid" id="body">
            <div className="row">
                <div className="container-fluid">
                    <div className="row" id="inputbox">
                        <div className="col-md-12" id='headingbtn'>
                            <h1>Add Notes</h1>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                            >Save
                            </button>
                        </div>
                        {/* <form> */}
                        <div className="col-md-12">
                            <input
                                onChange={handleTitle}
                                type="text"
                                placeholder="Title"
                                value={setTitle}
                                required />
                        </div>
                        <div className="col-md-12">
                            <input
                                onChange={handleNotes}
                                value={setNotes}
                                type="text"
                                placeholder="Take a notes..."
                                required
                            />
                        </div>

                        {/* </form> */}
                        <div className="col-md-12">
                            <h4>timer</h4>
                        </div>
                        <div className="col-md-12">
                            <h4 className="edits">
                                <li><FaTextHeight /></li>
                                <li><IoMdColorFill /></li>
                                <li><GiHamburgerMenu /></li>
                                <li><FaAlignLeft /></li>
                                <li><IoMdArrowBack /></li>
                                <li><GrLinkNext /></li>
                            </h4>
                        </div>
                    </div>
                </div>

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
            </div>
        </div >
    )
}

export default Notes;
