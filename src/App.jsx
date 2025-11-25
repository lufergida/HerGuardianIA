import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Login from "./views/Login/Login.jsx";
import Register from './views/Register/Register.jsx';
import Dashboard from './views/Dashboard/Dashboard.jsx'; 
import Resources from "./views/Resources/Resources.jsx";  
import Assistant from "./views/Assistant/Assistant.jsx";
import ContentModerator from './views/ContentModerator/ContentModerator.jsx';
  import Help from './views/Help/Help.jsx'; 


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/assistant" element={<Assistant />} />
      <Route path="/moderation" element={<ContentModerator />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
}
