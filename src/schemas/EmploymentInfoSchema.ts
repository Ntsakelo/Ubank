import {z} from 'zod'
import { EmploymentRequiredFields } from '../screens/Apply/ApplicationForms/EmploymentDataForm/EmploymentDataForm';

const EmploymentInfoSchema = (data:EmploymentRequiredFields) => {
    const schema = z.object({
        employmentStatus: z.string().min(3).max(10),
        employerName:data.includeEmployerName ? z.string().min(3).max(50):z.string().optional(),
        jobTitle: data.includeJobTitle ? z.string().min(3).max(50):z.string().optional(),
        monthlyIncome: z.string().min(3).max(50),
        monthlyHousingPayment: z.string().min(3).max(50),
        otherIncomeSources:z.string().min(3).max(100),
        monthlyDebtsTotal:z.string().min(3).max(100),
        sourceOfIncome: z.string().min(3).max(50),
        loanAmountRequested:data.includeLoanAmount ? z.string().min(3).max(50) : z.string().optional(),
        purposeOfLoan: data.includeLoanPurpose ? z.string().min(3).max(50) : z.string().optional()
    })

    return schema
}

export default EmploymentInfoSchema;