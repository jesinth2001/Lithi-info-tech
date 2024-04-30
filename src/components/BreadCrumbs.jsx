import React from 'react'
import "../css/breadcrumbs.css"
import banner from "../Assets/breadcrumb.jpg"

const BreadCrumbs = ({title}) => {
  return (
    <div className='bread-crumb' style={{backgroundImage:`url(${banner})`}}>
        <h3>{title}</h3></div>
  )
}

export default BreadCrumbs