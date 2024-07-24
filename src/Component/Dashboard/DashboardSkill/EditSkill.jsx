import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

function EditSkill() {
    const [name,setName]= useState()
    const [image,setImage]= useState()
      const navigate=useNavigate()
    const [item,setItem]= useState({})
        const params= useParams()
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
         console.log(params.id);
  return (
<div className="section-skill-2">

<form onSubmit={()=>sendData(event)} enctype="multipart/form-data">
   <label htmlFor="">skill</label>
   <input type="text" name="name" onChange={(event)=>setName(event.target.value)} defaultValue={item.name} />
   <label htmlFor="">
    <img src={`http://127.0.0.1:8000${item.image}`} alt="" width='100px' height='100px'/>
   </label>
   <input type="file" name="image"  onChange={(event)=>setImage(event.target.files[0])}/>
   <input type="submit"  value="Edit skill" />

   </form>
</div>   )
}

export default EditSkill
