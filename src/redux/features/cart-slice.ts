import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productDataInterface } from "../../interfaces/data.interface";

interface InitialState {
	cart: productDataInterface[];
}

const initialState: InitialState = {
	cart: [],
};

export const cart = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<productDataInterface>) => {
			state.cart.push(action.payload);
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			state.cart = state.cart.filter(
				(product) => product.id !== action.payload
			);
		},
	},
});

export const { addProduct, removeProduct } = cart.actions;

export default cart.reducer;
