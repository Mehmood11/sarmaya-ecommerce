import { baseApi } from "../base-api";

export const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProductList: builder.query({
      query: () => ({
        url: `products`,
        method: "GET",
      }),
    }),
    productList: builder.query({
      query: ({ cat }) => ({
        url: `products/category/${cat}`,
        method: "GET",
      }),
    }),
    categoriesList: builder.query({
      query: () => ({
        url: "products/categories",
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

export const {
  useProductListQuery,
  useCategoriesListQuery,
  useSingleProductListQuery,
  useAllProductListQuery,
} = ProductApi;
