import Grid from '@mui/material/Grid'
import ProgressStepper from '../../ProgressStepper'
import PersonalDataForm from '../../ApplicationForms/PersonalDataForm'
import { ThemeProvider } from '@mui/material'
import ColorTheme from '../../../../components/Global/Theme'

const LoanPersonalInfo = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
        <Grid container>
            <Grid size={{xs:12}}>
                <ProgressStepper step={0} excludePreferenceStep={true} />
            </Grid>
            <Grid size={{xs:12}}>
                <PersonalDataForm includeLengthOfCurrentStay={false} includeMailingAddress={false} 
                includeMaritalStatus={true}/>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}

export default LoanPersonalInfo;