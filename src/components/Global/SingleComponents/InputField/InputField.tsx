import * as React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme,ThemeProvider } from '@mui/material/styles';

interface FieldData{
    placeholder:string,
    label:string,
    type:string,
    state?:boolean,
    setValue:Function
}

export default function InputField(data:FieldData) {
  return (
      <ThemeProvider theme={createTheme({palette:{primary:{main:'#827bd4'}}})}>
         <TextField type={data.type} id="outlined-basic" label={data.label} variant="outlined" onChange={(e) => {data.setValue(e.target.value)}} size="small" sx={{width:'95%'}} focused={data.state}/>
      </ThemeProvider>
  );
}