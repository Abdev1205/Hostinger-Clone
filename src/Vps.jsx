import React from 'react'
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
function Vps() {
  return (
    <>
        <div className="dropdown">
            <div className="drop-list">


                <li className="drop-link"><i style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem -1rem 0rem 0rem "
                    }
                }  class="fa-solid fa-server"></i> 
                <span className='drop-link-content' >
                    <h1>VPS Hosting</h1>
                    <p>Dedicated resources to scale</p>
                </span>
                </li>

                <li className="drop-link"> <ComputerOutlinedIcon style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem -2.9rem 0rem 2rem "
                    }
                } />
                <span style={{
                    margin:"-2rem -3rem 0rem 0rem "
                }} 
                className='drop-link-content' >
                    <h1 style={{
                        margin:"0rem 0rem 0rem 5rem ",
                    }} >CyberPanel Hosting</h1>
                    <p  style={{
                        margin:"0rem 0rem -2rem 5rem ",
                    }}>Control panel with open/lite speed web server</p>
                </span>
                </li>
                
                <i class="fa-light fa-dagger"></i>
                <li className="drop-link"><ConstructionOutlinedIcon style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"1rem 0rem 0rem 1.6rem ",
                        padding:"0rem 1.2rem 0rem 0rem"
                    }
                } />   
                <span style={{
                    margin:"0rem -4.3rem 0rem 0rem "
                }} className='drop-link-content' >
                    <h1>Minecraft server Hosting</h1>
                    <p>Share your Minecraft experience</p>
                </span>
                </li>
                
            </div>
        </div>
    </>
  )
}

export default Vps
