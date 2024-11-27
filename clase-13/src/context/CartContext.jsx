/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useEffect, useState} from "react";

// En la carpeta de servicios, crear un archivo llamado api.js con el siguiente contenido:
const getProducts = async () => {
	try {
		const endPoint = "https://rickandmortyapi.com/api/character";
		const response = await fetch(endPoint);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.log("Error al obtener los productos", error);
	}
};

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
