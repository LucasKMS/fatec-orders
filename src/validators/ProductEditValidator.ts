import validatorMessages from '@/constants/validatorMessage';

import * as Yup from 'yup';

export const ProductEditValidator = () => {
    const { requiredField, numericField, maxLenght, minLenght, maxValue, minValue } = validatorMessages

    return Yup.object().shape({
        description: Yup.string().required(requiredField).min(3, minLenght)
        .max(100, maxLenght),
        brand: Yup.string().required(requiredField).max(80, maxValue),
        value: Yup.number().typeError(numericField).min(0.01, minValue).required(requiredField),
        weight: Yup.number().min(0.01, minValue),
        flavor: Yup.string(),
    });
}