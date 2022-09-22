import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Vps from './Vps';
import Tooltip from '@mui/material/Tooltip';
import Hosting from './Hosting';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Domain from './Domain';
import Email from './Email';
import MobileNav from "./MobileNav"
import TestMobille from "./TestMobille"

function Navbar() {
    const [clickedH, setClickedH] = useState(false);
    const [clickedV, setClickedV] = useState(false);
    const [clickedE, setClickedE] = useState(false);
    const [clickedD, setClickedD] = useState(false);
    const [clickedNav, setClickedNav] = useState(false);
    const hostingDrop = () => {
        console.log("hosting is clicked");

        if (clickedH === false) {
            setClickedH(true)

        } else {
            setClickedH(false)

        }

    }
    const VpsDrop = () => {
        console.log("Vps is clicked");
        if (clickedV === false) {
            setClickedV(true)

        } else {
            setClickedV(false)

        }

    }
    const emailDrop = () => {
        console.log("Email is clicked");
        if (clickedE === false) {
            setClickedE(true)

        } else {
            setClickedE(false)

        }

    }
    const mobileNav = () => {
        if (clickedNav === false) {
            setClickedNav(true)
            console.log("Hello Nav Button is clicked");


        } else {
            setClickedNav(false)
            console.log("Hello Nav Button is closed");

        }
    }

    const domainDrop = () => {
        console.log("Domain is clicked");
        if (clickedD === false) {
            setClickedD(true)


        } else {
            setClickedD(false)


        }



    }
    return (
        <>
            
                
                <div className='nav'>
                    <div className='navbar' >
                        
                        <div className='navbar-brand' >
                            <img className='brand-image' src="https://santrelmedia.com/wp-content/uploads/2020/12/HostingerLogoWhite-1024x205.png" alt="Hostinger logo" srcset="" />
                        </div>


                        <div className='navbar-links' >

                            <ol className='navbar-list' >

                                {/* ********** hosting start from here ***************** */}
                                <Tooltip className='tool-tip'

                                    title={clickedH ? <Hosting /> : null} arrow>

                                    <li onClick={hostingDrop} className='nav-link' >Hosting
                                        {clickedH ? <ExpandLessIcon /> : <ExpandMoreIcon />}



                                    </li>
                                </Tooltip>

                                {/* ********** VPS start from here ***************** */}

                                <Tooltip className='tool-tip' title={clickedV ? <Vps /> : null} arrow>
                                    <li onClick={VpsDrop} className='nav-link' >VPS

                                        {clickedV ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </li>

                                </Tooltip>

                                {/* ********** Email start from here ***************** */}

                                <Tooltip className='tool-tip' title={clickedE ? <Email /> : null} arrow>

                                    <li onClick={emailDrop} className='nav-link' >Email

                                        {clickedE ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </li>

                                </Tooltip>



                                {/* ********** Domain start from here ***************** */}

                                <Tooltip className='tool-tip' title={clickedD ? <Domain /> : null} arrow>

                                    <li onClick={domainDrop} className='nav-link' >Domain

                                        {clickedD ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </li>

                                </Tooltip>

                                <li className='nav-link'  >
                                    <button className='login-btn' >

                                        <LockOutlinedIcon className='icon' style={{
                                            color: "white",
                                            fontSize: "1.6rem",
                                            padding: "0rem .7rem 0rem 0rem ",

                                        }} />
                                        Login
                                    </button>
                                </li>

                                <li className='login-btn' ><ShoppingCartOutlinedIcon
                                    className='icon'
                                    style={{
                                        color: "white",
                                        fontSize: "1.6rem",
                                        padding: "0rem .7rem 0rem .3rem ",

                                    }}
                                /> Cart  </li>
                                <div className="mobile-icon">
                                    <i onClick={mobileNav} class="fa-solid fa-bars"></i>






                                </div>

                            </ol>

                        </div>
                    </div>
                    <div className="my-mobile-icon">
                    {/* {clickedNav ? <MobileNav/> : null} */}
                    {clickedNav ? <MobileNav /> : null}
                    </div>
                </div>
            
        </>
    )
}

export default Navbar
