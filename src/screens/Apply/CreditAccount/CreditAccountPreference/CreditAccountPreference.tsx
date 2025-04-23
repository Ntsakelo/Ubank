import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorTheme from '../../../../components/Global/Theme'
import ProgressStepper from '../../ProgressStepper'
import AccountPreferenceForm from '../../ApplicationForms/AccountPreferenceForm'


const CreditAccountPreference = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
          <Grid container>
            <Grid size={{xs:12}}>
                <ProgressStepper step={2}/>
            </Grid>
            <Grid size={{xs:12}}>
                <AccountPreferenceForm isCreditAccount={true} />
            </Grid>
          </Grid>
        </ThemeProvider>
    )
}

export default CreditAccountPreference;