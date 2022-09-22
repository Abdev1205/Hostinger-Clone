import React from 'react'
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import CloudIcon from '@mui/icons-material/Cloud';
function Domain() {
  return (
    <>
        <div className="dropdown">
            <div className="drop-list">


                <li className="drop-link"> <i style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem -1rem 0rem 0rem "
                    }
                } class="fa-solid fa-earth-americas"></i> 
                <span className='drop-link-content' >
                    <h1>Domain Name Search</h1>
                    <p>Find the perfect Domain name</p>
                </span>
                </li>

                <li className="drop-link"><TravelExploreOutlinedIcon style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem -2.9rem 0rem -2rem "
                    }
                } />
                <span className='drop-link-content' >
                    <h1>WHOIS Lookup</h1>
                    <p>find WHOIS information</p>
                </span>
                </li>
                
                <li className="drop-link"> <i style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem 0rem 0rem 1.6rem ",
                        padding:"0rem 1rem 0rem 0rem"
                    }
                } class="fa-solid fa-money-bill-transfer"></i> 
                <span className='drop-link-content' >
                    <h1>Domain Transfer</h1>
                    <p>Want to transfer doamin to Hostinger</p>
                </span>
                </li>
                
            </div>
        </div>
    </>
  )
}

export default Domain
