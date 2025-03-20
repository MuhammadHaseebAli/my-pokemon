import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(import.meta)
export const pokemon = createApi({
  reducerPath: "pokemon",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: (offset = 0, limit = 10) => `pokemon?offset=${offset}&limit=${limit}`,
    }),
    getPokemonDetails: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemon;