import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import { getProjects } from "./projectsData.js";

import SectionHeader from "../SectionHeader/SectionHeader.jsx";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Project.css";
import { getTypes } from "./getTypes.js";
import axios from "axios";




const Project = () => {


  const [projects, setProjects] = useState([]);
  const [types, setTypes] = useState([]);
  const [filter,setfilter]=useState([])
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getProjects = async () => {



try {
  let apiUrl = `http://127.0.0.1:8000/api/allprojects${category !== 'All' ? `?type=${category}` : ''}`;

  const response = await axios.get(apiUrl);
  setProjects(response.data.projects);
} catch (error) {
  console.error(error);
}
};





  getTypes().then((data) => {

      setTypes(data);
    });
console.log(category);
getProjects();

  }, [category]);

// const filterfunction=(event)=>{
//     setfilter(projects.filter(d=>d.type_id==event.target.value))
// }

//   const handleFilter = (e) => {
//     let word=e.target.value
//     setCategory(word)

//     if (word=='All'){
//       getProjects().then(res => {
//         setProjects(res);
//       })

// getProjects()

//   }



//   }

  return (
    <div id="project">
      <SectionHeader title="My Projects" />
      <div className="nav_filterbuttons">
         <button className="filterbutton"  onClick={()=>setCategory('All')}>
           All
          </button>
        {types?.map((type)=>{
          return (
          <button className="filterbutton"  name="type"id={type.id} value={type.id} onClick={(e)=>setCategory(e.target.value)}>
            {type.name}
          </button>)
        })}

       </div>
      <div className="projectswiper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >


          {projects?.map((project) => (


            <div key={project.id} className="projectcard">
              <SwiperSlide>
                <img src={`http://localhost:8000/storage/${project.img_url}`}  height="60%"/>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href={project.link}>
                  <button> github</button>
                </a>
              </SwiperSlide>
            </div>

          ))}




        </Swiper>
      </div>
    </div>
  );
}

export default Project
