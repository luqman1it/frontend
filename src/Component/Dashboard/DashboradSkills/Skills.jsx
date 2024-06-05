import React, { useEffect, useState } from 'react'
import "./Skills.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Skills() {
  const navigate=useNavigate()
  const [types,setTypes] = useState([])
  const [get,setget] = useState(true)

  const show=(id)=>{
   navigate(`/dashboard/showSkill/${id}`)
  }
  const update=(id)=>{
    navigate(`/dashboard/editSkill/${id}`)
  }
  const deleteSkill=(id)=>{ 
    axios.delete(`http://127.0.0.1:8000/api/deletetype/${id}`,{
      headers:{
        Authorization: `Bearer ${window.localStorage.getItem('token')}`

    }
    }).then(res=>{console.log(res.data);
      setget((prev)=>!prev)
    }).catch(error=>console.log(error))
    }
  
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
    axios.get("http://127.0.0.1:8000/api/alltypes")
    .then(res=>setTypes(res.data.types))
    .catch(error=>console.log(error))

  },[get])
  return (
    <>
    <Link to="/dashboard/Addskills" className='Add-skills-btn '>Add</Link>

<div className='container-table'>
  <table className="table-section" >
     <thead>
       <tr>
         <th>#</th>
         <th> skill</th>
         <th> Action</th>

       </tr>
     </thead>
     <tbody>
       {types.map((element)=>{
         return(
           <tr key={element.id}> 

           <td>
            {element.id}
           </td>
          <td>
            {element.name}
          </td>             
          <td>
            <button className='bg-warning' onClick={()=>{show(element.id)}}>show</button>
          </td>
          <td>
            <button className='bg-info' onClick={()=>update(element.id)}>edit</button>
          </td>

          <td>
            <button className='bg-danger ' onClick={()=>deleteSkill(element.id)}>delete</button>
          </td>

         </tr>
         )
       })}
       
      
         
     </tbody>
   </table>
</div>
    
    </>
    
        
  
             
  )
}

export default Skills