import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../Pages/AboutUs/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services/Services";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
