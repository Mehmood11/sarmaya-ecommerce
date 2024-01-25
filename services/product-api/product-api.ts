import { baseApi } from "../base-api";

export const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    productList: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    singleProductList: builder.query({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProductListQuery, useSingleProductListQuery } = ProductApi;
