import {z} from 'zod';

import { RequiredFields } from '../screens/Apply/ApplicationForms/PersonalDataForm/PersonalDataForm';

const PersonalInfoSchema = (data:RequiredFields) => {
    
    const schema = z.object({
        fullName: z.string().min(3).max(50),
        gender:z.string().min(3).max(50),
        dateOfBirth: z.instanceof(Date).refine((date) => date <= new Date()),
        identityNumber:  z.string().min(3).max(50),
        maritalStatus: data.includeMaritalStatus ? z.string().min(3).max(50):z.string().optional(),
        countryOfCitizenship:z.string().min(3).max(50),
        primaryContactNumber: z.string().min(3).max(20),
        emailAddress:z.string().min(3).max(50),
        residentialAddress:z.string().min(3).max(50),
        mailingAddress:z.string().optional(),
        previousAddress: z.string().min(3).max(50),
        lengthOfStayAtAddress:data.includeLengthOfCurrentStay? z.string().min(3).max(50):z.string().optional(),

    })
    
//    type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;
return schema;
}

export default PersonalInfoSchema;