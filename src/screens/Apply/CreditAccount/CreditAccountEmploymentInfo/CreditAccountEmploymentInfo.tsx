import { ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Grid'
import ColorTheme from '../../../../components/Global/Theme'
import ProgressStepper from '../../ProgressStepper'
import EmploymentDataForm from '../../ApplicationForms/EmploymentDataForm/EmploymentDataForm'


const CreditAccountEmploymentInfo = () => {
    return (
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
    )
}

export default CreditAccountEmploymentInfo;