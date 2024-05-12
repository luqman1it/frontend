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

  const handleFilter = (e) => {
    let word = e.target.value;
    console.log(word);

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
          {/* {category.map((project) => (
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
          ))} */}
        </Swiper>
      </div>
    </div>
  );
}
