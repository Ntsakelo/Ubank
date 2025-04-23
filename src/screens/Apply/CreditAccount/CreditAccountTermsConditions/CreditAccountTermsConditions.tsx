import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorTheme from '../../../../components/Global/Theme'
import ProgressStepper from '../../ProgressStepper'
import TermsConditionForm from '../../ApplicationForms/TermsConditionsForm'

const CreditAccountTermsConditions = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
            <Grid size={{xs:12}}>
                <ProgressStepper step={3}/>
            </Grid>
            <Grid size={{xs:12}}>
                <TermsConditionForm />
            </Grid>
        </ThemeProvider>
    )
}

export default CreditAccountTermsConditions;