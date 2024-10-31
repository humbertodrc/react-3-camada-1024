import Counter from "../counter/Counter";
import styles from "./Card.module.css";

const Card = ({name, price, image}) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={name} />
			<h2 className={styles.titleCard}>{name}</h2>
			<p>$ {price}</p>
			<Counter />
		</div>
	);
};
export default Card;
