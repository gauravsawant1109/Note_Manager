import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCustomHook from "./useCustomHook";
import { ToastContainer, toast } from 'react-toastify';
const NewNote = () => {
  const { EnteredDate, setEnteredDate, setNote, note, AddedNote, initial,Title,setTitle } =
    useCustomHook();

  return (
    <form
      onSubmit={AddedNote}
      className=" w-75"
      // style={{ height: "100vh" }}
    >
      <div className="">
        <h2 className="text-center">Add New Note</h2>
        <div className="text-center m-2">
          {" "}
          <input type="text" placeholder="Enter Title" className="w-100 m-2" value={Title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <textarea
          className="w-100 rounded bg-light-subtle p-2 border"
          placeholder="Enter Your Note"
          rows="4"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <p className="text-center mt-2">
          Submit On: {new Date().toISOString().slice(0,10)} (default)
          <div>
            {" "}
            <input
              type="date"
              placeholder="Enter Your Date"
              className=" p-1"
              value={EnteredDate} 
              onChange={(e) => setEnteredDate(e.target.value)}
            />
          </div>
        </p>
        <div className="d-flex justify-content-center m-3">
          <button type="submit" className="btn btn-outline-primary">
            {/* <Link to="/Home">Add Note</Link> */}
            Add Note
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
    
  );
};

export default NewNote;
