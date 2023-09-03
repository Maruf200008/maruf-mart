import { apiSlice } from "../apiSlice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFlashSale: builder.query({
      query: () => `flashSale`,
    }),
  }),
});

export const { useGetFlashSaleQuery } = extendedApi;
