import { FaCss3, FaFileCode, FaHtml5, FaLaptop, FaPaintBrush } from 'react-icons/fa';
import SectionHeader from '../SectionHeader/SectionHeader'
import "./About.css";
import IconServices from './IconServices/IconServices';
import { BsWordpress } from 'react-icons/bs';

export default function About() {
    const iconServices = [{
        icon: <FaFileCode />,
        serve: "php Code",
    },
    {
        icon: <FaLaptop />,
        serve: "Front End",
    },
    {
        icon: <FaPaintBrush />,
        serve: "Web Design",
    },
    {
        icon: <FaHtml5 />,
        serve: "Html5",
    }

        ,
    {
        icon: <BsWordpress />,
        serve: "Wordpress",
    }

        ,
    {
        icon: <FaCss3 />,
        serve: "Css3",
    },

    ]
    return (
        <div id='about' className='km-about-container container padding-section'>
            <SectionHeader title="About Me" />
            <div className="km-container-row-About">
                <div className="col-6-about">

                    <p>As a team of full-stack developers at X6 Full Stack, we excel in creating bespoke solutions for your programming needs. With our strategic approach, we ensure clear objectives are set and the most suitable tools are chosen. Our expertise covers the entire development spectrum, from inception to execution, guaranteeing tailored plans that align with your business goals.
                    </p>
                    <ul className="info-about">

                        <li>
                            <strong>
                                FullName
                            </strong>
                            <span >  X6 Full Stack </span>
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
                        {iconServices.map((e) => {
                            return (
                                <div className="col-4-icon">
                                    <IconServices icon={e.icon} serve={e.serve} />
                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>
        </div>

    )
}
