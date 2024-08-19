import React, { useEffect, useState } from 'react'
import './EditForm.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EditProjectForm = () => {


        const [name,setName]= useState('')
        const [description,setDescription]= useState('')
        const [link,setLink]= useState('')
        const [isLoading, setIsLoading] = useState(false);
        const [closeForm,setCloseForm]=useState(false)

        const [typeId,setTypeId]= useState(0)
        const [image,setImage]= useState()
        const [skills,setSkills]= useState([])
        const [projecttypes,setProjectTypes]=useState([])
        const [selectedSkills, setSelectedSkills] = useState([]);
        const [nameType, setnameType] = useState('');

        const [isChecked, setIsChecked] = useState(false);
        const [showprojects,setshowprojects]= useState({
            name:"",
            description:"",
            link:"",
            type_id:"",
            img_url:"",



               })
               const [showskills,setshowskills]= useState([])

        const showToastMessage = () => {
          toast.success("You have edit project successfully !");
        };



        const params= useParams()
        const navigate=useNavigate()

    useEffect(()=>{

    const fetchAboutData = async () => {


        try {

          const response = await axios.get("http://127.0.0.1:8000/api/showprojects/"+params.id)


          setshowprojects(response.data.project)
          setnameType(response.data.project.type.name);
          setshowskills(response.data.project.skills);
          setSelectedSkills(response.data.project.skills.map((skill) => skill.id));


        } catch (error) {

          console.error('Error fetching about data:', error);
        }

      };


      fetchAboutData();

  },[])

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


          });

          getSkills().then(res=>{
            setSkills(res)
          })

        console.log(params.id);
        },[])


  const handleChecked = (e) => {
    const skillId = parseInt(e.target.id);
    if (e.target.checked) {
      setSelectedSkills([...selectedSkills, skillId]);
    } else {
      setSelectedSkills(selectedSkills.filter((id) => id !== skillId));
    }
  };


        const sendData = async (event) => {
            event.preventDefault();


            setIsLoading(true);



            const formData = new FormData();


    (name)?formData.append("name", name):showprojects.name,
    (description)?    formData.append("description", description) :showprojects.description,
    (link)?    formData.append("link", link) :showprojects.link,
    (typeId)?    formData.append("type_id", typeId) :showprojects.type_id


if(image){
       formData.append("img_url", image);
   }
//    if(skillId){
    {selectedSkills.map((skillId)=>{
        formData.append('skill_id[]', skillId);
    })}



//    }

   formData.append('_method', 'put')


              const response = await axios.post(
                "http://127.0.0.1:8000/api/editprojects/"+params.id ,
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                    "_method": "PUT"

                  },
                }
              )
              console.log(response)

                if (response.status === 200) {


                  navigate("/dashboard/project")
                  showToastMessage()

                }

              }


  return (
        <div className="ra-project-edit">


            <div className='ra-project-edit-form'>
                <form onSubmit={()=>sendData(event)} encType="multipart/form-data">
                    <div className='nameSection'>
                        <label >Project Name</label>
                        <input type="text"  onChange={(event)=>setName(event.target.value)} defaultValue={showprojects.name} />

                    </div>
                    <div className='descriptionSection'>
                        <label >Project Description</label>
                        <input type="text" onChange={(event)=>setDescription(event.target.value)}defaultValue={showprojects.description}  />

                    </div>
                     <div className='linkSection'>
                        <label >Project Link</label>
                        <input type="text"  onChange={(event)=>setLink(event.target.value)}  defaultValue={showprojects.link}    />

                    </div>
                    <div className='ImageSection'>
                      <div className='img-pro'>
                        <img src={`http://127.0.0.1:8000/storage/${showprojects.img_url}`} alt="b" width="100px" height="50px"/>
                      </div>
                        <input type="file" name="image"  onChange={(event)=>setImage(event.target.files[0])}/>
                    </div>
                    <div className='typeSection'>
                      <label htmlFor=""> type: </label>
                    <select name='types'  onChange={(e) =>
                            setTypeId(e.target.value)
                            }>
                              <option value={nameType}>  {nameType}
                              </option>
                                {projecttypes.map((type) => {
                                  return (
                                  <>

                                    <option key={type.id} value={type.id}>  {type.name}
</option>

                                  </>
                                  );
                                })}
                    </select>
                    </div>

<div className='skillsSection ra-checkbox-wrapper'>
<label>Skills</label>

{skills.map((skill)=>{
                return (
<>
<input type="checkbox" name="skill_id[]"    id={skill.id}
                    onChange={handleChecked}
                    defaultChecked={selectedSkills.includes(skill.id)}
                          />
                    <h5>{skill.name}</h5>

</>


                )
              })}

</div>


                    <div className='edit-project-btn'>
                    <button disabled={isLoading} type="submit"> {isLoading ?'... Sending' : 'Submit'}</button>


                    </div>

                </form>

             </div>

            {/* <div className='skill-show-img'>
                 <img src={`http://localhost:8000/storage/${item.image}`} alt="" width='100px' height='100px'/>
             </div> */}
                <ToastContainer/>

        </div>
  )
}

export default EditProjectForm
