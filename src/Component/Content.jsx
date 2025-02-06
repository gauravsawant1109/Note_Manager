import React from "react";
import { FaPlus  } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCustomHook from "./useCustomHook";
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
  // console.log(initial);
  // const getData = localStorage.getItem("Notes");
  // const dataOne = JSON.parse(getData);
  // console.log("geted data :", dataOne);
  console.log("filteredData", filteredData);

  return (
    <>
   
      {/* <form className="d-flex" role="search" onSubmit={searchNote}>
              <input
                className="form-control me-2"
                type="date"
                placeholder="Search"
                aria-label="Search"
                value={searchDate}
                onChange={(e)=>setSearchDate(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

      <div className="d-flex justify-content-center mt-3 mb-3">
        <h4>
        
          <Link to="/Home/NewNote"   className="btn btn-primary " style={{textDecoration:"none"}}>
            <span  className="text-white " >
              New Note 
            </span>
          </Link>
        </h4>
        {/* <p>{getDate()}</p> */}
      </div>

       {/* serach bar  */}
    <div className="text-center mb-4">
        <input
          type="date"
          className="form-control d-inline w-auto"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={searchNote}>
          Search
        </button>
      </div>
      <div>
        {filteredData.length == 0 ? (
          <p className="text-center">No Note Added</p>
        ) : (
          <div className=" d-flex justify-content-center flex-column " style={{width:"400px"}}>
           {filteredData.map((note, i) => (
          <div key={i} className="bg-light text-black rounded ms-5 me-5 mb-3 mt- 3 w-75   p-3 cu-list shadow-lg bg-body-tertiary rounded" >
              
              <Link to={`/Home/${encodeURIComponent(JSON.stringify(note))}`} style={{textDecoration:"none"}}>  <h5>
                  {i + 1}) {note.Title}
                </h5>
                <p>{`${(note.note).slice(0,20)}....`}</p></Link> 
               <div className="d-md-flex justify-content-between"> <p>
                 
                  on : {note.EnteredDate}
                  {/*{note.EnteredDate== null ? new Date().toISOString().slice(0, 10) : note.EnteredDate } */}
                </p><button className="btn btn-danger p-1" onClick={()=>RemoveNote(note)}>Remove</button></div>
              </div>
            ))}{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
