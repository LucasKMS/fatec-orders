export interface IOrder {
  id: number;
  data: string;
  cpf: string;
  forma_pagamento: string;
  quantidade_itens: number;
  valor_total: number;
}
