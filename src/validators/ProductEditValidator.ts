import * as Yup from 'yup';

export const ProductEditValidator = () => {
    return Yup.object().shape({
        description: Yup.string().required("Campo Obrigatório!").min(3, "Mínimo de ${min} caracteres")
        .max(100, "Mínimo de ${min} caracteres"),
        brand: Yup.string().required("Campo Obrigatório!").max(80, "Mínimo de ${min} caracteres"),
        value: Yup.number().min(0.01, "Mínimo de ${min} caracteres").required("Campo Obrigatório!"),
        weight: Yup.number().min(0.01, "Mínimo de ${min} caracteres"),
        flavor: Yup.string(),
    });
}