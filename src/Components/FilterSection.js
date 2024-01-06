import * as React from 'react';
import BasicAccordion from './Accordion';



 const accordionObj = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN"
 ]

export default function FilterSection() {


  return (
   <div>
   { accordionObj.map((item) => <BasicAccordion accHeading={item}/>)}
     
    </div>
  );
}