import styles from "./Cart.module.css";

const dataFromContext = [{id: 1, name: "Producto A", price: 100}];

const Cart = () => {
	return (
		<main className={styles.container}>
			<h1 className={styles.title}>Carrito</h1>
			{dataFromContext.length === 0 ? (
				<p className={styles.emptyMessage}>No hay productos en el carrito</p>
			) : (
				<ul className={styles.productList}>
					{dataFromContext.map((product) => (
						<li key={product.id} className={styles.productItem}>
							{product.name} - ${product.price}
							<button className={styles.button} onClick={() => {}}>
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
