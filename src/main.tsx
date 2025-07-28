import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./Login.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile.tsx";
import Sketch from "./Sketch.tsx";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0%";
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sketch" element={<Sketch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
