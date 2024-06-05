import React, { useEffect, useState } from 'react'
import "./AddSkills.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditSkill() {
    const [data,setData]=useState({})
    const[name,setName]=useState("")
    const navigate=useNavigate()
   const params= useParams()
   useEffect(()=>{
     axios.get("http://127.0.0.1:8000/api/showtypes/"+params.id).then(res=>setData(res.data.types))
     .catch(error=>console.log(error))
   },[])
   const sendData=(event)=>{
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/api/edittypes/"+params.id,{
        name:name,
        _method:"put"

    },
    {
        headers:{
            Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
    }).then(res=>{console.log(res);
        navigate('/dashboard/skills')
    })
   }
  return (
    <div>

<div className='container-table-form'>

<form onSubmit={()=>sendData(event)} className='form-skill'>
<label htmlFor="" className='form-label'>skill</label>
<input type="text"  placeholder='enter your skill' onChange={(event)=>setName(event.target.value)} defaultValue={data.name} />
<button variant="primary" type="submit" className='Add-btn'>
  Edit skill 
</button> 
</form>
</div>
    </div>
  )
}

export default EditSkill