import { createSlice } from "@reduxjs/toolkit";
// import cartService from "./cartService";
// import { toast } from "react-toastify";

const initialState = {
  cart: [],
  cartQuantity: 0,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// get cart
// export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
//   try {
//     return await cartService.getCart();
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();

//     return thunkAPI.rejectWithValue(message);
//   }
// });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      state.cart.push(action.payload);
      state.cartQuantity = state.cartQuantity + 1;
      console.log(action.payload);
    },
    SET_CART(state, action) {
      state.cart = [...action.payload];
      state.cartQuantity = state.cart.length;
      console.log(action.payload);
    },
    REMOVE_ITEM_CART(state, action) {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload
      );

      state.cartQuantity = state.cart.length;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       //get cart
  //       .addCase(getCart.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(getCart.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.isSuccess = true;
  //         state.cart = action.payload;

  //         console.log(action.payload);
  //       })
  //       .addCase(getCart.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.isSuccess = false;
  //         state.isError = true;
  //         state.message = action.payload;

  //         toast.error(action.payload);
  //       });
  //   },
});

export const { ADD_TO_CART, SET_CART, REMOVE_ITEM_CART } = cartSlice.actions;

export default cartSlice.reducer;
