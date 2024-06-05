import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ShowSkill.css'
function ShowSkill() {
    const[data,setData]=useState({name:""})
    const params=useParams()
    const navigate=useNavigate()
    console.log(params.id)
    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/api/showtypes/"+ params.id).then(res=>setData(res.data.types))
    },[])
const back=()=>{
    navigate('/dashboard/Skills')
}
  return (
    <>
    <div className="show-header">
    <button className='back ' onClick={back}>back</button>
    <div className='headers-skill'>

<h2>skills</h2>
<p className='show-skill'>
  {data.name}
</p>
</div>
    </div>
 

</>
    
  )
}

export default ShowSkill