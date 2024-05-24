import axios from "axios";
export const API_URL = `/api/v1/cart`;

const addToCart = async (cartData) => {
  const res = await axios.post(API_URL, cartData);

  return res.data;
};

const removeFromCart = async (id) => {
  const res = await axios.delete(API_URL + id);

  return res.data;
};

const getCart = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};

const cartService = {
  getCart,
  addToCart,
  removeFromCart,
};

export default cartService;
