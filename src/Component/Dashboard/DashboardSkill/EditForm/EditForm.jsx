import React, { useEffect, useState } from 'react'
import './EditForm.css'
import Skills from '../Skills';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const EditForm = () => {


        const [name,setName]= useState()
        const [image,setImage]= useState()
        const [item,setItem]= useState({})
        
        const params= useParams()
        const navigate=useNavigate()

        useEffect(()=>{
            axios.get(`http://127.0.0.1:8000/api/show-skill/${params.id}`).then(res=>setItem(res.data.skill))

        },[])



        const sendData = async (event) => {
            event.preventDefault();

            let Data={
                'name':name,
                'image':image,
                _method:"PUT"

            }
 
           try {
              const response = await axios.post(
                "http://127.0.0.1:8000/api/update-skill/"+params.id ,
                Data,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                    "_method": "PUT"

                  },
                }
              );
              console.log(response.data.skill);
              navigate("/dashboard/skills")

                } catch (error) {
              console.error(error);


            }
          };
      
  return (
        <div className="ra-skill-edit">
            <div className='ra-skill-edit-form'>
                <form onSubmit={()=>sendData(event)} encType="multipart/form-data">
                    <div className='nameSection'>
                        <label >Skill Name</label>
                        <input type="text" name="name" onChange={(event)=>setName(event.target.value)} defaultValue={item.name} />
                        
                    </div>
                    <div className='ImageSection'>
                        <input type="file" name="image"  onChange={(event)=>setImage(event.target.files[0])}/>
                    </div>
                    <div className='edit-skill-btn'>
                        <button>Submit</button>
                    </div>
                   
                
                </form>             
                
             </div>
        
            <div className='skill-show-img'>
                 <img src={`http://127.0.0.1:8000${item.image}`} alt="" width='100px' height='100px'/>
             </div>

        </div> 
  )
}

export default EditForm