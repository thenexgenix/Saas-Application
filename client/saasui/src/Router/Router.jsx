import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../Pages/AboutUs/About";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import ContactUsPage from "../Pages/ContactUs/ContactUsPage";
import Home from "../Pages/Home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
