import React, { useEffect } from 'react'
import './Dashboard.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '../../images/focal x.svg'
import userIcon from '../../images/abc.jpg'
export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            navigate('/login');
        }
    }, []);

    const handleLogOut = () => {
        window.localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <div className='dashboard'>
             <div className="dash-header">
               <img src={logo}/>
                <div >
                    <li onClick={handleLogOut} className='log-out' >LogOut</li>
                </div>
            </div>
            <div className="dash-app">
                <div className="side-bar">
                    <div className="content">
                        <div className="profile" >
                            <img src={userIcon} alt="" />
                            <h2>user name</h2>
                        </div>
                        <div className="sections">
                            <NavLink className='link' to='/dashboard/box'><i className="fa-solid fa-house"></i> Dashboard</NavLink>
                            <NavLink className='link' to='/dashboard/project'><i className="fa-solid fa-list-check"></i> Project</NavLink>
                            <NavLink className='link' to='/dashboard/message'><i className="fa-solid fa-message"></i> Message</NavLink>
                            <NavLink className='link'  to='/dashboard/types'><i className="fa-solid fa-building"></i> types</NavLink>
                            <NavLink className='link'  to='/dashboard/skills'><i className="fa-solid fa-building"></i> skills</NavLink>

                        </div>
                    </div>
                </div>

                <div className="side-bar-right">
                    <Outlet />

                </div>

            </div>


        </div>
    )
}
