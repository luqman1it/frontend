import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Project.css'

import data from './projectsData.json'


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


//declaring variables 

const filter_buttons_names=['All','WebDesign','Apps','Graphics'];

export default function Project() {

    const [category,setCategory]=useState(filter_buttons_names);
    const handleFilter = (e) =>{
        let word=e.target.value;

        if (word=='All'){
            setCategory(filter_buttons_names);
        }

        if(word=='WebDesign'){
            const filtered=filter_buttons_names.filter(item => item.name === 'Web Design');
            setCategory(filtered)
;        }
         if(word=='Graphics'){
           const filtered=filter_buttons_names.filter(item => item.name === 'Graphic');
            setCategory(filtered)
                 }
         if(word=='App'){
          const filtered=filter_buttons_names.filter(item => item.name === 'App');
           setCategory(filtered)
                          }
    }
    return (

     <>
    <div className='nav_filterbuttons'>
        {filter_buttons_names.map((button,buttonId)=>{
            return(
                <button key={buttonId} value={button} onClick={handleFilter} className="filterbutton">{button}</button>
            )
        })}
 

    </div>
    <div className="projectswiper">
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
    
      {data.projects.map((project) => (
        
        <div key={project.id} className='projectcard'>
         
        <SwiperSlide>

          <img src={project.img_url} />
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <button>github</button>
        </SwiperSlide>
        
      

        </div>
        
      ))}
      </Swiper>
    </div>

      
       


  
     </>
        
    )
}
