import axios from "axios";

export const sendData = async (data) => {
  //console.log(data)
  return await axios.post('http://127.0.0.1:8000/api/addprojects', {
    name: data.name,
    description: data.description,
    img_url: data.img_url,
    link: data.link,
    type_id: data.type_id,
  },{
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      "content-type": "multipart/form-data",
    }
  })
  .then(function (response) {
    console.log(response);
    console.log("sent successfully")
  })
  .catch(function (error) {
    console.log(error);
  });
};