import React from 'react'
import './Dashboard.css'
import { Link, Outlet } from 'react-router-dom'
import userProfile from '../../images/userProfile.jpg'
export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dash-header">
                <h2>Dashboard</h2>
                <div className="log-out">
                    <button>LogOut</button>
                </div>
            </div>
            <div className="dash-app">
                <div className="side-bar">
                    <div className="content">
                        <div className="profile" >
                            <img src={userProfile} alt="" style={{ width: '100px' }} />
                        </div>
                        <div className="sections">
                            <Link className='link' to='/dashboard/project'>Project</Link>
                            <Link className='link' to='/dashboard/message'>Message</Link>
                            <Link className='link' to='/dashboard'>Skills</Link>
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
