import React from 'react'
import './Sec5.scss'
import { FiMessageCircle } from 'react-icons/fi';

function Sec5() {
    return (

        <>   <div className='container' style={{display:'flex',flexDirection:'column',marginTop:126,paddingLeft:47}}>
        <p>Popular Item in the market</p>
        <h4>Latest News</h4>

         </div>
            <div className="container" style={{ display: 'flex',justifyContent:'space-around', }}>

               
                <div className="col-4" style={{ width: 360 }}>
                    <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="sekil" />

                    <div >
                        <div style={{ display: 'flex' }}> <p>By Admin</p>
                            <div style={{ marginLeft: 50 }}><FiMessageCircle /> comments</div></div>
                        <h4>The Richland Center Shooping News and weekly shooper</h4>
                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <button  className ="btn btn-link">Read More</button>
                    </div>




                </div>
                <div className="col-4" style={{ width: 360 }}>
                    <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="sekil" />

                    <div >
                        <div style={{ display: 'flex' }}> <p>By Admin</p>
                            <div style={{ marginLeft: 50 }}><FiMessageCircle /> comments</div></div>
                        <h4>The Richland Center Shooping News and weekly shooper</h4>
                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <button className ="btn btn-link">Read More</button>
                    </div>




                </div>
                <div className="col-4" style={{ width: 360 }}>
                    <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="sekil" />

                    <div >
                        <div style={{ display: 'flex' }}> <p>By Admin</p>
                            <div style={{ marginLeft: 50 }}><FiMessageCircle /> comments</div></div>
                        <h4>The Richland Center Shooping News and weekly shooper</h4>
                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                        <button  className ="btn btn-link">Read More</button>
                    </div>




                </div>

            </div>
        </>
    )
}

export default Sec5