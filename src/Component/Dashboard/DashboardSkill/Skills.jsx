import { useEffect, useState } from "react"
import "./Skills.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function Skills() {
    const [get,setget] = useState(true)

        const[Skills,setSkills]=useState([])
        const navigate=useNavigate()
 const update=(id)=>{
    navigate(`/dashboard/EditSkill/${id}`)
}
         useEffect(()=>{

            axios.get('http://127.0.0.1:8000/api/get-skills').then(res=>setSkills(res.data.skills))

         },[get])
         const deleteSkill=(id)=>{
            axios.delete(`http://127.0.0.1:8000/api/delete-skill/${id}`,{
              headers:{
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
            }).then(res=>{console.log(res.data);
                  toast.success('تمت الحذف بنجاح')

              setget((prev)=>!prev)
            }).catch(error=>console.log(error))
            }

  return (
    <>
    <div className="section-skill-2">
    <Link to="/dashboard/AddSkill" className='Add-skills-btn '>Add</Link>

         <table border='1' >
            <thead>
                <tr>
                    <th>name</th>
                    <th>image</th>
                    <th>Action</th>

                          </tr>
            </thead>
            <tbody>
                {
                    Skills.map((skill)=>{
                        return(
                            <tr>
                        <td>{skill.name}</td>
                        <td><img src={`http://127.0.0.1:8000${skill.image}`} width='50px' height='50px'/></td>
                        <td><button className='bg-info' onClick={()=>update(skill.id)}>edit</button></td>

<td><button className='bg-danger ' onClick={()=>deleteSkill(skill.id)}>delete</button></td>

                        </tr>
                        )
                    })
                }

                </tbody>
         </table>
    </div>

    </>
  )
}

