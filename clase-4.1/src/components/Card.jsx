import styles from './Card.module.css';

const Card = ({ character, image, amiiboSeries, price }) => {
	return (
		<article className={styles.card}>
			<h2>{character}</h2>
			<img src={image} alt={amiiboSeries} />
			<div>
				<p>Precio {price}</p>
			</div>
		</article>
	);
};
export default Card;
