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
import Prompts from "./Prompts.tsx";
import Medium from "./Medium.tsx";
import Easy from "./Easy.tsx";
import Hard from "./Hard.tsx";
import Settings from "./Settings.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/prompts/easy" element={<Easy />}></Route>
        <Route path="/prompts/medium" element={<Medium />}></Route>
        <Route path="/prompts/hard" element={<Hard />}></Route>
        <Route path="/sketch" element={<Sketch />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
