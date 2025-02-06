import React from "react";
import Content from "./Content";
import useCustomHook from "./useCustomHook";
import DetailNote from "./DetailNote";
import ReactCalender from "./ReactCalender";

const Home = () => {
  return (
    <>
    {/* <ReactCalender/> */}
    <div  className="d-flex " >
     <div className="bg-secondary-subtle o " style={{height:"auto",width:"400px"}} ><Content /></div> 
      <div className="w-75 h-100"><DetailNote/></div>  
      </div>
    </>
  );
};

export default Home;
