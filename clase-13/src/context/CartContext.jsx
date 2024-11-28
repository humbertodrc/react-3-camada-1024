/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useEffect, useState} from "react";
import {getProducts} from "../service/getProducts";

const CartContext = createContext();

export const CartProvider = ({children}) => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		console.log("Agregar al carrito", product);
		setCart((prevState) => [...prevState, product]);
	};

	const deleteToCart = (id) => {
		setCart((prevState) => prevState.filter((product) => product.id !== id));
	};

	useEffect(() => {
		getProducts().then((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteToCart,
				products,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
