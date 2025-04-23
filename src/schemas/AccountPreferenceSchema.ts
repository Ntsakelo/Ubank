import {z} from 'zod';
import { AccountType } from '../screens/Apply/ApplicationForms/AccountPreferenceForm/AccountPreferenceForm';

const AccountPreferenceSchema = (data:AccountType) => {
    const schema = z.object({
      creditCardType: data.isCreditAccount ? z.string().min(3).max(50):z.string().optional(),
      creditLimit: data.isCreditAccount ? z.string().min(3).max(50): z.string().optional(),
      creditCardPurpose: data.isCreditAccount ? z.string().min(3).max(50) : z.string().optional(),
      accountType: data.isBankAccount ? z.string().min(3).max(50) : z.string().optional(),
      initialDeposit: data.isBankAccount ? z.string().min(3).max(50) : z.string().optional(),
      overdraftProtection: data.isBankAccount ? z.boolean() : z.boolean().optional(),
      onlineBanking: data.isBankAccount ? z.boolean() : z.boolean().optional(),
      atmCard: data.isBankAccount ? z.boolean() : z.boolean().optional()
    })

    return schema
}

export default AccountPreferenceSchema;