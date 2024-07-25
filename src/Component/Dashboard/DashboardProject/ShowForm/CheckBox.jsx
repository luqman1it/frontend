import React, { useState } from 'react'
import './CheckBox.css'

const CheckBox = ({ label,checked }) => {
    const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="ra-checkbox-wrapper">
      <label>
        <input type="checkbox" checked={isChecked}  onChange={() => setIsChecked((prev) => !prev)}/>
        <p>{label}</p>
       
      </label>
    </div>
  )
}

export default CheckBox