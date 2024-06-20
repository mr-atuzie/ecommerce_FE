import { createSlice } from "@reduxjs/toolkit";

const cart =
  sessionStorage.getItem("cart") !== null
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

const cartQuantity =
  sessionStorage.getItem("cartQuantity") !== null
    ? JSON.parse(sessionStorage.getItem("cartQuantity"))
    : 0;

const cartTotal =
  sessionStorage.getItem("cartTotal") !== null
    ? JSON.parse(sessionStorage.getItem("cartTotal"))
    : 0;

const order =
  sessionStorage.getItem("order") !== null
    ? JSON.parse(sessionStorage.getItem("order"))
    : null;

const initialState = {
  cart: cart,
  cartQuantity,
  cartTotal,
  order,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      const product = action.payload;

      state.cart.push(product);
      state.cartQuantity++;
      state.cartTotal = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      sessionStorage.setItem(
        "cart",
        JSON.stringify(state.cart.map((item) => item))
      );

      sessionStorage.setItem(
        "cartQuantity",
        JSON.stringify(state.cartQuantity)
      );

      sessionStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },
    SET_CART(state, action) {
      const product = action.payload;

      state.cart = product;
      state.cartQuantity = product.length;
      state.cartTotal = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      sessionStorage.setItem(
        "cart",
        JSON.stringify(state.cart.map((item) => item))
      );

      sessionStorage.setItem(
        "cartQuantity",
        JSON.stringify(state.cartQuantity)
      );

      sessionStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },
    REMOVE_ITEM_CART(state, action) {
      const product = action.payload;

      state.cartQuantity--;
      state.cart = state.cart.filter((item) => item.id !== product.id);
      state.cartTotal = Number(state.cartTotal) - Number(product.price);

      sessionStorage.setItem(
        "cart",
        JSON.stringify(state.cart.map((item) => item))
      );

      sessionStorage.setItem(
        "cartQuantity",
        JSON.stringify(state.cartQuantity)
      );

      sessionStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },
    CLEAR_CART: (state, action) => {
      state.cartQuantity = 0;
      state.cart = [];
      state.cartTotal = 0;

      sessionStorage.setItem(
        "cart",
        JSON.stringify(state.cart.map((item) => item))
      );

      sessionStorage.setItem(
        "cartQuantity",
        JSON.stringify(state.cartQuantity)
      );

      sessionStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },
  },
});

export const { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM_CART, SET_CART } =
  cartSlice.actions;

export default cartSlice.reducer;
