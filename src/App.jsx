import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Landing } from "./components/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;