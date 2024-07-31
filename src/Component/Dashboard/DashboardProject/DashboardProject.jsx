import React, { useEffect, useMemo, useState } from 'react'
import './DashboardProject.css'
import { Box, Button, Pagination, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ShowForm from './ShowForm/ShowForm';
import { getData } from './getData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditProjectForm from './EditForm/EditProjectForm';



const DashboardProject = () => {
   const [buttonclicked,setButtonClicked]=useState(false);
   const [projects, setProjects] = useState([]);
   const [editbuttonclicked,setEditButtonClicked]=useState(false); 
   const navigate=useNavigate()



   useEffect(() => {
       getData().then((data) => {
       setProjects(data);
       });
   }, []);




 const handleDelete = async (event,project) => {


    await axios.delete(`http://127.0.0.1:8000/api/deleteprojects/${project.id}`,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    }).then(res => {

         if(res.status===200){
            getData().then((data) => {
                setProjects(data);
                });
          alert('deleted')
         }

  })   }

   const handleAdd=()=>{
  setButtonClicked(true)

    }


    const handleEdit=(id)=>{
      console.log(id)
      navigate(`/dashboard/EditProjectForm/${id}`)
     }



   const columns = useMemo(() => {
     return [
     { field: "id", headerName: "Project_ID", width: 70, filterable: false },
     { field: "name", headerName: "Project Name", width: 130 },
     { field: "description", headerName: "Description", width: 130 },
     { field: "img_url", headerName: "Image Url", width: 130 },
     { field: "link", headerName: "Link", width: 130 },
     { field: "type_id", headerName: "Type ID", width: 130 },

     {
        field: "Delete  ",
        headerName: "Delete",
        sortable: false,
        renderCell: (params) =>
          <Button  color='error' variant='contained' onClick={(e)=>handleDelete(e,params.row)}>
            Delete
          </Button>
      },
      {
        field: "Edit",
        headerName: "Edit",
        sortable: false,
        renderCell: (params) =>
          <Button  color='success' variant='contained' onClick={(e)=>handleEdit(params.row.id)}>
            Edit
          </Button>
      },
     ];
 });



  return (
<div className='ra-dashboard-projects' >


  <Box
        sx={{
          
            height: "560px",
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
            Add new Project
        </Button>
        <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: "center", mt: "0px", mb: "20px" }}
        >
            Projects
        </Typography>
        <DataGrid
        sx={{textAlign: "center"  }}
            columns={columns}
            rows={projects}
            pagination
           autoPageSize
            rowsLoadingMode="server"
            
        ></DataGrid>
        

        </>
      )}

{editbuttonclicked && <EditProjectForm/>}

</Box>


    </div>
  )
}

export default DashboardProject