import * as React from 'react'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import EmploymentInfoSchema from '../../../../schemas/EmploymentInfoSchema'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import { useApplicationFormStore } from '../../../../utils/store'

export interface EmploymentRequiredFields {
    includeEmployerName: boolean,
    includeLoanAmount: boolean,
    includeLoanPurpose: boolean,
    includeJobTitle: boolean,
}

const EmploymentDataForm = (data: EmploymentRequiredFields) => {
    const navigate = useNavigate()
 const {setEmploymentData} = useApplicationFormStore()
    const schema = EmploymentInfoSchema(data)
    const employmentInfoSchema = schema.pick({
        employerName: true,
        employmentStatus: true,
        jobTitle: true,
        monthlyIncome: true,
        monthlyHousingPayment: true,
        loanAmountRequested: true,
        monthlyDebtsTotal: true,
        otherIncomeSources: true,
        purposeOfLoan: true,
        sourceOfIncome: true,
    })

    type EmploymentSchema = z.infer<typeof employmentInfoSchema>

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<EmploymentSchema>({
        resolver: zodResolver(employmentInfoSchema),
        defaultValues: {
            employerName: '',
            employmentStatus: '',
            jobTitle: '',
            monthlyIncome: '',
            monthlyHousingPayment: '',
            loanAmountRequested: '',
            monthlyDebtsTotal: '',
            otherIncomeSources: '',
            purposeOfLoan: '',
            sourceOfIncome: '',
        }
    })

    const submit = (data: EmploymentSchema) => {
        setEmploymentData(data)
         navigate('/personal/products-and-services/bank-accounts/manymore-banking-account/apply/account-preference')
    }

   
    return (
        <form onSubmit={handleSubmit(submit)} className='application_form'>
            <Grid container>
                <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <p className='form_header'>Tell us a bit about your employment</p>
                    <p className='form_text'>Please provide us with the information about your current employment by filling in the form below</p>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="employmentStatus"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Employment Status</InputLabel>
                                <Select

                                    label="Gender (Optional)"
                                    value={field.value}
                                    sx={{ width: '95%' }}
                                    error={errors.employmentStatus ? true : false}
                                    name={'gender'}
                                    onChange={(e) => setValue('employmentStatus', e.target.value)}
                                    onBlur={field.onBlur}
                                >
                                    <MenuItem value={'employed'}>Employed</MenuItem>
                                    <MenuItem value={'unemployed'}>Unemployed</MenuItem>                                             <MenuItem value={'retired'}>Retired</MenuItem>
                                    <MenuItem value={'selfEmployed'}>Self Employed</MenuItem>
                                    <MenuItem value={'student'}>Student</MenuItem>
                                </Select>
                            </FormControl>

                        )}
                    />
                </Grid>
                {data.includeEmployerName ? <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='employerName'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Name Of Employer' variant="outlined" error={errors.employerName ? true : false} value={field.value}
                                onChange={(e) => setValue('employerName', e.target.value)}

                            />
                        )}
                    />
                </Grid>:<></>}
                {data.includeJobTitle ? <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='jobTitle'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Job Title' variant="outlined" error={errors.jobTitle ? true : false} value={field.value}
                                onChange={(e) => setValue('jobTitle', e.target.value)}

                            />
                        )}
                    />
                </Grid>:<></>}
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='monthlyIncome'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Monthly Income' variant="outlined" error={errors.monthlyIncome ? true : false} value={field.value}
                                onChange={(e) => setValue('monthlyIncome', e.target.value)}

                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='monthlyDebtsTotal'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Total Monthly Debts' variant="outlined" error={errors.monthlyDebtsTotal ? true : false} value={field.value}
                                onChange={(e) => setValue('monthlyDebtsTotal', e.target.value)}

                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='otherIncomeSources'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Other Sources Of Income' variant="outlined" error={errors.otherIncomeSources ? true : false} value={field.value}
                                onChange={(e) => setValue('otherIncomeSources', e.target.value)}

                            />
                        )}
                    />
                </Grid>
                {data.includeLoanAmount ? <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='loanAmountRequested'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Loan Amount Requested' variant="outlined" error={errors.loanAmountRequested ? true : false} value={field.value}
                                onChange={(e) => setValue('loanAmountRequested', e.target.value)}

                            />
                        )}
                    />
                </Grid>:<></>}
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='monthlyHousingPayment'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Monthly Housing Payment' variant="outlined" error={errors.monthlyHousingPayment ? true : false} value={field.value}
                                onChange={(e) => setValue('monthlyHousingPayment', e.target.value)}

                            />
                        )}
                    />
                </Grid>
                {data.includeLoanPurpose ?<Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="purposeOfLoan"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Purpose Of Loan</InputLabel>
                                <Select

                                    label="Gender (Optional)"
                                    value={field.value}
                                    sx={{ width: '95%' }}
                                    error={errors.purposeOfLoan ? true : false}
                                    name={'gender'}
                                    onChange={(e) => setValue('purposeOfLoan', e.target.value)}
                                >
                                    <MenuItem value={'personal'}>Personal</MenuItem>
                                    <MenuItem value={'education'}>Education</MenuItem>                                             <MenuItem value={'housing'}>Housing</MenuItem>
                                    <MenuItem value={'vehicle financing'}>Vehicle Financing</MenuItem>
                                    <MenuItem value={'other'}>Other</MenuItem>
                                </Select>
                            </FormControl>

                        )}
                    />
                </Grid>:<></>}
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='sourceOfIncome'
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Source Of Income' variant="outlined" error={errors.sourceOfIncome ? true : false} value={field.value}
                                onChange={(e) => setValue('sourceOfIncome', e.target.value)}

                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }} >
                    <button type='submit' className='form_main_cta'>PROCEED</button>
                </Grid>
            </Grid>
        </form>
    )
}

export default EmploymentDataForm;