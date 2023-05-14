import React from 'react'
import "./Properties.css"

const PropertieCard = ({el}) => {
  return (
    <div>
    <div className="propContainer">
    <div className="box">
      <div className="imgBox">
        <img src={el.image} alt="" />
      </div>
      <div className="content">
        <h2>{el.adress}</h2><br />
        <h2>{el.price}</h2>
        <p>{el.description}</p>
      </div>
    </div>
   </div>
   </div>
  )
}

export default PropertieCard
