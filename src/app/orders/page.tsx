"use client";
import CustomTable from "@/components/UI/organisms/CustomTable";
import Layout from "@/components/UI/organisms/Layout";
import { env } from "@/config/env";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Orders = () => {

  const [rows, setRows] = useState([])
  
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(
        `${env.apiBaseUrl}/pedido`
      );

      const orders = response.data.pedidos.map((order: any) => ({
        id: order.id,
        data: order.data,
        cpf: order.cpf,
        forma_pagamento: order.forma_pagamento,
        quantidade_itens: order.quantidade_itens,
        valor_total: order.valor_total
      }));

      setRows(orders)
    };
    fetchOrders();
  }, []);
  
  const headCells = [
    {
      id: "id",
      numeric: true,
      disablePadding: false,
      label: "ID",
    },
    {
      id: "data",
      numeric: false,
      disablePadding: false,
      label: "Data",
    },
    {
      id: "cpf",
      numeric: false,
      disablePadding: false,
      label: "CPF",
    },
    {
      id: "forma_pagamento",
      numeric: false,
      disablePadding: false,
      label: "Forma de Pagamento",
    },
    {
      id: "quantidade_itens",
      numeric: true,
      disablePadding: false,
      label: "Quantidade de Itens",
    },
    {
      id: "valor_total",
      numeric: true,
      disablePadding: false,
      label: "Valor Total",
    },
  ];

  return (
    <Layout>
      <Box>
        <CustomTable rows={rows} headCells={headCells} />
      </Box>
    </Layout>
  );
};

export default Orders;
