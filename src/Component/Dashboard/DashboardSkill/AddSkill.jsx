import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddSkill() {
    const[name,setName]=useState('')
const[image,setImage]=useState('')
const navigate=useNavigate()

const sendData=(event)=>{
    event.preventDefault();
let Data={
    'name':name,
    'image':image
}
     axios.post("http://127.0.0.1:8000/api/add-skill",Data,{
        headers:{

            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${window.localStorage.getItem('token')}`

        }
    }


    ).then(res=>{console.log(res);
        navigate('/dashboard/skills')
    })
    .catch(error=>console.log(error))
}


  return (
<div className="section-skill-2">

<form onSubmit={()=>sendData(event)} enctype="multipart/form-data">
   <label htmlFor="">skill</label>
   <input type="text" name="name" onChange={(event)=>setName(event.target.value)}/>
   <label htmlFor="">image</label>
   <input type="file" name="image"  onChange={(event)=>setImage(event.target.files[0])}/>
   <input type="submit"  value="Add skill" />
   </form>
</div>  )
}

export default AddSkill
