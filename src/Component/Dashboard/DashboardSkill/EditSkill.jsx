import axios from "axios"
import { useEffect, useState } from "react"
import { BsDatabase } from "react-icons/bs"
import { useParams } from "react-router-dom"


function EditSkill() {

    const [item,setItem]= useState({})
        const params= useParams()
    useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/show-skill/${params.id}`).then(res=>setItem(res.data))
     .catch(error=>console.log(error))
   },[])
   console.log(item.name);
  return (
<div className="section-skill-2">

<form onSubmit={()=>sendData(event)} enctype="multipart/form-data">
   <label htmlFor="">skill</label>
   <input type="text" name="name" onChange={(event)=>setName(event.target.value)} defaultValue={item.name}/>
   <label htmlFor="">image</label>
   <input type="file" name="image"  onChange={(event)=>setImage(event.target.files[0])}/>
   <input type="submit"  value="Edit skill" />
   </form>
</div>   )
}

export default EditSkill
