import axios from "axios";

export const getProjects = async () => {
  return await axios
    .get("http://127.0.0.1:8000/api/allprojects")
    .then((res) => {

    //  console.log(res)

      return res.data.projects;
    })
    .catch((error) => {
      console.error(error);
    });
};


