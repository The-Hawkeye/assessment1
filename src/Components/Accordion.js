import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./Accordion.css";

export default function BasicAccordion({accHeading}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordion-header">{accHeading}</Typography>
          
        </AccordionSummary>
        <Typography color="black" style={{textAlign:"left",padding:"0px 16px"}}>All</Typography>
        <AccordionDetails>
          {/* <Typography color="black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}

          <FormGroup>
          <p className="unselect-all" style={{textAlign:"left"}}>Unselect All</p>
      <FormControlLabel className='accordion-item' control={<Checkbox />} label="Men" />
      <FormControlLabel className='accordion-item' control={<Checkbox />} label="Women" />
      <FormControlLabel className='accordion-item' control={<Checkbox />} label="Baby & Kids" />
    </FormGroup>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}