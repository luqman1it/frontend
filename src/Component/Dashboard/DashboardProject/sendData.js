import axios from "axios";

export const sendData = async (data) => {
<<<<<<< HEAD
  return await axios.post("http://127.0.0.1:8000/api/addprojects", {
=======
  return await axios.post('http://127.0.0.1:8000/api/addprojects', {
>>>>>>> f6c81485ad3b147ed925bade7d3eba6948fbd7c6
    name: data.name,
    description: data.description,
    img_url: data.imgUrl,
    link: data.link,
    type_id: data.typeId,
  },{
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
  })
  .then(function (response) {
    console.log(response);
<<<<<<< HEAD
    console.log("send")
=======
    console.log("sent successfully")
>>>>>>> f6c81485ad3b147ed925bade7d3eba6948fbd7c6
  })
  .catch(function (error) {
    console.log(error);
  });
};


