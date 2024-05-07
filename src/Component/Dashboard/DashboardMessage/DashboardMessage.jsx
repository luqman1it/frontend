import { Box, Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useMemo, useState } from 'react'

import {getData} from './getdata'


export default function DashboardMessage() { 
  const [ messages,setMessages] = useState([]);
  const [deletedRows,setDeletedRows] =useState([])

  useEffect(() => {getData().then (data => {
    setMessages(data);
   
  })},[]);

 


  const handleDelete = ( ) => {
    console.log(deletedRows)
  }



  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'ID', width: 70,filterable:false},
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'email', headerName: 'Email', width: 130 },
      { field:'subject', headerName: 'Subject', width: 130 },
      { field:'message', headerName: 'Message', width: 130 },
      {field :'Action' ,renderCell:() =>{
        return(
          <Button
          color='primary'
          variant="contained"

          onClick={
          handleDelete
          }>Delete</Button>
        )
      }}
      
 
    ]

  })


 


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
         rows={messages}
         checkboxSelection
         onRowSelectionModelChange={(selectionModel) => {
          const rowIds = selectionModel.map(rowId => parseInt(String(rowId)));
          const rowsToDelete = messages.filter(row => rowIds.includes(row.id));
          console.log(rowsToDelete)
          setDeletedRows([...deletedRows,rowsToDelete]);
          console.log(deletedRows)
  }}
        >
      
        </DataGrid>

      </Box>
    )
}
