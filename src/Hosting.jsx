import React from 'react'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloudIcon from '@mui/icons-material/Cloud';
function Hosting() {
  return (
    <>
        <div className="dropdown">
            <div className="drop-list">
            

            


                <li to='/about'  className="drop-link"><StorageOutlinedIcon style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem -1rem 0rem 0rem "
                    }
                } />
                <span className='drop-link-content' >
                    <h1>Web Hosting</h1>
                    <p>For Small to medium website</p>
                </span>
                </li>
                


                <a href='https://www.google.co.in' target="_blank" >

            

                <li className="drop-link"><CloudIcon style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem -2.9rem 0rem -2rem "
                    }
                } />
                <span className='drop-link-content' >
                    <h1>Cloud Hosting</h1>
                    <p>For Large Scale Projects</p>
                </span>
                </li>
                </a>

                <a href='https://about.facebook.com' target="_blank" >

            

                <li className="drop-link"> <i style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem 0rem 0rem 1.6rem ",
                        padding:"0rem 1rem 0rem 0rem"
                    }
                } class="fa-brands fa-wordpress-simple"></i> 
                <span className='drop-link-content' >
                    <h1>Wordpress Hosting</h1>
                    <p>Optimized solution for Wordpress Hosting</p>
                </span>
                </li>
                </a>
                
            </div>
        </div>
    </>
  )
}

export default Hosting;
