import React, { useEffect, useState } from 'react'
import './ShowForm.css'
import axios from 'axios';
import DashboardSkill from '../../DashboardSkill/Skills';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const ShowForm = () => {


    const [closeForm,setCloseForm]=useState(false)
    const [isLoading, setIsLoading] = useState(false);   

    const [skillname,setSkillName]=useState('')
    const [skillFile,setSkillFile]=useState(null)


    const showToastMessage = () => {
      toast.success("Skill added successfully !");
    };
  
    const handleCloseForm = () =>{
      setCloseForm(true)
      console.log('closed')
      
    }
 
    const handleSubmit = async (e) =>{
      console.log(e)
       e.preventDefault();  
       setIsLoading(true);
       const fileInputElement = document.getElementById('input-file') ;
       if (!fileInputElement) {
         fileInputElement.click();
       }


       const formData=new FormData();

       formData.append('name', skillname);
       formData.append('image', skillFile);
      
       await axios.post('http://127.0.0.1:8000/api/add-skill',
          formData
        , {
  
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`
          }
      }).then(res => {
       
        if (res.status === 200) {
          
          showToastMessage()
          setSkillName('')
          setSkillFile(null)


            setIsLoading(false)
            
        }

        
      
      })


  

    }
  return (
    <>
     {!closeForm ?

     <>
      <div className='dashboard-skills'  onClick={handleCloseForm} />
      <div className='ra-show-form-skill'  >
      
       
        
       <form  className='ra-form-skill' onSubmit={(e)=> handleSubmit(e)} >
           
            <input type="text" placeholder="Skill Name" name="name" value={skillname} onChange={(e) =>setSkillName( e.target.value)}/>
                     <input type="file" id="input-file" onChange={(e)=>  setSkillFile(e.target.files[0])}/>
            <button disabled={isLoading}  type="submit"> {isLoading ?'... Sending' : 'Submit'}</button>
            <ToastContainer/>


        </form> 
      </div> </>:  (  <DashboardSkill/>)}


        
        </>  
        
  )
}

export default ShowForm