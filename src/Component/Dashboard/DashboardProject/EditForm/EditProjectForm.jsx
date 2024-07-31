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
        const [typeId,setTypeId]= useState(0)
        const [image,setImage]= useState()
        const [skills,setSkills]= useState([])
        const [projecttypes,setProjectTypes]=useState([])
        const [selectSkill, setSelectSkill] = useState([]);
        const [isChecked, setIsChecked] = useState(false);
        const [showprojects,setshowprojects]= useState({
            name:"",
            description:"",
            link:"",
            typeId:"",
               })

        const showToastMessage = () => {
          toast.success("You have edit project successfully !");
        };



        const params= useParams()
        const navigate=useNavigate()

    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/api/showprojects/"+params.id)
      .then(res=>setshowprojects(res.data))
      console.log(showprojects.name);
  },[])
        console.log(showprojects.name);

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

        const handleChecked=(e)=>{
          setIsChecked(!isChecked)
          var array = []
          var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

          for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].id)

          }
          setSelectSkill(array)

         }




        const sendData = async (event) => {
            event.preventDefault();

            // let Data={
            //     'name':name,
            //     'description':description,
            //     'link':link,
            //     'type_id':typeId,
            //     'image':image,
            //     'skills':skills,

            //     _method:"PUT"

            // }


            const formData = new FormData();


    (name)?formData.append("name", name):showSkill.name,
    (description)?    formData.append("description", description) :showSkill.description,
    (link)?    formData.append("link", link) :showSkill.link,
    (typeId)?    formData.append("type_id", typeId) :showSkill.type_id


if(image){
       formData.append("image", image);
   }
   if(skill_id){
    {selectSkill.map((skillId)=>{
        formData.append('skill_id[]', skillId);
    })}


   }
   formData.append('_method', 'put')


              const response = await axios.post(
                "http://127.0.0.1:8000/api/editprojects/"+params.id ,
                Data,
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

                  showToastMessage()

                  navigate("/dashboard/project")

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
                        <input type="text" onChange={(event)=>setDescription(event.target.value)}  />

                    </div>
                     <div className='linkSection'>
                        <label >Project Link</label>
                        <input type="text"  onChange={(event)=>setLink(event.target.value)}  />

                    </div>
                    <div className='ImageSection'>
                        <input type="file" name="image"  onChange={(event)=>setImage(event.target.files[0])}/>
                    </div>
                    <div className='typeSection'>
                    <select name='types'  onChange={(e) =>
                            setTypeId(e.target.value)
                            }>
                                {projecttypes.map((type) => {
                                  return (
                                    <option key={type.id} value={type.id}
                                      >
                                      {type.name}
                                    </option>
                                  );
                                })}
                    </select>
                    </div>

                    <div className='skillsSection'>
                            <h2>Skills</h2>

                      {skills.map((skill)=>{
                        return (
                        <div className="ra-checkbox-wrapper">
                          <label>
                            <input type="checkbox"  id={skill.id} onChange={handleChecked}
                          />
                            <p>{skill.name}</p>
                          </label>
                        </div>

                        )
                      })}
                    </div>

                    <div className='edit-project-btn'>
                        <button>Submit</button>

                    </div>


                </form>
                <ToastContainer/>

             </div>

            {/* <div className='skill-show-img'>
                 <img src={`http://localhost:8000/storage/${item.image}`} alt="" width='100px' height='100px'/>
             </div> */}

        </div>
  )
}

export default EditProjectForm
