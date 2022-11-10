import { ProductType } from "./../types";
import { createSlice } from "@reduxjs/toolkit";

interface CatalogState {
  currentPage: number;
  allProducts: ProductType[];
  amountProductsToShow: number;
}

const initialState: CatalogState = {
  currentPage: 1,
  allProducts: [],
  amountProductsToShow: 12,
};

export const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {
    changeCurrentPage(state, page) {
      state.currentPage = page.payload;
    },
    addProducts(state, products) {
      state.allProducts = products.payload;
    },
    changeAmountProductsToShow(state, amount) {
      state.amountProductsToShow = amount.payload;
    },
  },
});

export const { changeCurrentPage, changeAmountProductsToShow, addProducts } =
  catalogSlice.actions;

export default catalogSlice.reducer;
