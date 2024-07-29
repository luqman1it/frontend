import React, { useEffect, useState,useMemo } from 'react'
import "./type.css"
import {getData} from  './getData'
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';
import ShowForm from './ShowForm/ShowForm';


export default function Types() {
    const navigate=useNavigate()
    const [types,setTypes] = useState([])
    const [get,setget] = useState(true)
    const [buttonclicked,setButtonClicked]=useState(false); 
    const [editbuttonclicked,setEditButtonClicked]=useState(false); 



    const handleAdd=()=>{setButtonClicked(true) }

    const handleEdit=(id)=>{
      navigate(`/dashboard/editType/${id}`)
     }


     const handleDelete = async (event,type) => {


      await axios.delete(`http://127.0.0.1:8000/api/deletetype/${type.id}`,{
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      }).then(res => {

           if(res.status===200){
              getData().then((data) => {
                  setTypes(data);
                  });
            alert('deleted')
           }

    })
   }


    // const show=(id)=>{
    //  navigate(`/dashboard/showType/${id}`)
    // }
    // const update=(id)=>{
    //   navigate(`/dashboard/editType/${id}`)
    // }
    // const deleteType=(id)=>{
    //   axios.delete(`http://127.0.0.1:8000/api/deletetype/${id}`,{
    //     headers:{
    //       Authorization: `Bearer ${window.localStorage.getItem('token')}`
    //   }
    //   }).then(res=>{console.log(res.data);
    //     setget((prev)=>!prev)
    //   }).catch(error=>console.log(error))
    //   }

          useEffect(() => {
            getData().then((data) => {
            setTypes(data);
            });
        }, []);


    const columns = useMemo(() => {
      return [
      { field: "id", headerName: "Project Type_ID", width: 70, filterable: false },
      { field: "name", headerName: "Project Type Name", width: 130 },
      
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
    <div className="section-dashboard-types">
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
            Add new Type
        </Button>
        <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: "center", mt: "0px", mb: "20px" }}
        >
            Project Types
        </Typography>
        <DataGrid
        sx={{textAlign: "center"  }}
            columns={columns}
            rows={types}
            pagination
            autoPageSize
             rowsLoadingMode="server"

        ></DataGrid>



        </>


)}

{editbuttonclicked && <EditForm/>}

</Box>
    </div>

    </>  )}



