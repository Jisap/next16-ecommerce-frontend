import { ProductType } from "@/app/types/types";
import { toast } from "react-toastify";

export const addToWishlist = (product: ProductType): void => {
  const stored = localStorage.getItem("wishlist");
  let wishlist: ProductType[] = stored ? JSON.parse(stored) : [];

  const exists = wishlist.find((item: ProductType) => item.id === product.id);
  if (exists) {
    toast.error("Product already exists in wishlist!");
    return;
  }

  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Product added to wishlist!");
};

export const addToCart = (product: ProductType): void => {
  const stored = localStorage.getItem("cart");
  let cart: (ProductType & { qty: number })[] = stored ? JSON.parse(stored) : [];

  const exists = cart.find((item: ProductType) => item.id === product.id);
  if (exists) {
    toast.error("Product already exists in cart!");
    return;
  }

  cart.push({ ...product, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Product added to cart!");
};


