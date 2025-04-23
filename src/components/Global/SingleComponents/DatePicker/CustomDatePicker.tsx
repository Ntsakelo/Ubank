import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme,ThemeProvider } from '@mui/material';

export default function CustomDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{paddingTop:'10px'}}>
        <DatePicker label="Date Of Birth" sx={{width:'95%'}} slotProps={{textField: {size:'small',}}} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
