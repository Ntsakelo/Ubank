import * as React from 'react'
import TextField from '@mui/material/TextField';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import ProgressStepper from '../../ProgressStepper';
import TermsConditionForm from '../../ApplicationForms/TermsConditionsForm';

const TermsConditions = () => {
    return (
        <div>
            <Grid container>
               <Grid size={{xs:12}}>
                  <ProgressStepper step={3}/>
               </Grid>
               <Grid size={{xs:12}}>
                  <TermsConditionForm />
               </Grid>
            </Grid>
        </div>
    )
}

export default TermsConditions;