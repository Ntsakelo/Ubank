import { z } from "zod"
import AccountPreferenceSchema from "../../../../schemas/AccountPreferenceSchema"
import { ZodError } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useApplicationFormStore } from "../../../../utils/store"
import { useNavigate } from "react-router-dom"

export interface AccountType {
    isBankAccount?: boolean,
    isCreditAccount?: boolean,
}



const AccountPreferenceForm = (data: AccountType) => {
    const {formData,setAccountPreferenceData} = useApplicationFormStore()
    const schema = AccountPreferenceSchema(data);
    const navigate = useNavigate();

    const accountPreferenceSchema = schema.pick({
        accountType: true,
        atmCard: true,
        creditCardPurpose: true,
        creditCardType: true,
        creditLimit: true,
        initialDeposit: true,
        onlineBanking: true,
        overdraftProtection: true
    })

    type AccountPreference = z.infer<typeof accountPreferenceSchema>

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<AccountPreference>({
        resolver: zodResolver(accountPreferenceSchema),
        defaultValues: {
            accountType: '',
            atmCard: false,
            creditCardPurpose: '',
            creditCardType: '',
            creditLimit: '',
            initialDeposit: '',
            onlineBanking: false,
            overdraftProtection: false,
        }

    })

    const submit = (data: AccountPreference) => {
        setAccountPreferenceData(data);
        console.log(formData)
        navigate('/personal/products-and-services/bank-accounts/manymore-banking-account/apply/terms-and-conditions')
    
    }

    return (
        <form onSubmit={handleSubmit(submit)} style={{width:'50%',margin:'auto'}}>
            <Grid container>
                    <Grid size={{ xs: 12 }}>
                                    <p className='form_header'>What is your account preference</p>
                                    <p className='form_text'>Please provide us with the information by filling in the form below</p>
                                </Grid>
                {data.isBankAccount ? <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="accountType"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                                <Select
                                    label="Account Type"
                                    value={field.value}
                                    sx={{ width: '100%' }}
                                    error={errors.accountType ? true : false}
                                    name={'gender'}
                                    onChange={(e) => setValue('accountType', e.target.value)}
                                    onBlur={field.onBlur}
                                >
                                    <MenuItem value={'check account'}>Check Account</MenuItem>
                                    <MenuItem value={'savings account'}>Savings Account</MenuItem>
                                    <MenuItem value={'joint account'}>Joint Account</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid> : <></>}
                {data.isCreditAccount ? <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="creditCardType"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Credit Account Type</InputLabel>
                                <Select
                                    label="Credit Account Type"
                                    value={field.value}
                                    sx={{ width: '95%' }}
                                    error={errors.creditCardType ? true : false}
                                    name={'gender'}
                                    onChange={(e) => setValue('creditCardType', e.target.value)}
                                    onBlur={field.onBlur}
                                >
                                    <MenuItem value={'standard'}>Standard</MenuItem>
                                    <MenuItem value={'gold'}>Gold</MenuItem>
                                    <MenuItem value={'platinum'}>Platinum</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid> : <></>}
                {data.isCreditAccount ? <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="creditCardPurpose"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small" >
                                <InputLabel id="demo-simple-select-label">Credit Account Purpose</InputLabel>
                                <Select
                                    label="Credit Account Purpose"
                                    value={field.value}
                                    sx={{ width: '95%' }}
                                    error={errors.creditCardPurpose ? true : false}
                                    name={'gender'}
                                    onChange={(e) => setValue('creditCardPurpose', e.target.value)}
                                    onBlur={field.onBlur}
                                >
                                    <MenuItem value={'personal'}>Personal</MenuItem>
                                    <MenuItem value={'emergency'}>Emergency</MenuItem>
                                    <MenuItem value={'travel'}>Travel</MenuItem>
                                    <MenuItem value={'education'}>Education</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid> : <></>}
                {data.isCreditAccount ? <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="creditLimit"
                        control={control}
                        render={({ field }) => (
                            <TextField type="number" size="small" className="form_field" label='Credit Limit' variant="outlined" error={errors.creditLimit ? true : false} value={field.value}
                                onChange={(e) => setValue('creditLimit', e.target.value)}

                            />
                        )}
                    />
                </Grid> : <></>}
                {data.isBankAccount ? <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="initialDeposit"
                        control={control}
                        render={({ field }) => (
                            <TextField type="number" size="small" className="form_field" label='Initial Deposit' variant="outlined" error={errors.initialDeposit ? true : false} value={field.value}
                                onChange={(e) => setValue('initialDeposit', e.target.value)}
                                sx={{ width: '100%', margin: 'auto' }}
                            />
                        )}
                    />
                </Grid> : <></>}
                {data.isBankAccount ? <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <p>Features</p>
                    <Controller
                        name="overdraftProtection"
                        control={control}
                        render={({ field }) => (
                            <FormControlLabel control={<Checkbox onChange={(e) => setValue('overdraftProtection', e.target.checked)} />} label="Overdraft Protection" />
                        )}
                    />
                    <Controller
                        name="onlineBanking"
                        control={control}
                        render={({ field }) => (
                            <FormControlLabel control={<Checkbox onChange={(e) => setValue('onlineBanking', e.target.checked)} />} label="Online Banking" />
                        )}
                    />
                    <Controller
                        name="atmCard"
                        control={control}
                        render={({ field }) => (
                            <FormControlLabel control={<Checkbox onChange={(e) => setValue('atmCard', e.target.checked)} />} label="ATM Card" />
                        )}
                    />
                </Grid> : <></>}
                <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <button type='submit' className='form_main_cta'>PROCEED</button>
                </Grid>
            </Grid>
        </form>
    )
}

export default AccountPreferenceForm;