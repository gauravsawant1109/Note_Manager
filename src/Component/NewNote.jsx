import React from "react";
import { ToastContainer } from 'react-toastify';
import useCustomHook from "./useCustomHook";
import 'react-toastify/dist/ReactToastify.css';

const NewNote = () => {
  const { 
    EnteredDate, 
    setEnteredDate, 
    setNote, 
    note, 
    AddedNote, 
    Title, 
    setTitle 
  } = useCustomHook();

  return (
    <div className="container py-4">
      <form
        onSubmit={AddedNote}
        className="w-75 mx-auto bg-white p-4 rounded shadow-sm"
      >
        <h2 className="text-center mb-4">Add New Note</h2>
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            id="title"
            placeholder="Enter Title" 
            className="form-control" 
            value={Title} 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="noteContent" className="form-label">Note Content</label>
          <textarea
            id="noteContent"
            className="form-control"
            placeholder="Enter Your Note"
            rows="6"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="noteDate" className="form-label">
            Date: {EnteredDate || new Date().toISOString().slice(0,10)} 
            {EnteredDate ? "" : " (default)"}
          </label>
          <input
            type="date"
            id="noteDate"
            className="form-control"
            value={EnteredDate} 
            onChange={(e) => setEnteredDate(e.target.value)}
          />
        </div>
        
        <div className="d-flex justify-content-center">
          <button 
            type="submit" 
            className="btn btn-primary px-4 py-2"
            disabled={!Title.trim() || !note.trim()}
          >
            Add Note
          </button>
        </div>
      </form>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default NewNote;