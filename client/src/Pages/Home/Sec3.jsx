import React from 'react'
import './Sec3.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Sec3() {

    const [datas,setDatas]=useState([])
    const [search,setSearch]=useState([])
    const [sort,setSort] = useState([])
    const [toogle,setToogle] = useState(true)

    useEffect(()=>{axios.get("http://localhost:4000/pros")
    .then(res=>{
        setDatas(res.data)
    })

    },[])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:4000/pros/${id}`)
        const deleteItem = datas.filter(x=>x._id!==id)
        setDatas(deleteItem)
        console.log(id);
    }

    const handleSort=()=>{
        setToogle(!toogle)
        if(toogle==true){
        setSort(datas.sort((a,b)=> a.price-b.price))}
        else{
            setSort(datas.sort((a,b)=> b.price-a.price))
        }
    }
    

   
    

  return (
   <>
 <div className='col'style={{display:'flex',justifyContent:'center',marginTop:50}}> <input type='text' onChange={(e)=>{setSearch(e.target.value)}} ></input>
  <button className='btn btn-primary bb' onClick={handleSort}>Filter</button></div>


  <div className="container c" style={{display:'flex',flexDirection:'column' ,textAlign:'center',marginTop:30}}>
  <p>Popular Item in the market</p>
  <h2>Trending Product</h2>
  
  <div className="row">
     
   

  


  {datas.filter(data=>search ?? data.name.toLowerCase().includes(search?.toLowerCase())).map((data,index) => (
    <div className="col-3" key={index}>
     <img src={data.img}alt="sekil"  style={{height:270,width:255}} />
     <p>{data.name}</p>
     <p>{data.price}</p>
    
     <button className='btn btn-danger' onClick={()=>{handleDelete(data._id)}}>Delete</button>
   
  

    </div>
  ))}
    

    
  </div>


  </div>

  <div className='sec4' style={{marginTop:50}}>
  <div className="col-3" style={{display:'flex',flexDirection:'column',textAlign:'center',marginLeft:229,paddingTop:130}}>
    <h1>Up To 50% Off</h1>
    <h4>Winter Sale</h4>
    <p>Him she'd let them sixth saw light

Shop Now</p>
<button className='btn btn-primary del' >Show Now</button>
  </div>
  </div>
  
   
   </>
  )
}

export default Sec3