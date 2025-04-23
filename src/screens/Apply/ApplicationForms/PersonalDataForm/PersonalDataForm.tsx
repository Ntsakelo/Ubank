import * as React from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import personalInfoSchema from '../../../../schemas/PersonalInfoSchema';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs, { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useApplicationFormStore } from '../../../../utils/store';
const { getNames } = require('country-list')

export interface RequiredFields {
    includeMaritalStatus: boolean,
    includeMailingAddress: boolean,
    includeLengthOfCurrentStay: boolean,
}

const PersonalDataForm: React.FC<RequiredFields> = (data: RequiredFields) => {
    const countries = getNames()
    const navigate = useNavigate()
    const  {setPersonalData} = useApplicationFormStore()
    const schema = personalInfoSchema(data)
    const personInfoScheme = schema.pick({
        countryOfCitizenship: true,
        dateOfBirth: true,
        emailAddress: true,
        fullName: true,
        gender: true,
        identityNumber: true,
        lengthOfStayAtAddress: true,
        mailingAddress: true,
        maritalStatus: true,
        primaryContactNumber: true,
        residentialAddress: true,
     
    })

    type PersonalInfoSchema = z.infer<typeof personInfoScheme>

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<PersonalInfoSchema>({
        resolver: zodResolver(personInfoScheme),
        defaultValues: {
            countryOfCitizenship: '',
            // dateOfBirth:undefined,
            emailAddress: '',
            fullName: '',
            gender: '',
            identityNumber: '',
            lengthOfStayAtAddress: '',
            // mailingAddress:'',
            maritalStatus: '',
            // previousAddress:'',
            primaryContactNumber: '',
            residentialAddress: ''
        },
    });
    const submit = (data: PersonalInfoSchema) => {
        setPersonalData(data);
        if(data){
            navigate('/personal/products-and-services/bank-accounts/manymore-banking-account/apply/employment')
        }

    }

    return (
        <form onSubmit={handleSubmit(submit)} className="application_form">
            <Grid container>
                <Grid size={{ xs: 12 }}>
                    <p className='form_header'>Help us know you better</p>
                    <p className='form_text'>Please provide us with the information by filling in the form below</p>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="fullName"
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Full Name' variant="outlined" error={errors.fullName ? true : false} value={field.value}
                                onChange={(e) => setValue('fullName', e.target.value)}

                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Gender (Optional)</InputLabel>
                                <Select

                                    label="Gender (Optional)"
                                    value={field.value}
                                    sx={{ width: '95%' }}
                                    error={errors.gender ? true : false}
                                    name={'gender'}
                                    onChange={(e) => setValue('gender', e.target.value)}
                                >
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>                                             <MenuItem value={'prefer not to say'}>Prefer Not To Say</MenuItem>
                                </Select>
                            </FormControl>

                        )}
                    />

                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '15px' }}>
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']} sx={{ paddingTop: '10px' }}>
                                    <DatePicker
                                        defaultValue={dayjs('')}
                                        label="Date Of Birth"
                                        sx={{ width: '95%' }}
                                        slotProps={{ textField: { size: 'small', name: 'dateOfBirth', error: Boolean(errors.dateOfBirth) } }}
                                        value={field.value ? dayjs(field.value) : null}
                                        onChange={(newDate) => setValue('dateOfBirth', newDate!.toDate())}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>

                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="identityNumber"
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" type="number" name="identityNumber" label='ID/Passport Number' variant="outlined" value={field.value} error={errors.identityNumber ? true : false} onChange={(e) => setValue('identityNumber', e.target.value)} />
                        )}
                    />
                </Grid>

                {data.includeMaritalStatus ? <Grid size={{ xs: 6, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='maritalStatus'
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel>Marital Status</InputLabel>
                                <Select

                                    value={field.value}
                                    label="Marital Status"
                                    onChange={(e) => setValue('maritalStatus', e.target.value)}
                                    error={errors.maritalStatus ? true : false}
                                    sx={{ width: '95%' }}
                                >
                                    <MenuItem value={'divorced'}>Divorced</MenuItem>
                                    <MenuItem value={'married'}>Married</MenuItem>
                                    <MenuItem value={'single'}>Single</MenuItem>
                                    <MenuItem value={'widowed'}>Widow</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid> : null}
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name='countryOfCitizenship'
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel>Country Of Citizenship</InputLabel>
                                <Select

                                    value={field.value}
                                    label="Country Of Citizenship"
                                    onChange={(e) => setValue('countryOfCitizenship', e.target.value)}
                                    error={errors.countryOfCitizenship ? true : false}
                                    sx={{ width: '95%' }}

                                >
                                    {countries && countries.map((item: any, index: number) => (
                                        <MenuItem value={item} key={index}>{item}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="primaryContactNumber"
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" type="number" label='Primary Contact Number' value={field.value}
                                onChange={(e) => setValue('primaryContactNumber', e.target.value)}
                                error={errors.primaryContactNumber ? true : false}
                                variant="outlined" />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="emailAddress"
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" type="email" label='Email Address' variant="outlined" value={field.value} onChange={(e) => setValue('emailAddress', e.target.value)} error={errors.emailAddress ? true : false} />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="residentialAddress"
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Residential Address' value={field.value}
                                onChange={(e) => setValue('residentialAddress', e.target.value)}
                                error={errors.residentialAddress ? true : false}
                                variant="outlined" />
                        )}
                    />
                </Grid>
                {data.includeLengthOfCurrentStay ? <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="lengthOfStayAtAddress"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth size="small">
                                <InputLabel>Length Of Time At Address</InputLabel>
                                <Select

                                    value={field.value}
                                    label="Length Of Time At Address"
                                    onChange={(e) => setValue('lengthOfStayAtAddress', e.target.value)}
                                    error={errors.lengthOfStayAtAddress ? true : false}
                                    sx={{ width: '95%' }}
                                >
                                    <MenuItem value={'Less Than 1 Year'}>Less Than 1 Year</MenuItem>
                                    <MenuItem value={'More Than 1 Year'}>More Than 1 Year</MenuItem>
                                    <MenuItem value={'More than 5 Years'}>More than 5 Years</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid> : <></>}
                <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '25px' }}>
                    <Controller
                        name="mailingAddress"
                        control={control}
                        render={({ field }) => (
                            <TextField size="small" className="form_field" label='Mailing Address (If different from residential)' variant="outlined" value={field.value} onChange={(e) => setValue('mailingAddress', e.target.value)}
                                error={errors.mailingAddress ? true : false}
                            />
                        )}
                    />
                </Grid>
                <Grid size={{ xs: 12 }} sx={{ marginTop: '25px' }}>
                    <button type='submit' className='form_main_cta'>PROCEED</button>
                </Grid>
            </Grid>
        </form >
    )
}

export default PersonalDataForm;
