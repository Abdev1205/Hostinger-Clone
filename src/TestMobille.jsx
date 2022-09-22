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

        
        
        <div >


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
                            Hosting
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }}  > 
                        <li className='my-nav-list' >Web Hosting</li>
                        <li className='my-nav-list'>Cloud Hosting</li>
                        <li className='my-nav-list'>Wordpress Hosting</li>
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
                        }} className='faq-question' sx={{ flexShrink: 1 }}>VPS</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            <li className='my-nav-list'>VPS Hosting</li>
                            <li className='my-nav-list'>Cyber Panel Hosting</li>
                            <li className='my-nav-list'>Minecraft Server Hosting</li>
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
                            Email
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            <li className='my-nav-list'>Google Workspace Email Hosting</li>
                            <li className='my-nav-list'>Hostineger Email Hosting</li>
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
                        }} sx={{ flexShrink: 1 }}>Domain</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            fontSize: "1rem",
                            fontWeight: "300",
                            color: "rgba(0, 0, 0, 0.597)",
                            padding: "0rem 1.5rem 0rem 1.5rem",
                        }} >
                            <li className='my-nav-list'>Domain Name Search</li>
                            <li className='my-nav-list'>WHOIS Lookup</li>
                            <li className='my-nav-list'>Domain Transfer</li>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
                

                
            </div>
        </div>

        </>
    );
}
