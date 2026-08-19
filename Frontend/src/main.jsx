import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar"
import Footer from "./Pages/Footer"
import AdminDashboard from './Pages/admin/AdminDashboard';
import PatientDashboard from './Pages/PatientDashboard';
import DoctorDashboard from './Pages/DoctorDashboard';
import Doctors from './Pages/Doctors';
import Home from './Pages/Home';
import Hospital from './Pages/Hospital'
import Treatment from './Pages/Treatment'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Forget_password from './Components/Auth/Forget_password'
import Appointment from './Pages/Appointment';
import Protected_route from "./Components/Auth/Protected_route"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public routes */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/hospitals" element={<Hospital />} />

        <Route path="/treatments" element={<Treatment />} />

        {/* Login required */}

        <Route element={<Protected_route />}>
          <Route
            path="/appointment"
            element={<Appointment />}
          />

          <Route
            path="/forget"
            element={<Forget_password />}
          />
        </Route>

        {/* Admin routes */}

        <Route
          element={
            <Protected_route
              allowedRoles={["Admin"]}
            />
          }
        >
          <Route
            path="/Admin-dashboard"
            element={<AdminDashboard />}
          />
        </Route>

        {/* Doctor routes */}

        <Route
          element={
            <Protected_route
              allowedRoles={["Doctor"]}
            />
          }
        >
          <Route
            path="/Doctor-dashboard"
            element={<DoctorDashboard />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />
        </Route>

        {/* Patient routes */}

        <Route
          element={
            <Protected_route
              allowedRoles={["Patient"]}
            />
          }
        >
          <Route
            path="/Patient-dashboard"
            element={<PatientDashboard />}
          />
        </Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  </StrictMode>,
)
