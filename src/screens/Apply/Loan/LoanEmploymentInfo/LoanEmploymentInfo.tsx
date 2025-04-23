import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorTheme from '../../../../components/Global/Theme'
import ProgressStepper from '../../ProgressStepper'
import EmploymentDataForm from '../../ApplicationForms/EmploymentDataForm/EmploymentDataForm'

const LoanEmploymentInfo = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
        <Grid container>
            <Grid size={{xs:12}}>
                <ProgressStepper step={1} excludePreferenceStep={true}/>
            </Grid>
            <Grid size={{xs:12}}>
                <EmploymentDataForm includeEmployerName={false} includeJobTitle={false} includeLoanAmount={true} includeLoanPurpose={true}/>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}

export default LoanEmploymentInfo;