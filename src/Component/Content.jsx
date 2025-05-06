import React from "react";
import { FaPlus, FaSearch, FaTrash, FaEdit, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCustomHook from "./useCustomHook";
import "../CSS/Component.css"
const Content = () => {
  const {
    initial,
    setInitial,
    EnteredDate,
    dataOne,
    filteredData,
    searchNote,
    searchDate,
    RemoveNote,
    setSearchDate,
  } = useCustomHook();

  console.log("filteredData", filteredData);

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-md-8 mx-auto">
          {/* Header with new note button */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold text-primary">My Notes</h2>
            <Link 
              to="/Home/NewNote" 
              className="btn btn-primary rounded-pill shadow-sm d-flex align-items-center"
            >
              <FaPlus className="me-2" /> New Note
            </Link>
          </div>

          {/* Search bar */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <FaCalendarAlt className="text-primary" />
                </span>
                <input
                  type="date"
                  className="form-control border-start-0"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  aria-label="Search by date"
                />
                <button 
                  className="btn btn-primary" 
                  onClick={searchNote}
                >
                  <FaSearch className="me-2" /> Search
                </button>
              </div>
            </div>
          </div>

          {/* Notes list */}
          {filteredData.length === 0 ? (
            <div className="text-center p-5 bg-light rounded shadow-sm">
              <div className="py-4">
                <FaEdit className="text-muted mb-3" style={{ fontSize: "3rem" }} />
                <h4 className="text-muted">No Notes Found</h4>
                <p className="text-muted">Create your first note to get started!</p>
              </div>
            </div>
          ) : (
            <div className="notes-container">
              {filteredData.map((note, i) => (
                <div key={i} className="card shadow-sm mb-3 note-card hover-shadow">
                  <div className="card-body">
                    <Link 
                      to={`/Home/${encodeURIComponent(JSON.stringify(note))}`} 
                      className="text-decoration-none"
                    >
                      <h5 className="card-title text-primary fw-bold mb-2">
                        {note.Title}
                      </h5>
                      <p className="card-text text-muted mb-3">
                        {`${(note.note).slice(0, 80)}${note.note.length > 80 ? '...' : ''}`}
                      </p>
                    </Link>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted d-flex align-items-center">
                        <FaCalendarAlt className="me-1" size={12} /> {note.EnteredDate}
                      </small>
                      <button 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => RemoveNote(note)}
                      >
                        <FaTrash className="me-1" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;