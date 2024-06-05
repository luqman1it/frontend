import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Project.css";

import { projects } from "./projectsData.js";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

//declaring variables

export default function Project() {
  const [category, setCategory] = useState([projects]);
  useEffect(() => {
    projects().then((data) => {
      setCategory(data);
    });
  }, []);

<<<<<<< HEAD
  const [category, setCategory] = useState([]);



  useEffect(() => {
    
    projects().then((data) => {
      setCategory(data);
    });
  }, []);



=======
>>>>>>> f6c81485ad3b147ed925bade7d3eba6948fbd7c6
  const handleFilter = (e) => {
    let word = e.target.value;
    console.log(word);

<<<<<<< HEAD
    
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
      
;       
}

if(word=='Graphics'){
  projects().then(res => {
    console.log(res)
    const filtered=res.filter(item=> item.type.name === "Graphics");
    setCategory(filtered)
    console.log(filtered)
  })
;       
}


if(word=='Apps'){
  projects().then(res => {
    console.log(res)
    const filtered=res.filter(item=> item.type.name === "Apps");
    setCategory(filtered)
    console.log(filtered)
  })
;          
}
=======
    if (word == "All") {
      setCategory(projects);
    }

    if (word == "WebDesign") {
      const filtered = projects.filter((item) => item.type === "WebDesign");
      setCategory(filtered);
      console.log(filtered);
    }

    if (word == "Graphics") {
      const filtered = projects.filter((item) => item.type === "Graphics");
      setCategory(filtered);
      console.log(filtered);
    }

    if (word == "Apps") {
      const filtered = projects.filter((item) => item.type === "Apps");
      setCategory(filtered);
      console.log(filtered);
    }
>>>>>>> f6c81485ad3b147ed925bade7d3eba6948fbd7c6
  };

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
<<<<<<< HEAD
          {category?.map((project) => (
=======
          {/* {category.map((project) => (
>>>>>>> f6c81485ad3b147ed925bade7d3eba6948fbd7c6
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
<<<<<<< HEAD
          ))}
=======
          ))} */}
>>>>>>> f6c81485ad3b147ed925bade7d3eba6948fbd7c6
        </Swiper>
      </div>
    </div>
  );
}
