import React from "react";
import { useParams } from "react-router-dom";
import useCustomHook from "./useCustomHook";
import NewNote from "./NewNote";

const DetailNote = () => {
  const { result } = useCustomHook();
  const { NOTE } = useParams();
  
  // Safely parse the URL parameter with error handling
  const note = React.useMemo(() => {
    if (!NOTE) return null;
    try {
      return JSON.parse(decodeURIComponent(NOTE));
    } catch (error) {
      console.error("Failed to parse note data:", error);
      return null;
    }
  }, [NOTE]);

  return (
    <div 
      className="d-flex justify-content-center align-items-center p-5" 
      style={{ height: "100vh" }}
    >
      {note ? (
        <div className="text-center note-details">
          <h1 className="mb-5">{note.Title}</h1>
          <p className="note-content">{note.note}</p>
          <h6 className="text-end">On: {note.EnteredDate}</h6>
        </div>
      ) : (
        <NewNote />
      )}
    </div>
  );
};

export default DetailNote;