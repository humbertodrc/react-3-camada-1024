/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useEffect } from "react";
import {getProducts} from "../service/getProducts";
import {useReducer} from "react";

const initialState = {
	product: [],
	cart: [],
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCT":
			return {
				...state,
				product: action.payload,
			};
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case "DELETE_TO_CART":
			return {
				...state,
				cart: state.cart.filter((product) => product.id !== action.payload),
			};
	}
};

const CartContext = createContext();

export const CartProvider = ({children}) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (product) => {
		console.log("Agregar al carrito", product);
		dispatch({ type: "ADD_TO_CART", payload: product });
	};

	const deleteToCart = (id) => {
		console.log("Eliminar del carrito", id);
		dispatch({type: "DELETE_TO_CART", payload: id});
	};

	useEffect(() => {
		getProducts().then((data) => {
			dispatch({type: "SET_PRODUCT", payload: data});
		});
	}, []);

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				addToCart,
				deleteToCart,
				products: state.product,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
