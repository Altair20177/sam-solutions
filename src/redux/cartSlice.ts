import { ProductType } from "./../types";
import { createSlice } from "@reduxjs/toolkit";

interface ProductsAmount {
  [key: string]: number;
}

interface CartState {
  cartItems: Array<ProductType>;
  productsAmount: ProductsAmount;
}

const initialState: CartState = {
  cartItems: [],
  productsAmount: {},
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart(state, product) {
      if (product.payload.id in state.productsAmount)
        state.productsAmount[product.payload.id]++;
      else {
        state.cartItems.push(product.payload);
        state.productsAmount[product.payload.id] = 1;
      }
    },
    removeItemsFromCart(state, id) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== id.payload
      );
      delete state.productsAmount[id.payload];
    },
    removeAllItemsFromCart(state) {
      state.cartItems.length = 0;

      for (let product in state.productsAmount)
        delete state.productsAmount[product];
    },
  },
});

export const { addItemToCart, removeItemsFromCart, removeAllItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;
