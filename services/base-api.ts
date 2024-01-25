import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TAGS: any = [];

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com",
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
