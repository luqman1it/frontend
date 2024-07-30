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




const Project = () => {


  const [projects, setProjects] = useState([]);
  const [types, setTypes] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });

    getTypes().then((data) => {

      setTypes(data);
    });


  }, []);


  const handleFilter = (e) => {
      let word=e.target.value
      setCategory(word)

      if (word=='All'){
        getProjects().then(res => {
          setProjects(res);
        })

    }
   else{
      getProjects().then(res => {
        const filtered=res.filter(item=> item.type.name === word);
        setProjects(filtered)

      })}
    }



  return (
    <div id="project">
      <SectionHeader title="My Projects" />
      <div className="nav_filterbuttons">
         <button className="filterbutton" value='All' onClick={handleFilter}>
           All
          </button>
        {types?.map((type)=>{
          return (
          <button className="filterbutton" id={type.id} value={type.name} onClick={handleFilter}>
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
                <img src={`http://localhost:8000/storage/${project.img_url}`} />
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