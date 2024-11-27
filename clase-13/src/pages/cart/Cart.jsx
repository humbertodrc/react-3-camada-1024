import {useCart} from "../../context/CartContext";
import styles from "./Cart.module.css";

// const dataFromContext = [];

const Cart = () => {
	const {cart, deleteToCart} = useCart();

	return (
		<main className={styles.container}>
			<h1 className={styles.title}>Carrito</h1>
			{cart.length === 0 ? (
				<p className={styles.emptyMessage}>No hay productos en el carrito</p>
			) : (
				<ul className={styles.productList}>
					{cart.map((product) => (
						<li key={product.id} className={styles.productItem}>
							{product.name} - ${product.price}
							<button
								className={styles.button}
								onClick={() => deleteToCart(product.id)}
							>
								Eliminar del carrito
							</button>
						</li>
					))}
				</ul>
			)}
		</main>
	);
};

export default Cart;
