import React from "react";
import { useParams } from "react-router-dom";
import useCustomHook from "./useCustomHook";
import NewNote from "./NewNote";
const Detailnote = () => {
    const{result}=useCustomHook()
  const { NOTE } = useParams();
  const note = NOTE ? JSON.parse(decodeURIComponent(NOTE)) : null;
  console.log("note in Details note", note);

  return (
    <>
    
      <div className="d-flex justify-content-center align-items-center p-5" style={{height:"100vh"}}>
      {note ? (
        <div className="text-center ">
          <h1 className="mb-5 ">{note.Title} </h1><p >{note.note}</p><h6 className="text-end">On : {note.EnteredDate}</h6>
        </div>
      ) : (
       
        <NewNote />
      )}
      </div>
    </>
  );
};

export default Detailnote;
