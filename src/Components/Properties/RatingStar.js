import React from 'react'
import  Rating  from '@mui/material/Rating';

const RatingStar = ({el}) => {
  return (
    <div>
        <Rating name="read-only" value={el.rating} readOnly />
    </div>
  )
}

export default RatingStar ;