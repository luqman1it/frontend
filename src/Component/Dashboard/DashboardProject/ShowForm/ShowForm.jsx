import React, { useEffect, useState } from 'react'
import './ShowForm.css'
import axios from 'axios';
import DashboardProject from '../DashboardProject';

const ShowForm = () => {


    const [closeForm,setCloseForm]=useState(false)
    const [isLoading, setIsLoading] = useState(false);   

    const [projectname,setProjectName]=useState('')
    const [projectdesc,setProjectDesc]=useState('')
    const [projectnLink,setProjectLink]=useState('')
    const [projecttype,setProjectType]=useState(1)
    const [projecttypes,setProjectTypes]=useState([])
    const [projectFile,setProjectFile]=useState(null)

    const [projectskills,setProjectskills]=useState([])

    const getTypes = async () => {
      return await axios
        .get("http://127.0.0.1:8000/api/alltypes")
        .then((res) => {
    
    
          return res.data.types;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const getSkills = async () => {
      return await axios
        .get("http://127.0.0.1:8000/api/get-skills")
        .then((res) => {
    
    
          return res.data.skills;
        })
        .catch((error) => {
          console.error(error);
        });
    };



    useEffect(()=>{
      getTypes().then(res=>{
        setProjectTypes(res)
      })
      getSkills().then(res=>{
        setProjectskills(res)
      })
    },[])
  
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

       formData.append('name', projectname);
       formData.append('description', projectdesc);
       formData.append('link', projectnLink);
       formData.append('type_id', projecttype);
       formData.append('img_url', projectFile);
      
       await axios.post('http://127.0.0.1:8000/api/addprojects',
          formData
        , {
  
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`
          }
      }).then(res => {
       
        if (res.status === 200) {
          
          alert('project added successfully');
          setProjectName('')
          setProjectDesc('')
          setProjectLink('')
          setProjectType(1)
          setProjectFile(null)


            setIsLoading(false)
            
        }

        
      
      })


  

    }
  return (
    <>
     {!closeForm ?

     <>
      <div className='dashboard-project'  onClick={handleCloseForm} />
      <div className='ra-show-form'  >
      
       
        
       <form  className='ra-form' onSubmit={(e)=> handleSubmit(e)} >
           
            <input type="text" placeholder="Project Name" name="name" value={projectname} onChange={(e) =>setProjectName( e.target.value)}/>
            <input type="text" placeholder="Project description" name="description"value={projectdesc} onChange={(e) =>setProjectDesc( e.target.value)}/>
            <input type="text" placeholder="Project link" name="link" value={projectnLink} onChange={(e) =>setProjectLink( e.target.value)} />
            <select name='types'>
              {projecttypes.map((type,index)=>{
               return   <option  key={type.id} onChange={(e) =>setProjectType(type.id)}>{type.name}</option>
              })}
            
            </select>
            {/* <input type="number" placeholder="Project type" name="type_id" value={projecttype} onChange={(e) =>setProjectType( e.target.value)} /> */}
            <input type="file" id="input-file" onChange={(e)=>  setProjectFile(e.target.files[0])}/>
            <div className='ra-skills-checkbox'>
              <h2>Skills</h2>
              {projectskills.map((skill)=>{
                return ( <label class="container">{skill.name}
                  <input type="checkbox" checked="checked"/>
                  <span class="checkmark"></span>
                </label>)
              })}
          
            </div>
            <button disabled={isLoading}  type="submit"> {isLoading ?'... Sending' : 'Submit'}</button>
            
           
           
           
         
        </form> 
      </div> </>:  (  <DashboardProject/>)}


        
        </>  
        
  )
}

export default ShowForm