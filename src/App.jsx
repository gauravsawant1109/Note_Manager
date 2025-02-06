import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import NewNote from "./Component/NewNote";
import DetailNote from "./Component/DetailNote";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/NewNote" element={<Home />} />
          <Route path="/Home/:NOTE" element={<Home />} />

        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  );
}

export default App;
