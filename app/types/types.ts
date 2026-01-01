export type ProductType = {
  id: number;
  title: string;
  image: string;
  price: string;
  off?: string | undefined;
  cate: string | undefined;
};

export type CartType = {
  id: number;
  title: string;
  image: string;
  price: string;
  off?: string | undefined;
  qty: number;
}

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: string;
  off?: string | undefined;
  qty: number;
}
