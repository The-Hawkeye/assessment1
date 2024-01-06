import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Recommendation(props) {
 let {age, setAge} = props;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Recommendation</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={(event)=>handleChange(event)}
        >
          <MenuItem value="">
            <b>Recommended</b>
          </MenuItem>
          <MenuItem value={"id"}>Newest First</MenuItem>
          <MenuItem value={"rating"}>Popular</MenuItem>
          <MenuItem value={"priceLow"}>PRICE : LOW TO HIGH</MenuItem>
          <MenuItem value={"priceHigh"}>PRICE : HIGH TO LOW</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}