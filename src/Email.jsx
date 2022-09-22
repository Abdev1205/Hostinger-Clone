import React from 'react'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloudIcon from '@mui/icons-material/Cloud';
import { padding } from '@mui/system';
function Email() {
  return (
    <>
        <div className="dropdown">
            <div className="drop-list">


                <li className="drop-link"> <i style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem 0rem 0rem 0rem ",
                        
                    }
                } class="fa-brands fa-google"></i> 
                <span className='drop-link-content' >
                    <h1>Google Workspace Email Hosting</h1>
                    <p>Get custom Email and 30 gb of storage</p>
                </span>
                </li>

                <li className="drop-link" style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        
                        margin:".5rem 0rem 0rem 0rem "
                    }
                }> @
                <span className='drop-link-content' >
                    <h1>Hostinger Email Hosting</h1>
                    <p style={{
                        color:"rgb(43, 22, 63)",
                    }} >Promote Your Business with every outreach</p>
                </span>
                </li>

                
                
            </div>
        </div>
    </>
  )
}

export default Email
