import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useMemo, useState } from 'react'

import {getData} from './getdata'

export default function DashboardMessage() { 
  const [ messages,setMessages] = useState([]);
  useEffect(() => {getData().then (data => {
    setMessages(data);
   
  })},[]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'email', headerName: 'Email', width: 130 },
      { field:'subject', headerName: 'Subject', width: 130 },
      { field:'message', headerName: 'Message', width: 130 },
 
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
         sx={{textAlign : 'center'}}
        >

        </DataGrid>

      </Box>
    )
}
