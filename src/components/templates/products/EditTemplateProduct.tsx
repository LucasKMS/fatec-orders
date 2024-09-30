"use client";

import { TextField, MenuItem, Select, Button, Box } from "@mui/material";
import React from "react";
import Layout from "@/components/UI/organisms/Layout";
import { useFormik } from "formik";
import { IProduct } from "@/interfaces/IProduct";
import { ProductEditValidator } from "@/validators/ProductEditValidator";

const EditTemplateProduct: React.FC = () => {
  const formik = useFormik<IProduct>({
    initialValues: {
      description: "",
      brand: "",
      value: 0,
      weight: 0,
      flavor: "",
    },
    validationSchema: ProductEditValidator,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="description"
          label="Descrição"
          fullWidth
          value={values.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
        />
        <TextField
          name="brand"
          label="Marca"
          fullWidth
          value={values.brand}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
        />
        <TextField
          name="value"
          label="Valor"
          fullWidth
          value={values.value}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
        />
        <TextField
          name="weight"
          label="Peso (gr.)"
          fullWidth
          value={values.weight}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
        />
        <Select
          name="flavor"
          label="Sabor"
          fullWidth
          value={values.flavor}
          onChange={(e) => setFieldValue("flavor", e.target.value)}
        >
          <MenuItem value=""> --Não Informado-- </MenuItem>
          <MenuItem value="morango">Morango</MenuItem>
          <MenuItem value="chocolate">Chocolate</MenuItem>
          <MenuItem value="abacaxi">Abacaxi</MenuItem>
        </Select>
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

export default EditTemplateProduct;
