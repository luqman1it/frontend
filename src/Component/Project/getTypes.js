import axios from "axios";

export const getTypes = async () => {
  return await axios
    .get("http://127.0.0.1:8000/api/alltypes")
    .then((res) => {


      return res.data.types;
    })
    .catch((error) => {
      console.error(error);
    });
};


