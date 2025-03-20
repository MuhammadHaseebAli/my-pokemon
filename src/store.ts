import { configureStore } from "@reduxjs/toolkit";
import { pokemon } from "./services/pokemon";

export const store = configureStore({
  reducer: {
    [pokemon.reducerPath]: pokemon.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemon.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
