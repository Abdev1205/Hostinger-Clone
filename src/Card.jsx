import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Tooltip1Info, Tooltip2Info, Tooltip3Info, Tooltip4Info, Tooltip5Info, Tooltip6Info, Tooltip7Info } from "./TooltipInfo";
import HelpIcon from '@mui/icons-material/Help';

function Card() {
    return (
        <>
            <div className="card-main">
                <div className="card">
                    <div className="card-heading">

                        <h1>Best Web Hosting</h1>
                    </div>
                    <div className="card-content">


                        <div className="card-content-left">
                            <h1>
                                <span>
                                    <i style={{
                                        color: "rgb(38, 186, 38)",
                                        padding: "0px 7px 0px 0px ",
                                        fontSize: "16px"
                                    }} class="fa-solid fa-check"></i>

                                </span>
                                <strong
                                    style={
                                        {
                                            fontWeight: "bold"
                                        }
                                    }>Unmetered </strong>
                                traffic (Unlimited GB)
                                <Tooltip title={<Tooltip1Info />} arrow >
                                    <HelpIcon style={{
                                        color: "rgb(105, 56, 228)",
                                        fontSize: "20px",
                                        margin: "0px 0px -4px 3px"
                                    }} />

                                </Tooltip>
                            </h1>

                            <h1>
                                <span>
                                    <i style={{
                                        color: "rgb(38, 186, 38)",
                                        padding: "0px 7px 0px 0px ",
                                        fontSize: "16px"
                                    }} class="fa-solid fa-check"></i>

                                </span>
                                <strong style={
                                    {
                                        fontWeight: "bold"
                                    }
                                } >100 </strong>
                                Websites
                            </h1>

                            <h1>
                                <span>
                                    <i style={{
                                        color: "rgb(38, 186, 38)",
                                        padding: "0px 7px 0px 0px ",
                                        fontSize: "16px"
                                    }} class="fa-solid fa-check"></i>

                                </span>
                                <strong
                                    style={
                                        {
                                            fontWeight: "bold"
                                        }
                                    }>100 GB </strong>
                                SSD Storage
                                <Tooltip title={<Tooltip2Info />} arrow >
                                    <HelpIcon style={{
                                        color: "rgb(105, 56, 228)",
                                        fontSize: "20px",
                                        margin: "0px 0px -4px 3px"
                                    }} />

                                </Tooltip>
                            </h1>

                            <h1>
                                <span>
                                    <i style={{
                                        color: "rgb(38, 186, 38)",
                                        padding: "0px 7px 0px 0px ",
                                        fontSize: "16px"
                                    }} class="fa-solid fa-check"></i>

                                </span>
                                <strong
                                    style={
                                        {
                                            fontWeight: "bold"
                                        }
                                    }>Free </strong>
                                Weekly Backups
                                <Tooltip title={<Tooltip3Info />} arrow >
                                    <HelpIcon style={{
                                        color: "rgb(105, 56, 228)",
                                        fontSize: "20px",
                                        margin: "0px 0px -4px 3px"
                                    }} />

                                </Tooltip>
                            </h1>
                        </div>

                        <div className="vertical-line-3">
                            <div className="card-price">


                                <div className="hero-price">
                                    <span  ><i className='hero-price-icon' class="fa-solid fa-indian-rupee-sign"></i></span> 149.00
                                    <span style={{
                                        fontSize: "1.1rem",
                                        margin: '2rem .4rem 0rem 0rem ',
                                        color: "rgb(46, 22, 106)"
                                    }} >/month</span>


                                </div>
                                <div className="get-started">
                                    <button  >Select</button>
                                </div>
                            </div>



                            <div style={{
                                height: "200px",
                                width: "1px",
                                margin: "-168px 0px 5px 400px",
                                borderRadius: "1px",

                                backgroundColor: "rgba(65, 34, 67, 0.678)",
                            }} className="vertical-line-1"></div>


                            <div style={{
                                height: "1px",
                                width: "1120px",

                                margin: "5px 0px 0px -355px",
                                borderRadius: "1px",

                                backgroundColor: "rgba(65, 34, 67, 0.678)",
                            }} className="vertical-line-2"></div>


                            <h1 className='see-feature' style={{

                            }} >See All feature</h1>



                            <div className="card-content-right">
                                <h1>
                                    <span>
                                        <i style={{
                                            color: "rgb(38, 186, 38)",
                                            padding: "0px 7px 0px 0px ",
                                            fontSize: "16px"
                                        }} class="fa-solid fa-check"></i>

                                    </span>
                                    <strong
                                        style={
                                            {
                                                fontWeight: "bold"
                                            }
                                        }>Unlimited </strong>
                                    Free SSL
                                    <Tooltip title={<Tooltip4Info />} arrow >
                                        <HelpIcon style={{
                                            color: "rgb(105, 56, 228)",
                                            fontSize: "20px",
                                            margin: "0px 0px -4px 3px"
                                        }} />

                                    </Tooltip>
                                </h1>

                                <h1>
                                    <span>
                                        <i style={{
                                            color: "rgb(38, 186, 38)",
                                            padding: "0px 7px 0px 0px ",
                                            fontSize: "16px"
                                        }} class="fa-solid fa-check"></i>

                                    </span>
                                    <strong style={
                                        {
                                            fontWeight: "bold"
                                        }
                                    } >Free </strong>
                                    Domain
                                    <Tooltip title={<Tooltip5Info />} arrow >
                                        <HelpIcon style={{
                                            color: "rgb(105, 56, 228)",
                                            fontSize: "20px",
                                            margin: "0px 0px -4px 3px"
                                        }} />

                                    </Tooltip>
                                </h1>

                                <h1>
                                    <span>
                                        <i style={{
                                            color: "rgb(38, 186, 38)",
                                            padding: "0px 7px 0px 0px ",
                                            fontSize: "16px"
                                        }} class="fa-solid fa-check"></i>

                                    </span>
                                    <strong
                                        style={
                                            {
                                                fontWeight: "bold"
                                            }
                                        }>Free </strong>
                                    Email
                                    <Tooltip title={<Tooltip6Info />} arrow >
                                        <HelpIcon style={{
                                            color: "rgb(105, 56, 228)",
                                            fontSize: "20px",
                                            margin: "0px 0px -4px 3px"
                                        }} />

                                    </Tooltip>
                                </h1>

                                <h1>
                                    <span>
                                        <i style={{
                                            color: "rgb(38, 186, 38)",
                                            padding: "0px 7px 0px 0px ",
                                            fontSize: "16px"
                                        }} class="fa-solid fa-check"></i>

                                    </span>
                                    <strong
                                        style={
                                            {
                                                fontWeight: "bold"
                                            }
                                        }>Optimized </strong>
                                    for WordPress
                                    <Tooltip title={<Tooltip7Info />} arrow >
                                        <HelpIcon style={{
                                            color: "rgb(105, 56, 228)",
                                            fontSize: "20px",
                                            margin: "0px 0px -4px 3px"
                                        }} />

                                    </Tooltip>
                                </h1>
                            </div>

                        </div>
                    </div>
                    <div className="card-bottom">


                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
