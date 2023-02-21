import React from "react";
import { Route, Routes } from "react-router-dom";
import AddClient from "./CommonPages/AllForm/AddClient";
import Navbar from "./Components/Navbar";
import Clients from "./Pages/Clients";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/clients" element={<Clients />} />

        <Route path="/AddClient" element={<AddClient />} />
      </Routes>
    </>
  );
}

export default App;
