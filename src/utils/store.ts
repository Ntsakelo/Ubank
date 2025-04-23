import { create } from "zustand";
import EmploymentInfoSchema from "../schemas/EmploymentInfoSchema";
import PersonalInfoSchema from "../schemas/PersonalInfoSchema";
import AccountPreferenceSchema from "../schemas/AccountPreferenceSchema";
import ConsentSchema from "../schemas/ConsentSchema";
import {z} from 'zod'

type productType = 'bank account' | 'credit account' | 'loan' | ''

interface FormData{
    personalInfo: Partial<z.infer<ReturnType <typeof PersonalInfoSchema>>>,
    employmentInfo: Partial<z.infer<ReturnType <typeof EmploymentInfoSchema>>>,
    accountPreference: Partial<z.infer<ReturnType <typeof AccountPreferenceSchema>>>,
    consent: Partial<z.infer<ReturnType <typeof ConsentSchema>>>
}

interface ApplicationStore{
    formData: FormData,
    product: productType
    setPersonalData: (data:Partial<z.infer<ReturnType <typeof PersonalInfoSchema>>>) => void,
    setEmploymentData: (data:Partial<z.infer<ReturnType <typeof EmploymentInfoSchema>>>) => void,
    setAccountPreferenceData: (data:Partial<z.infer<ReturnType <typeof AccountPreferenceSchema>>>) => void,
    setConsentData: (data:Partial<z.infer<ReturnType <typeof ConsentSchema>>>) => void
}

export const useApplicationFormStore = create<ApplicationStore>((set) => ({
    product:'',
    formData: {
        accountPreference:{},
         employmentInfo:{},
         personalInfo:{},
         consent:{}
    },
   setPersonalData: (data:Partial<z.infer<ReturnType <typeof PersonalInfoSchema>>>) => set((state) => ({
      formData:{
        ...state.formData,
        personalInfo:{...data}
      }
   })),
   setEmploymentData: (data:Partial<z.infer<ReturnType <typeof EmploymentInfoSchema>>>) => set((state) => ({
      formData:{
        ...state.formData,
        employmentInfo:{...data}
      }
   })),
   setAccountPreferenceData: (data:Partial<z.infer<ReturnType <typeof AccountPreferenceSchema>>>) => set((state) => ({
    formData:{
        ...state.formData,
        accountPreference:{...data}
    }
   })),
   setConsentData : (data:Partial<z.infer<ReturnType <typeof ConsentSchema>>>) => set((state) => ({
    formData:{
      ...state.formData,
      consent:{...data}
    }
   })) 
   
}))