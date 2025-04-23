import * as React from 'react'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import ProgressStepper from '../../ProgressStepper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './styles.css'
import PersonalDataForm from '../../ApplicationForms/PersonalDataForm';
import { z } from 'zod';
import ColorTheme from '../../../../components/Global/Theme';


const PersonalInfo = () => {
     
    return (
     
        <div>
            <ThemeProvider theme={ColorTheme}>
                <Grid container>
                    <Grid size={{ xs: 12 }}>
                        <ProgressStepper step={0} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <PersonalDataForm includeMailingAddress={true} includeLengthOfCurrentStay={false} includeMaritalStatus={true}/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default PersonalInfo;