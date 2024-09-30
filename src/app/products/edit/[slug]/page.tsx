"use client";

import EditTemplateProduct from "@/components/templates/products/EditTemplateProduct";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  
  return <EditTemplateProduct/>;
}

export default ProductEdit;
