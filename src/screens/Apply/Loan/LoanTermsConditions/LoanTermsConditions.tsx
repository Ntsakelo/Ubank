import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorTheme from '../../../../components/Global/Theme'
import ProgressStepper from '../../ProgressStepper'
import TermsConditionForm from '../../ApplicationForms/TermsConditionsForm'

const LoanTermsConditions = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
           <Grid container>
              <Grid size={{xs:12}}>
                 <ProgressStepper step={2} excludePreferenceStep={true}/>
              </Grid>
              <Grid size={{xs:12}}>
                 <TermsConditionForm />
              </Grid>
           </Grid>
        </ThemeProvider>
    )
}

export default LoanTermsConditions;