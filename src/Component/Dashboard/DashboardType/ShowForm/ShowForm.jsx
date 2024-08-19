import React, { useEffect, useState } from 'react'
import './ShowForm.css'
import axios from 'axios';
import DashboardType from '../../DashboardType/Types'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowForm = () => {


    const [closeForm,setCloseForm]=useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const [typename,setTypeName]=useState('')


    const showToastMessage = () => {
        toast.success("Project type  added successfully !");
      };

        const handleCloseForm = () =>{setCloseForm(true)}

        const handleSubmit = async (e) =>{
          e.preventDefault();
          setIsLoading(true);
         const formData=new FormData();
         formData.append('name', typename);
         await axios.post('http://127.0.0.1:8000/api/addtypes',
            formData
          , {

            headers: {
              Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }}
          ).then(res => {

        if (res.status === 200) {


                showToastMessage()
                    setTypeName('')
            setIsLoading(false)

        }})}

    return (
          <>
          {!closeForm ?

          <>
            <div className='dashboard-types'  onClick={handleCloseForm} />
            <div className='ra-show-form-type'  >



            <form  className='ra-form-type' onSubmit={(e)=> handleSubmit(e)} >

                  <input type="text" placeholder="project type Name" name="name" value={typename} onChange={(e) =>setTypeName( e.target.value)}/>

                  <button disabled={isLoading}  type="submit"> {isLoading ?'... Sending' : 'Submit'}</button>
                  <ToastContainer/>



              </form>
            </div> </>:  (  <DashboardType/>)}



              </>

        )
}

export default ShowForm
