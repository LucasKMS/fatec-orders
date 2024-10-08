"use client";

import { TextField, MenuItem, Select, Button, Box } from "@mui/material";
import React, { useEffect } from "react";
import Layout from "@/components/UI/organisms/Layout";
import { useFormik } from "formik";
import { IProduct } from "@/interfaces/IProduct";
import { ProductEditValidator } from "@/validators/ProductEditValidator";

interface EditTemplateProps {
  product?: IProduct;
}

const EditTemplateProduct: React.FC<EditTemplateProps> = ({ product }) => {
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

  const { handleSubmit, values, handleChange, setFieldValue, errors, setValues } = formik;

  useEffect(() => {
    if(!product) return;

      const {id, ...prod} = product;

      setValues(prod);

  }, [product, setValues])

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
          <MenuItem value="Morango">Morango</MenuItem>
          <MenuItem value="Chocolate">Chocolate</MenuItem>
          <MenuItem value="Abacaxi">Abacaxi</MenuItem>
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
