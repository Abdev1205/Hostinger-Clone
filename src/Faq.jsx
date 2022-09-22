import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>

        
        <h1 className='faq-header'>Website Hosting FAQs</h1>
        <div className='faq-main'>


            <div style={{
                margin: "auto"
            }} >
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem"
                        }} sx={{ flexShrink: 1 }}>
                            1.  What is web hosting?
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }}  >
                            Web hosting is a service that allows you to store your website’s files on a server, making it accessible to everyone online. Shared hosting is one  of the numerous available types of hosting – it employs shared server resources. The more  successful a website becomes, the more resources it will require to run smoothly.
                            <br />
                            <br />

                            Hostinger allows you to upgrade your hosting package as needed, so you may start with a basic Shared web hosting plan and switch to a cloud or VPS hosting plan later.
                            <br />
                            <br />

                            Most common types of hosting include:
                            <br />
                            <br />

                            <strong>Shared hosting:</strong> it involves a number of websites hosted on the same server, with each user receiving a certain amount of storage and resources. Shared solutions are frequently the best option for beginners and bloggers because it is the most cost-effective.
                            <br />
                            <br />

                            <strong>VPS hosting:</strong> a virtual private server (VPS) is the next level of hosting. It employs more powerful hardware that simulates virtual server instances on the same gear.
                            <br />
                            <br />

                            <strong>Cloud hosting:</strong> it may be ideal for you if you want additional server processing power. As cloud hosting employs many interconnected servers that take over from one another if necessary, you can count on your website to be up and running at all times.
                            <br />
                            <br />
                            <strong>Dedicated hosting:</strong> it provides you with a server that is dedicated to your website only without sharing storage or resources with anybody else. Professional web administrators and developers are typically advised to purchase dedicated hosting.
                            <br />
                            <br />
                            Our primary goal at Hostinger is to provide a mix of cloud and shared website hosting to our customers. As a result, we can provide our customers fast hosting with premium features and virtually 100% uptime at an unbelievable price.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem"
                        }} className='faq-question' sx={{ flexShrink: 1 }}>2.  How does a web hosting service work?</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            Your website is a collection of files and databases that users see as they navigate it. Hostinger, like most web providers, provides the resources for you to store this information and make it accessible.
<br />
<br />
                            When you sign up for Hostinger's managed hosting plan, you'll receive login information for the admin panel of your account. From it, you’ll be able to control your website, its hosting, domain, databases, files, and more.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem"
                        }} className='faq-question' sx={{ flexShrink: 1 }}>
                            3.   Why do I need a website host?
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            You need a hosting package to get your website up and operating and visible to everyone else.
<br />
<br />
                            While it is possible to create a website without third-party hosting, this is not advised for beginners. If you don't know how to set up a hosting server, you'll save time and money by letting Hostinger handle the heavy work.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem"
                        }} sx={{ flexShrink: 1 }}>4.   What kind of support will I get?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            Our Customer Success team goes above and beyond to guarantee that our clients succeed online. So, if you have an issue, go ahead and contact us! We'll do everything to resolve it and guide you forward.

                            Our customer success team is well regarded in the industry, and we have a long history of going above and beyond to assist our clients. We answer fast and completely, and we don't stop until a solution is discovered.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem"
                        }} className='faq-question' sx={{ flexShrink: 1 }}>5.   What are the differences between web hosting services and domains?</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            When you enter in a URL (for example, http://www.hostinger.com), your web browser queries that domain name (for example, hostinger.com) and inquires about the website's hosting location. The items that are saved there are then loaded by the browser.
                            <br />
                            <br />

A domain name and web hosting are required for any website so it could be accessible online. Consider the domain name the address and the hosting as the actual structure
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem"
                        }} className='faq-question' sx={{ flexShrink: 1 }}>6.   What are the main differences between shared hosting and VPS?</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            A virtual private server (VPS) is a hybrid of shared hosting and dedicated server technology. Some people equate VPS hosting to living in an apartment building, while others compare it to renting a condo.
                            <br />
                            <br />

You share a server and its resources with a number of other websites when you use shared hosting. You're still sharing certain resources with a VPS, but its software is set up so that a single system serves as numerous dedicated servers, with each user having their own virtual server.
<br />
<br />

Using a VPS gives web administrators the administrative authority of a dedicated hosting arrangement, as well as the freedom to modify their server to their liking.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography  style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem",
                        }} className='faq-question' sx={{ flexShrink: 1 }}>7.   I have a website. Can I transfer it to Hostinger?</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            Yes – if you're using a popular content management system like WordPress or Drupal, we offer solutions that make switching between web hosts simple and quick. Even if your website is not running a traditional CMS or if you only need a little assistance, our Customer Success team is here to walk you through the process.

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            color: "rgb(43, 16, 110)",
                            padding: "0rem 0rem 0rem 1.5rem"
                        }} className='faq-question' sx={{ flexShrink: 1 }}>8.   Can I buy hosting without a domain name?</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            You may buy domain names from other domain registrars and point them to your Hostinger server if you desire. Transferring an existing domain name to Hostinger is also possible if you want to maintain your domain name and website under one provider. Simply contact our Customer Success team – we will be happy to help!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>

        </>
    );
}
