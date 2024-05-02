import { FaCss3, FaFileCode, FaHtml5, FaLaptop, FaPaintBrush } from 'react-icons/fa';
import SectionHeader from '../SectionHeader/SectionHeader'
import "./About.css";
import IconServices from './IconServices/IconServices';
import { BsWordpress } from 'react-icons/bs';

export default function About() {
    const iconServices=[{
        icon: <FaFileCode/>,
        serve:"php Code",
    },
    {
        icon: <FaLaptop/> ,
        serve:"Front End",
    },
    {
        icon: <FaPaintBrush />,
        serve:"Web Design",
    },
    {
        icon:  <FaHtml5/>,
        serve:"Html5",
    }

,
{
    icon:  <BsWordpress />,
    serve:"Wordpress",
}

,
{
    icon:   <FaCss3 />,
    serve:"Css3",
},

]
    return (
        <div className='km-about-container container padding-section'>
<SectionHeader title="About Me"/>
                <div className="km-container-row-About">
                    <div className="col-6-about">

                    <p>We are Biobo, our strategists will help you set an objective and choose your tools, developing a plan that is custom built for your business. We make sure to provides unlimited collection of options, elements & creative shortcode lists. All Whole elements can be easily styled, edited and modified in little easy steps to save your time!
                         </p>
                         <ul className="info-about">
        
        <li>
            <strong>
                FullName  
            </strong>
            <span >   Smith Robert </span>
        </li>
        <li>
            <strong>
                Age  
            </strong>
           <span>25</span> 
        </li>
        <li>
            <strong>
                Address  
            </strong>
           <span> Syria</span> 
        </li>
        <li>
            <strong>
                Phone  
            </strong>
            <span>  0985432111</span>
           
        </li>
        <li>
            <strong>
                Email  
            </strong>
            <span>    focal@Fullstack.com</span>
        </li>
    </ul>
                    </div>
                   
                         <div className="col-6-about  ">
                         
                         <div className="row-icon">
                            {iconServices.map((e)=>{
                                return(
<div className="col-4-icon">
                           <IconServices icon={e.icon} serve={e.serve}/>
                        </div>
                                )
                            })}
                            
                            </div>
                         
                         </div>   
                           
                         </div>
                </div>
            
    )
}
