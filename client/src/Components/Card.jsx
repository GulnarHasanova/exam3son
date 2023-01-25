import React from 'react'

function Card({data,index,handleDelete}) {
  return (
    <div className="col-3" key={index}>
    <img src={data.img}alt="sekil"  style={{height:270,width:255}} />
    <p>{data.name}</p>
    <p>{data.price}</p>
   
    <button className='btn btn-danger' onClick={()=>{handleDelete(data._id)}}>Delete</button>
  
 

   </div>
  )
}

export default Card