import { Box, Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect,  useMemo,  useState } from 'react'


import {getData} from './getdata'
import axios from 'axios';



export default function DashboardMessage() {

  const [ messages,setMessages] = useState([]);
  

  


  useEffect(() => {
    getData().then((data) => {
      setMessages(data)
      getData();
      
         
      });
  },[]);

  

 
  const handleDelete = async (event,contact) => {


   console.log(contact.id);
    await axios.delete(`http://127.0.0.1:8000/api/DeleteContact/${contact.id}`,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    }).then(res => {
     
          localStorage.setItem('token', res.data.authorisation.token)
           
  })

  


}


  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'ID', width: 70,filterable:false},
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'email', headerName: 'Email', width: 130 },
      { field:'subject', headerName: 'Subject', width: 130 },
      { field:'message', headerName: 'Message', width: 300 },
      {
        field: "action",
        headerName: "Action",
        sortable: false,
        renderCell: (params) =>
          <Button  color='error' variant='contained' onClick={(e)=>handleDelete(e,params.row)}>
            Delete
          </Button>
      },
     
    
    ]}
  )

 

    return (
      <Box 
         sx={{ 
          height:400,
          width:'100%',
          }}
      >

        <Typography variant='h2' component='h2' sx={{textAlign : 'center' ,mt:'5px' ,mb:'20px' }}>
         Contact Messages
        </Typography>
      
       
        <DataGrid
        columns={columns}
        rows ={messages}
        rowsLoadingMode="server"
    >
    </DataGrid>
      
        </Box>
     
    )
}
