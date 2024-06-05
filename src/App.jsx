import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard'
import Login from './Component/Login/Login'
import LandingBage from './Component/LandingBage'
import DashboardProject from './Component/Dashboard/DashboardProject/DashboardProject'
import DashboardMessage from './Component/Dashboard/DashboardMessage/DashboardMessage'
import DashboardBox from './Component/Dashboard/DashboardBox/DashboardBox'
import Skills from './Component/Dashboard/DashboradSkills/Skills'
import AddSkills from './Component/Dashboard/DashboradSkills/AddSkills'
import ShowSkill from './Component/Dashboard/DashboradSkills/ShowSkill'
import EditSkill from './Component/Dashboard/DashboradSkills/EditSkill'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingBage />} />
        <Route path='/login' element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="box" element={<DashboardBox />} />
          <Route path="project" element={<DashboardProject />} />
          <Route path="message" element={<DashboardMessage />} />
          <Route path="skills" element={<Skills/>} />
          <Route path="Addskills" element={<AddSkills/>} />
          <Route path="showSkill/:id" element={<ShowSkill/>} />
          <Route path="editSkill/:id" element={<EditSkill/>} />

        </Route>
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  )
}

export default App
