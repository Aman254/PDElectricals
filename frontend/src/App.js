import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Global/Navbar";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Footer from "./Components/Global/Footer";
// import Electricservices from "./Pages/Electricservice";
// import Generator from "./Pages/Generatorservice";
// import ACservice from "./Pages/ACservice";
// import Earthingservice from "./Pages/Earthingservice";

export default function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/services/electric" element={<Electricservices />} /> */}
          {/* <Route path="/services/generator" element={<Generator />} /> */}
          {/* <Route path="/services/ac" element={<ACservice />} /> */}
          {/* <Route path="/services/earthing" element={<Earthingservice />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
