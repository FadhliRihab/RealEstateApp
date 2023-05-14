import React from 'react'
import { data } from '../data'
import PropertieCard from './PropertieCard'
import "./Properties.css"
import Navbar from '../Navbar/Navbar'

const Properties = () => {
  return (
    <div >
    <Navbar  />
   <div>
   {data.map((el)=>
    <div  style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "220px",
      marginLeft:"2%",
      backgroundColor:"white"
    }} >
    <PropertieCard  key={el.id} el={el}  />
    </div>
    
   
        
)}
   </div>
    </div>
  )
}

export default Properties
