"use client";

import { withDataFetching } from "@/components/HOCS/withDataFetching";
import EditTemplateProduct from "@/components/templates/products/EditTemplateProduct";
import { env } from "@/config/env";
import { IProduct } from "@/interfaces/IProduct";
import { useEffect, useState } from "react";



interface ProductEditProps {
  params: { slug: string };
  data: any;
}

const ProductEdit: React.FC<ProductEditProps> = ({ params, data }) => {

  const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
          if(!data) return;
          //desestruturação
          const { 
              id,
              descricao: description,
              marca: brand,
              valor: value,
              peso_gramas: weight,
              sabor: flavor,
            } = data.produto;

          setProduct({
            id,
            brand,
            description,
            flavor,
            value,
            weight,
          });
    }, [data]);


  return <EditTemplateProduct product={product} />;
};

export default withDataFetching(`${env.apiBaseUrl}/produto`)(ProductEdit);
