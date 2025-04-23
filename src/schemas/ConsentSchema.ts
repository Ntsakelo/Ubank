import {z} from 'zod';

const ConsentSchema = () => {
    const schema = z.object({
        marketingConsent: z.boolean(),
        termsConditionsAgreement: z.boolean(),
        dataProcessingAgreement: z.boolean(),
    })

    return schema
}

export default ConsentSchema;