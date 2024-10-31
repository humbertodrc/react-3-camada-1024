import styles from "./Form.module.css";

const Form = () => {

	return (
    <div className={styles.formWrapper}>
      <h2>Orden de compra</h2>
      <form className={styles.formContainer}></form>
      <h2>Datos del envio</h2>
      <section className={styles.summary}></section>
		</div>
	);
};

export default Form;
