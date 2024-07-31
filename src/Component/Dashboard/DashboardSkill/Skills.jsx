import { useEffect, useMemo, useState } from "react"
import "./Skills.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ShowForm from "./ShowForm/ShowForm"
import { getData } from "./getData"
import EditForm from "./EditForm/EditForm"
export default function Skills() {

       const[Skills,setSkills]=useState([])
       const [buttonclicked,setButtonClicked]=useState(false); 
       const [editbuttonclicked,setEditButtonClicked]=useState(false); 
        const navigate=useNavigate()




         



            useEffect(() => {
                getData().then((data) => {
                setSkills(data);
                });
            }, []);

            const handleAdd=()=>{setButtonClicked(true) }
          
             const handleEdit=(id)=>{
              console.log(id)
              navigate(`/dashboard/EditForm/${id}`)
             }
  

            const handleDelete = async (event,skill) => {


                    await axios.delete(`http://127.0.0.1:8000/api/delete-skill/${skill.id}`,{
                      headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('token')}`
                      }
                    }).then(res => {

                         if(res.status===200){
                            getData().then((data) => {
                                setSkills(data);
                                });
                          alert('deleted')
                         }

                  })
                 }


                const columns = useMemo(() => {
                return [
                { field: "id", headerName: "Skill_ID", width: 70, filterable: false },
                { field: "name", headerName: "Skill Name", width: 130 },
                { field: "image", headerName: "Image", width: 130 },
                {
                   field: "Delete",
                   headerName: "Delete ",
                   sortable: false,
                   renderCell: (params) =>

                     <Button  color='error' variant='contained' onClick={(e)=>handleDelete(e,params.row)}>
                       Delete
                     </Button>

                 },
                {
                   field: "Edit",
                   headerName: "Edit ",
                   sortable: false,
                   renderCell: (params) =>
    
                     <Button  color='success' variant='contained' onClick={(e)=>handleEdit(params.row.id)}>
                       Edit
                     </Button>

                 },

                ];
            });
  return (
    <>
    <div className="section-skill-2">
    <Box
        sx={{
            height: 400,
            width: "100%",
        }}
        >
      {buttonclicked ? <ShowForm/>
     : (<>
             <Button
            color="success"
            variant="contained"
            onClick={handleAdd}
            sx={{ fontWeight:'800',textAlign: "center", alignItems: "center" }}
        >
            Add new Skill
        </Button>
        <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: "center", mt: "0px", mb: "20px" }}
        >
            Skills
        </Typography>
        <DataGrid
        sx={{textAlign: "center"  }}
            columns={columns}
            rows={Skills}
            pagination
            autoPageSize
             rowsLoadingMode="server"

        ></DataGrid>



        </>


)}

{editbuttonclicked && <EditForm/>}

</Box>
    </div>

    </>
  )
}

