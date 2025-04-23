import Grid  from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material";
import ColorTheme from "../../../../components/Global/Theme";
import ProgressStepper from "../../ProgressStepper";
import PersonalDataForm from "../../ApplicationForms/PersonalDataForm";

const CreditPersonalInfo = () => {
    return (
        <ThemeProvider theme={ColorTheme}>
            <Grid container>
                <Grid size={{xs:12}}>
                    <ProgressStepper step={0}/>
                </Grid>
                <Grid size={{xs:12}}>
                    <PersonalDataForm includeLengthOfCurrentStay={true} includeMailingAddress={false} includeMaritalStatus={false}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default CreditPersonalInfo;