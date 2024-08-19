import React, { useEffect, useState } from 'react'
import './ShowForm.css'
import axios from 'axios';
import DashboardProject from '../DashboardProject'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowForm = () => {


    const [closeForm,setCloseForm]=useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [projectname,setProjectName]=useState('')
    const [projectdesc,setProjectDesc]=useState('')
    const [projectnLink,setProjectLink]=useState('')
    const [projecttype,setProjectType]=useState(null)
    const [projecttypes,setProjectTypes]=useState([])
    const [projectFile,setProjectFile]=useState(null)
    const [selectSkill, setSelectSkill] = useState([]);
    const [skills, setSkills] = useState([]);


    const showToastMessage = () => {
      toast.success("project added successfully !");
    };



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

    const handleChecked = (e) => {
      const { id, checked } = e.target.value;
      if (checked) {
          setSelectSkill([...selectSkill, parseInt(id)]);
      } else {
          setSelectSkill(selectSkill.filter((skill) => skill !== parseInt(id)));
      }
  }


    useEffect(()=>{
      getTypes().then(res=>{
        setProjectTypes(res)
      getSkills().then(res=>{
        setSkills(res)
      })

      });
      axios.get('http://127.0.0.1:8000/api/get-skills').then(res=>setSkills(res.data.skills));

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
  const typeId = parseInt(projecttype);


       const formData=new FormData();

       formData.append('name', projectname);
       formData.append('description', projectdesc);
       formData.append('link', projectnLink);
       if(typeId.length>0){
        formData.append('type_id', typeId);
            console.log(typeId)
       }
       formData.append('type_id', typeId);
       formData.append('img_url', projectFile);
       if(selectSkill.length > 0){
        formData.append('skill_id', selectSkill);
        console.log(selectSkill)

    }




       await axios.post('http://127.0.0.1:8000/api/addprojects',
          formData
        , {

          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`
          }
      }).then(res => {
console.log(res.data);
        if (res.status === 200) {

          showToastMessage()
          setProjectName('')
          setProjectDesc('')
          setProjectLink('')
          setProjectType('')

          setProjectFile(null)


            setIsLoading(false)

        }



      })
console.log(projecttype)



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

            <select name='type_id'  onChange={(e) =>
        setProjectType(e.target.value)
        }>
             <option selected
         >
type
 </option>
  {projecttypes.map((type) => {
    return (
      <option key={type.id} value={type.id}
         >
        {type.name}
      </option>
    );
  })}
</select>
<div className='in'>
<label id="image-proj"> add image</label>
            <input type="file" id="input-file" className="imageproo" onChange={(e)=>  setProjectFile(e.target.files[0])}/>

</div>
                <div className='ra-skills-checkbox'>
              <h2>Skills</h2>


              {skills.map((skill)=>{
                return (
                 <div className="ra-checkbox-wrapper">
                  <label>
                    <input type="checkbox" name="skill_id[]" id={skill.id} onChange={handleChecked} value={skill.name}
                  />
                    <p>{skill.name}</p>
                  </label>
                </div>

                )
              })}

            </div>
            <button disabled={isLoading} type="submit"> {isLoading ?'... Sending' : 'Submit'}</button>
            <ToastContainer/>


        </form>

      </div> </>:  (  <DashboardProject/>)}



        </>

  )
}

export default ShowForm
