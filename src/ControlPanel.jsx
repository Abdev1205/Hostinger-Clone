import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
function Flexible() {
    return (
        <>
            <h1 className='control-panel-main-heading' >User-Friendly Control Panel
</h1>
            <div className="control-panel-main">
                <div className="control-panel-row">


                    <div className="control-panel-content-1">

                        <div className="control-panel-header">
                        <PersonIcon style={{
                            color: "rgb(43, 16, 110)",
                            fontSize: "2.5rem",
                            margin: "0rem 0rem 1rem 0rem",
                        }} />
                            <h1>Ease of Use</h1>
                        </div>
                        <div className="control-panel-para">
                            <p>Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development.</p>

                        </div>

                        <div className="control-panel-header">
                        <TrendingUpIcon style={{
                            color: "rgb(43, 16, 110)",
                            fontSize: "2.5rem",
                            margin: "0rem 0rem 1rem 0rem",
                        }} />
                            <h1>Powerful</h1>
                        </div>
                        <div className="control-panel-para">
                            <p>A wide variety of tools to satisfy advanced user and website developer needs.</p>

                        </div>
                        <div className="control-panel-header">
                        <i style={
                    {
                        color:"rgb(43, 16, 110)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"0rem 0rem 1rem 0rem ",
                        padding:"0rem 1rem 0rem 0rem"
                    }
                } class="fa-brands fa-wordpress-simple"></i> 
                            <h1>WordPress Optimized</h1>
                        </div>
                        <div className="control-panel-para">
                            <p>Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization  stack and LiteSpeed cache.</p>

                        </div>

                    </div>



                    <div className="control-panel-video">
                        <video autoPlay muted src="https://assets.hostinger.com/videos/homepage2020/user-friendly-cp-2020-7ab2c70b24.mp4"></video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flexible
