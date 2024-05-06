import React from 'react'
import './DashboardBox.css'
export default function DashboardBox() {
    return (
        <div className='dash-box'>
            <div className="box">
                <h1>Projects</h1>
                <span>100</span>
            </div>
            <div className="box">
                <h1>Message</h1>
                <span>100</span>
            </div>
        </div>
    )
}
