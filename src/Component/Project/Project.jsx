import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import { projects } from "./projectsData.js";

import SectionHeader from "../SectionHeader/SectionHeader.jsx";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Project.css";




const Project = () => {
  const [category, setCategory] = useState([projects]);

  useEffect(() => {
    projects().then((data) => {
      setCategory(data);
    });
  }, []);


  const handleFilter = (e) => {
    let word = e.target.value;
    

    
          if (word=='All'){
            projects().then(res => {
              setCategory(res);
              console.log(res)
            })
          
        }

          if(word=='WebDesign'){
            projects().then(res => {
              console.log(res)
              const filtered=res.filter(item=> item.type.name === "WebDesign");
              setCategory(filtered)
              console.log(filtered)
            })
              
            
        }

        if(word=='Graphics'){
          projects().then(res => {
            console.log(res)
            const filtered=res.filter(item=> item.type.name === "Graphics");
            setCategory(filtered)
            console.log(filtered)
          })
            
        }


        if(word=='Apps'){
          projects().then(res => {
            console.log(res)
            const filtered=res.filter(item=> item.type.name === "Apps");
            setCategory(filtered)
            console.log(filtered)
          })
                
        }
  
      }

  return (
    <div id="project">
      <SectionHeader title="My Projects" />
      <div className="nav_filterbuttons">
        <button className="filterbutton" value="All" onClick={handleFilter}>
          All
        </button>
        <button
          className="filterbutton"
          value="WebDesign"
          onClick={handleFilter}
        >
          WebDesign
        </button>
        <button
          className="filterbutton"
          value="Graphics"
          onClick={handleFilter}
        >
          Graphics
        </button>
        <button className="filterbutton" value="Apps" onClick={handleFilter}>
          Apps
        </button>
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

          {category?.map((project) => (


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