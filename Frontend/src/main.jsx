import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar"
import Footer from "./Pages/Footer"
import AdminDashboard from './Pages/admin/AdminDashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route path="/Admin-dashboard" element = { < AdminDashboard /> } />
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  </StrictMode>,
)
