import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Accordion } from '@mui/material';
import BasicAccordion from './Accordion';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
'Men',
'Women',
'Baby & Kids'
];

const obj = [
  {title:"Ideal For",
    content:['Men', 'Women','Baby & Kids']
  },
  {title:"Ideal For",
    content:['Men', 'Women','Baby & Kids']
  }
]

const items = [
  {
     title: 'Item 1',
     content: 'Content for item 1',
  },
  {
     title: 'Item 2',
     content: 'Content for item 2',
  },
  {
     title: 'Item 3',
     content: 'Content for item 3',
  },
 ];

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