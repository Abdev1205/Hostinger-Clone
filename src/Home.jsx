import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Partner from './Partner'
import Card from './Card'
import WebHosting from './WebHosting'
import Service from "./Service"
import DomainChecker from "./DomainChecker";
import StartWebsite from './StartWebsite'
import LightningFastWebsite from './LightningFastWebsite'
import WordpressMadeEasy from './WordpressMadeEasy'
import Support from './Support'
import Flexible from './Flexible'
import ControlPanel from './ControlPanel'
import Gurantee from './Gurantee';
import Faq from './Faq';
import Footer from './Footer'
import MobileNav from './MobileNav'

function Home() {
  return (
    <>
   <Navbar>

   </Navbar>
   <div className="hero-image">
   <Hero/>
   </div>
    
  

   <Partner/>
   <WebHosting/>
   <Card/>
   <Service/>
   <DomainChecker/>
   <StartWebsite/>
   <LightningFastWebsite/>
   <WordpressMadeEasy/>
   <Support/>
   <Flexible/>
   <ControlPanel/>
   
   <Gurantee/>
   <Faq/>
   <Footer/>

    {/* <Routes>
      <Route path='/nav' element={<MobileNav/>}  />
    </Routes> */}




   </>
  )
}

export default Home
