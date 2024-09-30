import * as Yup from "yup";

export const OrderEditValidator = () => {
  return Yup.object().shape({
    id: Yup.number()
      .min(0.01, "Mínimo de ${min} caracteres"),
    data: Yup.string()
      .required("Campo Obrigatório!")
      .max(10, "Mínimo de ${min} caracteres"),
    cpf: Yup.string()
      .required("Campo Obrigatório!").min(11, "Mínimo de ${min} caracteres")
      .max(14, "Mínimo de ${min} caracteres"),
    forma_pagamento: Yup.string()
      .required("Campo Obrigatório!")
      .max(20, "Mínimo de ${min} caracteres"),
    quantidade_itens: Yup.number()
      .min(0.01, "Mínimo de ${min} caracteres")
      .required("Campo Obrigatório!"),
    valor_total: Yup.number()
      .min(0.01, "Mínimo de ${min} caracteres")
      .required("Campo Obrigatório!"),
  });
};
