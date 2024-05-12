import axios from "axios"

export const getData= async() => {
    return await axios.get("http://127.0.0.1:8000/api/contact" ,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    })
        .then(response => {
         
         return response.data.contacts
         
        })
        .catch(error => {
          console.error(error);
        });
        
        
        
     

    }