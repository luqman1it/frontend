import { Box, Button, Typography } from '@mui/material'
import { DataGrid, useGridApiRef } from '@mui/x-data-grid'
import { useEffect,  useMemo,  useState } from 'react'


import {getData} from './getdata'
import axios from 'axios';
import ShowMessageForm from './ShowMessageForm'
import { AiOutlineCloseCircle } from 'react-icons/ai';



export default function DashboardMessage() {

  const [ messages,setMessages] = useState([])
  const [ message,setMessage] = useState('')
  const [ showmessage,setShowMessage] = useState(false)
  


  useEffect(() => {
    getData().then((data) => {
      setMessages(data)
         
      });
  },[]);

   

  const handleShowMessage =(e,contact) =>{
    setShowMessage(true)
     setMessage(contact.message)
  }

 
  const handleDelete = async (event,contact) => {
     
    
    await axios.delete(`http://127.0.0.1:8000/api/DeleteContact/${contact.id}`,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    }).then(res => {
     
         if(res.status===200){
          getData().then((data) => {
            setMessages(data)
               
            });
          alert('deleted')
         }
           
  })

  


}


  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'ID', width: 70,filterable:false},
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'email', headerName: 'Email', width: 130 },
      { field:'subject', headerName: 'Subject', width: 130 },
      {
        field: "message",
        headerName: "Message",
        width:180,
        renderCell: (params) =>
         <span onClick={(e)=>handleShowMessage(e,params.row)}><i>click to see message</i></span>
      },
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
         sx={{ display:'flex',
          flexDirection:'column',
          position:'relative',
          height:560,
          width:'100%',
          }}
          
      >

        <Typography variant='h2' component='h2' sx={{textAlign : 'center' ,mt:'5px' ,mb:'20px' }}>
         Contact Messages
        </Typography>
      
       
        <DataGrid
      
        sx={{width:'94%'}}
        columns={columns}
        rows ={messages}
        rowsLoadingMode="server"
        pagination
        autoPageSize
      
    >
    </DataGrid>
    {showmessage?<>
      <ShowMessageForm message={message}/>
    <div style={{position:'absolute',transform:"translate(490px,130px)"}}> 
      <AiOutlineCloseCircle style={{width:'140px',color:'black',cursor:'pointer'}} onClick={()=>setShowMessage(false)}/>
    </div>
    </> :''}
        </Box>

       
     
    )
}
