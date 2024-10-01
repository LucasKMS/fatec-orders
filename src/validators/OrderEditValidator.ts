import validatorMessages from "@/constants/validatorMessage";
import * as Yup from "yup";

export const OrderEditValidator = () => {
  const {requiredField, numericField, minLenght, maxLenght, minValue, maxValue} = validatorMessages

  return Yup.object().shape({
    id: Yup.number().typeError(numericField)
      .min(0.01, minValue),

    data: Yup.string()
      .required(requiredField)
      .max(10, maxLenght),

    cpf: Yup.string()
      .required(requiredField).min(11, minLenght)
      .max(14, maxLenght),

    forma_pagamento: Yup.string()
      .required(requiredField)
      .max(20, maxLenght),

    quantidade_itens: Yup.number()
      .min(0.01, minValue)
      .required("Campo Obrigatório!"),

    valor_total: Yup.number()
      .min(0.01, minValue)
      .required(requiredField),
  });
};
