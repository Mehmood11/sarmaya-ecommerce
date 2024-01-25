import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productArray: [],
};
const ProductSlices = createSlice({
  name: "Product",
  initialState,
  reducers: {
    productArrayFunc: (state: any, action: any) => {
      state.productArray.push({ ...action.payload, totalQuantity: 1 });
    },
    increaseQuantity: (state: any, action) => {
      const payload = action.payload;
      const updatedItemToCart = [...state.productArray];

      const indexNumber: any = state.productArray.findIndex(
        (item: any) => item?.id === payload?.id
      );

      updatedItemToCart[indexNumber] = {
        ...state.productArray[indexNumber],
        totalQuantity: state.productArray[indexNumber]?.totalQuantity + 1,
      };

      state.productArray = updatedItemToCart;
    },
    decreaseQuantity: (state: any, action) => {
      const payload = action.payload;
      const updatedItemToCart = [...state.productArray];

      const indexNumber: any = state.productArray.findIndex(
        (item: any) => item?.id === payload?.id
      );

      if (state.productArray[indexNumber].totalQuantity > 1) {
        updatedItemToCart[indexNumber] = {
          ...state.productArray[indexNumber],
          totalQuantity: state.productArray[indexNumber]?.totalQuantity - 1,
        };
      }

      state.productArray = updatedItemToCart;
    },

    deleteProduct: (state: any, action: any) => {
      const productIdToDelete = action.payload;
      state.productArray = state.productArray.filter(
        (item: any) => item.id !== productIdToDelete
      );
    },
  },
});
export const {
  productArrayFunc,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} = ProductSlices.actions;
export const { reducer: ProductSlice } = ProductSlices;
