import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectProps } from '@/app/types';



export function SelectField({label, options, onChange, value, disabled = false} : SelectProps) {
  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          label={label} 
          defaultValue="" 
          onChange={onChange}
          value={value}
          disabled={disabled}
          inputProps={{
            "data-test": "select"
          }}
        >
          {(options.length > 0) && options.map((item) => {
            return <MenuItem key={item.codigo} value={item.codigo}>{item.nome}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}
