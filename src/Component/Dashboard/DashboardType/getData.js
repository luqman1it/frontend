import axios from "axios";

export const getData = async () => {
  return await axios
    .get('http://127.0.0.1:8000/api/alltypes', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      return res.data.types;
    })
    .catch((error) => {
      console.error(error);
    });
};