import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddType.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddType() {
    const [name,setName] = useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])
    const sendData=(event)=>{
        event.preventDefault();

         axios.post("http://127.0.0.1:8000/api/addtypes",{name:name},{
            headers:{
                Authorization: `Bearer ${window.localStorage.getItem('token')}`

            }
        }


        ).then(res=>{console.log(res);
            navigate('/dashboard/types')
        })
        .catch(error=>console.log(error))
    }
  return (
       <div className='container-table-form'>

<form onSubmit={()=>sendData(event)} className='form-skill'>
<label htmlFor="" className='form-label'>type</label>
<input type="text"  placeholder='enter your type' onChange={(event)=>setName(event.target.value)}/>
<button variant="primary" type="submit" className='Add-btn'>
  Add
</button>
</form>
</div>

  )
}

export default AddType
