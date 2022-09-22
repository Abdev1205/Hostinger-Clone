import React from 'react'
import Navbar from './Navbar'

function About() {
    return (
        <>
            <Navbar />
            <div className="message">
            <p>Not Styled properly</p>
                <h1>🙏🙏 Thank You So much Thapa Technical Sir 🙏🙏 </h1>
            </div>

            <div className="thanks">
                <ol >

                    <li>Because You teach is Hindi</li>
                    <li>Because You teach each and every topic very deeply</li>
                    <li>Because You provide free High Quality Content</li>
                    <li>Because You provide regular Tech Updates</li>
                    <li>Because you give programming related future guidance</li>
                </ol>
            </div>

            <h1 style={{
                padding: "2rem 2rem 0rem 2rem"
            }} >🙏🙏Request from you🙏🙏</h1>
            <p>Please Make one shot Beginner to Advanced Css Course</p>



            <div className="about-project">
                <div className="about-me">
                    <h1 style={{
                        padding: "0rem 0rem 2rem 0rem "
                    }}>About Me</h1>
                    <p>I  am Abhay Mishra, 2nd Year B tech student of VIT Bhopal. I recently following your react playlist so for practice and gain some extra knowledge no matter I loose or win so I have participated in Thapa CodeFest and created Hostinger Clone with some suitable changes according to me  </p>
                </div>
                <h1>changes are as follows</h1>
                <ol>

                    <li>I have  increased  font-size of Navbar-pnk  because according to me font size of orginial website is pttle bit small</li>
                    <li>I have changed the Hero section image because this image ( cricket ) doesn't relate to the company and if we will use this image so one side of the image is left space, so according to me I shifted Hero section towards the left and make image float toward to right so that I can you use my space efficiently</li>
                    <li>I have changed the opacity of Brands img because as a user it will be difficult to see the brand </li>
                    <li>I have added box shadow to card beacuse this make card more attractive and increases the chances  of making purchse for this product</li>
                    <li>I have increased the font size and spacing of the service section as per the space available because it increases its readabipty</li>
                    <li>I have added blue background in the domain section because it catches the focus of the user and prompts him to check the domain and increase the chances of the domain sell </li>
                    <li>Same Thing For money Back guarantee section</li>
                    <li>I have added social media icons at the top of the footer and the payment partners logo at the last of the footer to increase the readabipty and to efficiently use every pixel of the screen</li>
                    <li>I have not added as the source of every link, buttons</li>
                </ol>

            </div>
            
        </>
    )
}

export default About
