import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/cart-slice";

export const store = configureStore({
	reducer: {
		authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
