import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const useCustomHook = () => {
  // function getDate() {
  //     return new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
  // } 
  // const [initial,setInitial]=useState([])
  // const [initial,setInitial]=useState(() => {
  //     const storedNotes = localStorage.getItem("Notes");
  //     const getstoredNotes = JSON.parse(storedNotes)
  //     return getstoredNotes   
  // });
  const navigate = useNavigate();
  const [initial, setInitial] = useState(() => {
    const storedNotes = localStorage.getItem("Notes");
    return storedNotes ? JSON.parse(storedNotes) : []
  });

  const [note, setNote] = useState("")
  const [Title, setTitle] = useState("")

  const [EnteredDate, setEnteredDate] = useState(new Date().toISOString().slice(0, 10))
  //     toLocaleDateString('en-GB') returns the date in dd/mm/yyyy format.
  // .split('/').join('-') replaces / with - to get dd-mm-yyyy.
  useEffect(() => {
    // const initial = {Title:Title,note:note,id:EnteredDate}  
    localStorage.setItem("Notes", JSON.stringify(initial))

  }, [initial])

  function AddedNote(e) {
    e.preventDefault()
    //   if (!Title || !note ) {
    //     toast.error("Please fill all fields before adding a note.");
    //     return;
    // }

    // EnteredDate == null ? new Date().toISOString().slice(0, 10) : EnteredDate

    console.log(" Title :", Title, " note :", note, " date / id :", EnteredDate);
    const addedNote = { Title, note, EnteredDate }
    setInitial([...initial, addedNote])
    setEnteredDate("")
    console.log("initial Notes", initial);
    navigate("/Home");

  }
  const [searchDate, setSearchDate] = useState()
  // const getData = localStorage.getItem("Notes");
  // const [dataOne, setDataOne] = useState(JSON.parse(getData));
  const [filteredData, setFilteredData] = useState(initial)
  console.log("filteredData state", filteredData);
  // console.log("geted data :", dataOne);
  function searchNote(e) {
    e.preventDefault()
    console.log("initial array in search function ", initial);
    const One = initial.filter((data) => data.EnteredDate == searchDate)
    console.log("single data", One);
    setFilteredData(One)
  }
  console.log("filtered data", filteredData);
  const [result, setResult] = useState("Select Note In Details ")
  function RemoveNote(noteID) {
    setFilteredData(filteredData.filter((n) => n != noteID))
    if (filteredData.length == 0) {
      setResult("No Any Note Available")
    }
  }

  return { result, EnteredDate, RemoveNote, filteredData, setEnteredDate, setNote, note, AddedNote, initial, setInitial, Title, setTitle, searchNote, searchDate, setSearchDate }
}

export default useCustomHook;