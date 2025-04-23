import * as React from 'react'
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import ProgressStepper from '../../ProgressStepper';
import AccountPreferenceForm from '../../ApplicationForms/AccountPreferenceForm';
import ColorTheme from '../../../../components/Global/Theme';

const AccountPreference = () => {
    return (
        <div>
            <ThemeProvider theme={ColorTheme}>
            <Grid container>
               <Grid size={{xs:12}}>
                  <ProgressStepper step={2}/>
               </Grid>
               <Grid size={{xs:12}}>
                <AccountPreferenceForm isBankAccount={true} isCreditAccount={false}/>
               </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )
}

export default AccountPreference;