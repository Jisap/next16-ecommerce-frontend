import { toast } from "react-toastify";

export const addToWishlist = (product: any) => {
  const stored = localStorage.getItem("wishlist");
  let wishlist = stored ? JSON.parse(stored) : [];

  const exists = wishlist.find((item: any) => item.id === product.id);
  if (exists) {
    toast.error("Product already exists in wishlist!");
    return;
  }

  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Product added to wishlist!");
};

export const addToCart = (product: any) => {
  const stored = localStorage.getItem("cart");
  let cart = stored ? JSON.parse(stored) : [];

  const exists = cart.find((item: any) => item.id === product.id);
  if (exists) {
    toast.error("Product already exists in cart!");
    return;
  }

  cart.push({ ...product, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Product added to cart!");
};
