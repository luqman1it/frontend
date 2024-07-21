import React, { useEffect, useState } from 'react'
import './ShowForm.css'
import axios from 'axios';

const ShowForm = () => {


    const [closeForm,setCloseForm]=useState(false)
    const [isLoading, setIsLoading] = useState(false);   
    const [projectname,setProjectName]=useState('')
    const [projectdesc,setProjectDesc]=useState('')
    const [projectnLink,setProjectLink]=useState('')
    const [projecttype,setProjectType]=useState(1)
    const [projectFile,setProjectFile]=useState(null)
    const [projectFileName,setProjectFileName]=useState('')
    // const [formContent, setFormContent] = useState({
    //   project_name: '',
    //   project_description: '',
    //   project_link: '',
    //   project_type: 1,
    //   project_img: ''
    // });
  


  
    const handleCloseForm = () =>{
      setCloseForm(false)
    }
 
    const handleSubmit = async (e) =>{
      console.log(e)
       e.preventDefault();  
       setIsLoading(true);

    
      //  await axios.post('http://127.0.0.1:8000/api/addprojects',
      // // { name: formContent.project_name,
      // //   description: formContent.project_description,
      // //   link: formContent.project_link,
      // //   type_id: formContent.project_type,
      // //   img_url: formContent.project_img
      
      // {name: projectname,
      //   description:projectdesc,
      //   link:projectnLink,
      //   type_id: projecttype,
      //   img_url: projectFile}
      //   , {
  
      //     headers: {
      //       Authorization: `Bearer ${window.localStorage.getItem('token')}`
      //     }
      // }).then(res => {
      //   //localStorage.setItem('token', res.data.authorisation.token)
      //   if (res.status === 200) {
      //     setCloseForm(true)
      //     alert('message send');
      //     setProjectName('')
      //     setProjectDesc('')
      //     setProjectLink('')
      //     setProjectType(1)
      //     setProjectFile(null)
            
            
      //   }


      
      // })


      setCloseForm(true)
       

    }
  return (
    <>
     {!closeForm ?
      <div className='dashboard-project' >
    <div className='ra-show-form' >
       <form  className='ra-form' >
            
            <input type="text" placeholder="Project Name" name="name" value={projectname} onChange={(e) =>setProjectName( e.target.value)}/>
            <input type="text" placeholder="Project description" name="description"value={projectdesc} onChange={(e) =>setProjectDesc( e.target.value)}/>
            <input type="text" placeholder="Project link" name="link" value={projectnLink} onChange={(e) =>setProjectLink( e.target.value)} />
            <input type="number" placeholder="Project type" name="type_id" value={projecttype} onChange={(e) =>setProjectType( e.target.value)} />
            <input type="file" id="input-file" onChange={(e)=>  setProjectFile(e.target.files[0])}/>
            <button onClick={(e)=> handleSubmit(e)} disabled={isLoading}  type="submit"> {isLoading ?'... Sending' : 'Submit'}</button>
        </form> </div> </div>:''}


        
        </>  
        
  )
}

export default ShowForm