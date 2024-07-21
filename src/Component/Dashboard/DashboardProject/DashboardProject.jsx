import React, { useEffect, useMemo, useState } from 'react'
import './DashboardProject.css'
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ShowForm from './ShowForm/ShowForm';
import { getData } from '../../../../../DashboardProject/getData';




const DashboardProject = () => {
   const [showform,setShowForm]=useState(false);
   const [buttonclicked,setButtonClicked]=useState(true); 
   const [projects, setProjects] = useState([]);
   const [deletedRows, setDeletedRows] = useState([]);

   useEffect(() => {
       getData().then((data) => {
       setProjects(data);
       });
   }, []);


   const columns = useMemo(() => {
     return [
     { field: "id", headerName: "Project_ID", width: 70, filterable: false },
     { field: "name", headerName: "Project Name", width: 130 },
     { field: "description", headerName: "Description", width: 130 },
     { field: "img_url", headerName: "Image Url", width: 130 },
     { field: "link", headerName: "Link", width: 130 },
     { field: "type_id", headerName: "Type ID", width: 130 },
     ];
 });

 const handleDelete = () => {
    const updatedProjects = projects.filter(
    (project) => !deletedRows[deletedRows.length - 1].includes(project)
    );
    setProjects(updatedProjects);
    setDeletedRows([]);
    console.log("updated", updatedProjects);
};

    const handleAdd=()=>{
  setShowForm(true)
  setButtonClicked(false)
    }


  return (
<>

  

 

{buttonclicked ? 
  <Box
        sx={{
            height: 400,
            width: "100%",
        }}
        >
      
     <Button
            className='add-project-btn'
            color="success"
            variant="contained"
            onClick={handleAdd}
            sx={{ textAlign: "center", alignItems: "center" }}
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
            columns={columns}
            rows={projects}
            checkboxSelection
            onRowSelectionModelChange={(selectionModel) => {
            const rowIds = selectionModel.map((rowId) => parseInt(String(rowId)));
            const rowsToDelete = projects.filter((row) =>
                rowIds.includes(row.id)
            );
            setDeletedRows([...deletedRows, rowsToDelete]);
            }}
        ></DataGrid>

        <Button
            color="error"
            variant="contained"
            onClick={handleDelete}
            sx={{ textAlign: "center", mt: "10px", alignItems: "center" }}
        >
            Delete
        </Button>
        </Box> : ''}
   

  {showform ?  
        <ShowForm/>
      : ''}
       
    
   
    </>
  )
}

export default DashboardProject