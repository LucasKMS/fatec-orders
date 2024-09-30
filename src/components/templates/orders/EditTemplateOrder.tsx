"use client";

import { TextField, Button, Box } from "@mui/material";
import React from "react";
import Layout from "@/components/UI/organisms/Layout";
import { useFormik } from "formik";
import { IOrder } from "@/interfaces/IOrder";
import { OrderEditValidator } from "@/validators/OrderEditValidator";

const EditTemplateOrder: React.FC = () => {
  const formik = useFormik<IOrder>({
    initialValues: {
      id: 0,
      data: "",
      cpf: "",
      forma_pagamento: "",
      quantidade_itens: 0,
      valor_total: 0,
    },
    validationSchema: OrderEditValidator,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="data"
          label="Data"
          fullWidth
          value={values.data}
          onChange={handleChange}
          error={!!errors.data}
          helperText={errors.data}
        />
        <TextField
          name="cpf"
          label="CPF"
          fullWidth
          value={values.cpf}
          onChange={handleChange}
          error={!!errors.cpf}
          helperText={errors.cpf}
        />
        <TextField
          name="forma_pagamento"
          label="Forma de Pagamento"
          fullWidth
          value={values.forma_pagamento}
          onChange={handleChange}
          error={!!errors.forma_pagamento}
          helperText={errors.forma_pagamento}
        />
        <TextField
          name="quantidade_itens"
          label="Quantidade de Itens"
          fullWidth
          value={values.quantidade_itens}
          onChange={handleChange}
          error={!!errors.quantidade_itens}
          helperText={errors.quantidade_itens}
        />
        <TextField
          name="valor_total"
          label="Valor Total"
          fullWidth
          value={values.valor_total}
          onChange={handleChange}
          error={!!errors.valor_total}
          helperText={errors.valor_total}
        />
        
        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>

        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default EditTemplateOrder;
