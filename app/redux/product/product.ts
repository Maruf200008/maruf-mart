import { apiSlice } from "../apiSlice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (tag) => `product/${tag}`,
    }),
  }),
});

export const { useGetProductQuery } = extendedApi;
