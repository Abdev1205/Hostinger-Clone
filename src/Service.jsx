import React from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import KeyIcon from '@mui/icons-material/Key';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloudIcon from '@mui/icons-material/Cloud';
import PhpIcon from '@mui/icons-material/Php';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ThreePIcon from '@mui/icons-material/ThreeP';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
function Service() {
    return (
        <>
            <div id='service-header' className="service-header">
                <h1>Our services include:</h1>
            </div>

            <div className="service">
                <div className="service-row">
                    
                    <div className="service-content">
                        <AdminPanelSettingsIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>Free SSL</h1>
                    </div>

                    <div className="service-content">
                        <KeyIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>Access Management</h1>
                    </div>

                    <div className="service-content">
                        <TrendingUpIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>eCommerce Optimization</h1>
                    </div>

                    <div className="service-content">
                        <RocketLaunchIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>Free Migration</h1>
                    </div>

                    <div className="service-content">
                        <StorageOutlinedIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>Automated backups</h1>
                    </div>
                    <div className="service-content">
                        <CloudIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>DDoS Protection</h1>
                    </div>

                    <div className="service-content">
                        <PhpIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>PHP Speed Boost</h1>
                    </div>

                    <div className="service-content">
                    <i className='service-icon' style={
                    {
                        color:"rgb(105, 56, 228)",
                        fontSize:"2.5rem",
                        border:"1px solid white",
                        margin:"-0.3rem 0rem 0rem .8rem ",
                        padding:"0rem 1rem 0rem 0rem"
                    }
                } class="fa-brands fa-wordpress-simple"></i> 
                        <h1>LiteSpeed Cache Plugin</h1>
                    </div>
                    <div className="service-content">
                        <TouchAppIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>One-Click WordPress Installation</h1>
                    </div>

                    <div className="service-content">
                        <ThreePIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>24/7/365 Tech Support</h1>
                    </div>

                    <div className="service-content">
                    <InstallDesktopIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /> 
                        <h1>Auto Script Installer</h1>
                    </div>
                    <div className="service-content">
                        <WorkspacePremiumIcon className='service-icon' style={{
                            color: "rgb(105, 56, 228)",
                            fontSize: "2.5rem",
                            margin: "-.6rem 1rem 0rem 1rem",
                        }} /><h1>99.9% Uptime Guarantee</h1>
                    </div>

                </div>

                
            </div>
        </>
    )
}

export default Service;
