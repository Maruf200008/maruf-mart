import { apiSlice } from "../apiSlice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJustForYou: builder.query({
      query: () => `justForYou`,
    }),
  }),
});

export const { useGetJustForYouQuery } = extendedApi;
