import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard'
import Login from './Component/Login/Login'
import LandingBage from './Component/LandingBage'
import DashboardProject from './Component/Dashboard/DashboardProject/DashboardProject'
import DashboardMessage from './Component/Dashboard/DashboardMessage/DashboardMessage'
import DashboardBox from './Component/Dashboard/DashboardBox/DashboardBox'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingBage />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="box" element={<DashboardBox />} />
          <Route path="project" element={<DashboardProject />} />
          <Route path="message" element={<DashboardMessage />} />

        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
