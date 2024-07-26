import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard'
import Login from './Component/Login/Login'
import LandingBage from './Component/LandingBage'
import DashboardProject from './Component/Dashboard/DashboardProject/DashboardProject'
import DashboardMessage from './Component/Dashboard/DashboardMessage/DashboardMessage'
import DashboardBox from './Component/Dashboard/DashboardBox/DashboardBox'

import ShowType from './Component/Dashboard/DashboardType/ShowType'
import EditType from './Component/Dashboard/DashboardType/EditType'
import AddType from './Component/Dashboard/DashboardType/AddType'
import Types from './Component/Dashboard/DashboardType/Types'
import Skills from './Component/Dashboard/DashboardSkill/Skills'
import AddSkill from './Component/Dashboard/DashboardSkill/AddSkill'
import EditForm from './Component/Dashboard/DashboardSkill/EditForm/EditForm'

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
          <Route path="types" element={<Types/>} />
          <Route path="AddType" element={<AddType/>} />
          <Route path="showType/:id" element={<ShowType/>} />
          <Route path="editType/:id" element={<EditType/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="Addskill" element={<AddSkill/>} />
           <Route path="EditSkill/:id" element={<EditForm/>} />
          {/* <Route path="ShowSkill" element={<Skills/>} /> */}

        </Route>
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  )
}

export default App
