import axios from "axios";

export const projects = async () => {
  return await axios
    .get("http://127.0.0.1:8000/api/allprojects")
    .then((res) => {

      return res.data.projects;
    })
    .catch((error) => {
      console.error(error);
    });
};

// {
//     "name" : "Web Design Project",
//     "description" : "That may be true, but today, almost half a century later, Gary Eagle says it was only part of the story..",
//     "img_url" : "../src/assets/img-por1.jpg",
//     "link" : "https://www.google.com",
//     "type":"WebDesign"
// }
