import Grid from "@mui/material/Grid";
import './styles.css'
import TermsConditionsInfo from "../../../../components/Global/TermsConditions";
import ConsentSchema from "../../../../schemas/ConsentSchema";
import { z } from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider } from "@mui/material";
import ColorTheme from "../../../../components/Global/Theme";
import { useApplicationFormStore } from "../../../../utils/store";

const TermsConditionForm = () => {
  const {formData,setConsentData} = useApplicationFormStore()
  const schema = ConsentSchema()
  const consentSchema = schema.pick({
    marketingConsent: true,
    termsConditionsAgreement: true,
  })

  type ConsentDataSchema = z.infer<typeof consentSchema>

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ConsentDataSchema>(
    {
      resolver: zodResolver(consentSchema),
      defaultValues: {
        marketingConsent: false,
        termsConditionsAgreement: false,
      }
    }
  )
  
  const submit = (data: ConsentDataSchema) => {
        setConsentData(data);
        console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="application_form">
      <ThemeProvider theme={ColorTheme}>
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <TermsConditionsInfo />
        </Grid>
        <Grid size={{xs:12}}>
          <Controller 
           name="termsConditionsAgreement"
           control={control}
           render={({field})=> (
            <FormControlLabel sx={{marginLeft:'10px'}} control={<Checkbox onChange={(e) => setValue('termsConditionsAgreement', e.target.checked)} />} label="I agree to the terms and conditions" />
           )}
          />
        </Grid>
        <Grid size={{xs:12}}>
          <Controller 
           name="marketingConsent"
           control={control}
           render={({field})=> (
            <FormControlLabel sx={{marginLeft:'10px'}} control={<Checkbox onChange={(e) => setValue('marketingConsent', e.target.checked)} />} label="I give consent to receive marketing content " />
           )}
          />
        </Grid>
        <Grid size={{xs:12}}>
          <button type="submit" className="form_main_cta">Sumit Application</button>
        </Grid>
      </Grid>
      </ThemeProvider>
    </form>
  )
}

export default TermsConditionForm;