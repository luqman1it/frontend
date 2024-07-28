import React, { useEffect, useState } from 'react'
import './DashboardBox.css'
import axios from 'axios';
export default function DashboardBox() {
    const[data,setData]=useState({projects:'',skills:'',Messages:''});

    
  useEffect(() => {
    const CountsData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/count`, {
         
        });
        const counts= response.data.count;
        console.log(counts);
        setData(counts);
        
  
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
   
  
    CountsData();
  }, []);
  
  
  




    return (
        <div className='dash-box'>
            <div className="box">
                <h1>Projects</h1>
                <span>{data.projects}</span>
            </div>
            <div className="box">
                <h1>Skilles</h1>
                <span>{data.skills}</span>
            </div>
            <div className="box">
                <h1>Message</h1>
                <span>{data.Messages}</span>
            </div>
        </div>
    )
}
