import * as React from 'react'
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import ProgressStepper from '../../ProgressStepper';
import EmploymentDataForm from '../../ApplicationForms/EmploymentDataForm/EmploymentDataForm';
import ColorTheme from '../../../../components/Global/Theme';

const EmploymentInfo = () => {
    return (
        <div>
            <ThemeProvider theme={ColorTheme}>
            <Grid container>
               <Grid size={{xs:12}}>
                  <ProgressStepper step={1}/>
               </Grid>
               <Grid size={{xs:12}}>
                <EmploymentDataForm includeEmployerName={true} includeJobTitle={true} includeLoanAmount={false} includeLoanPurpose={false}/>
               </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )
}

export default EmploymentInfo;