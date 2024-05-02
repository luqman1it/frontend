import React from 'react'

function IconServices({icon,serve}) {
  return (
    <>
    <div className="icon-serve">
      {icon}
  </div>
  <span className='label-serv'>{serve}</span>
  </>
  )
}

export default IconServices