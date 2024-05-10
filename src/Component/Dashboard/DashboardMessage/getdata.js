import axios from "axios"

export const getData= async() => {
    return await axios.get("http://127.0.0.1:8000/api/contact", {
        headers: {
          'Authorization': 'Bearer ' +  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzE1Mjc3MDU3LCJleHAiOjE3MTUyODA2NTcsIm5iZiI6MTcxNTI3NzA1NywianRpIjoiTkVVR0hUTFRVczNoak4wVCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.uBxXRzH8exKx8Cyb9WYTgjF6W2kESVdlKAA_UXpHldk",
           
        }
      })
        .then(response => {
         return response.data
        })
        .catch(error => {
          console.error(error);
        });
        
        
     

    }