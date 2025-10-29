export type Product = {
  product_id: string;
  name: string;
  price: number;
  stock: number;
};
export type CartItem = { id: number; product_id: string; qty: number };
export type CartLine = {
  id: number;
  product_id: string;
  name: string;
  price: number;
  qty: number;
  lineTotal: number;
  stock: number;
};
export type Order = {
  order_id: string;
  created_at: string;
  subtotal: number;
  vat: number;
  total: number;
};
export type OrderItem = {
  id: number;
  order_id: string;
  product_id: string;
  name: string;
  price: number;
  qty: number;
  line_total: number;
};

export const currency = (n: number, locale = "vi-VN", currency = "VND") =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(n);
