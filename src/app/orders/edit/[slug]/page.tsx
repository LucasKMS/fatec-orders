"use client";

import EditTemplateOrder from "@/components/templates/orders/EditTemplateOrder"

interface OrderEditProps {
  params: { slug: string };
}

const OrderEdit: React.FC<OrderEditProps> = ({ params }) => {
  return <EditTemplateOrder />;
};

export default OrderEdit;
