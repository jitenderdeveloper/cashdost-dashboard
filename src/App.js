import React from "react";
import { Route, Routes } from "react-router-dom";
import AddClient from "./CommonPages/Clients/AddClient";
import EditClient from "./CommonPages/Clients/EditClient";
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
        <Route path="/EditClient/:id" element={<EditClient />} />
      </Routes>
    </>
  );
}

export default App;
