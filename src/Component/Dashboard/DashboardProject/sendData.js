import axios from "axios";

export const sendData = async (data) => {

  return await axios.post("http://127.0.0.1:8000/api/addprojects", {

  return await axios.post('http://127.0.0.1:8000/api/addprojects', {

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

    console.log("send")

    console.log("sent successfully")

  })
  .catch(function (error) {
    console.log(error);
  });
};


