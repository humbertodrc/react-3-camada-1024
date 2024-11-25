import { Link } from "react-router";
import styles from "./Home.module.css";

const products = [
  { id: 1, name: "Producto A", price: 100 },
  { id: 2, name: "Producto B", price: 200 },
  { id: 3, name: "Producto C", price: 300 },
];

const Home = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Productos</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            {product.name} - ${product.price}
            <button className={styles.button} onClick={() => {}}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
      <Link to="/cart" className={styles.link}>
        Ir al carrito
      </Link>
    </main>
  );
};

export default Home;

