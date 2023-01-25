import React from 'react'
import './Sec3.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from '../../Components/Card'

function Sec3() {

    const [datas,setDatas]=useState([])
    const [search,setSearch]=useState([])
    const [sort,setSort] = useState([])
    const [toogle,setToogle] = useState(true)
    const [test,setTest]= useState(true)

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


    const handleSearch =(e)=>{
      setTest(false)
      const searchdata= datas.filter(x=>x.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearch(searchdata)
    }
    

   
    

  return (
   <>
 <div className='col'style={{display:'flex',justifyContent:'center',marginTop:50}}> <input type='text' onChange={handleSearch} ></input>
  <button className='btn btn-primary bb' onClick={handleSort}>Filter</button></div>


  <div className="container c" style={{display:'flex',flexDirection:'column' ,textAlign:'center',marginTop:30}}>
  <p>Popular Item in the market</p>
  <h2>Trending Product</h2>
  
  <div className="row">
     
   

  
     
   

  {
   test===true ?
  datas.map((data,index) => (
   
    <Card key ={index} data={data} index={index} handleDelete={handleDelete}/>
   
  ))
  
  : search.map((data,index) => (
   
   <Card key ={index} data={data} index={index} handleDelete={handleDelete}/>
  
 ))
 }
  
    

    
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