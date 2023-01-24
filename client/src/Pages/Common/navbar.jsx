import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss';

function Navbar() {
  return (
   <>
<nav>
    
        <div className='container'>
        <div><img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="logo" />
  
  </div>
  
        <div className='ul'>
        <ul>
                <li><Link to ="/">Home</Link></li>
                <li> <Link to ="about">About</Link></li>
                <li> <Link to ="add">Add</Link></li>
                <li> <Link to ="#">Blog</Link></li>
                 <li> <Link to ="#">Pages</Link></li>
            </ul>


        </div>


        </div>
    
   

</nav>

   </>
  )
}

export default Navbar