import {useState} from "react";
import styles from "./Form.module.css";
import { validateText } from '../../utils/validator';

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		lastname: "",
		address: "",
		email: "",
		phone: "",
	});
	const [showSummary, setShowSummary] = useState(false);
	// const [error, setError] = useState(false);
	const [errors, setErrors] = useState({
		name: false,
		lastname: false,
		address: false,
		email: false,
		phone: false,
	});

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const regexAddress = /^[a-zA-Z0-9\s,]+$/;
		const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		const regexPhone = /^[0-9]{10,14}$/;

		let errorsCustom = {
			name: validateText(formData.name),
			lastname: formData.lastname.trim().length <= 3,
			address: !regexAddress.test(formData.address),
			email: !regexEmail.test(formData.email),
			phone: !regexPhone.test(formData.phone),
    };
    
    setErrors(errorsCustom);

    if (Object.values(errorsCustom).some(error => error)) {
      return;
    }

    setShowSummary(true);


		// if (
		// 	formData.name.trim().length > 3 &&
		// 	formData.lastname.trim().length > 3 &&
		// 	regexAddress.test(formData.address) &&
		// 	regexEmail.test(formData.email) &&
		// 	regexPhone.test(formData.phone)
		// ) {
		// 	setShowSummary(true);
			// setError(false);
		// } else {
			// setError(true);
		// }
	};

	return (
		<div className={styles.formWrapper}>
			{/* {error && (
				<p className={styles.error}>Todos los campos son obligatorios</p>
			)} */}
			{!showSummary ? (
				<>
					<h2>Orden de compra</h2>
					<form className={styles.formContainer} onSubmit={handleSubmit}>
						<div className={styles.formGroup}>
							<label htmlFor="name">Nombre:</label>
							<input
								type="text"
								name="name"
								id="name"
								value={formData.name}
								onChange={handleChange}
              />
              {errors.name && <p className={styles.error}>El nombre es obligatorio</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="lastname">Apellido:</label>
							<input
								type="text"
								name="lastname"
								id="lastname"
								value={formData.lastname}
								onChange={handleChange}
              />
              {errors.lastname && <p className={styles.error}>El apellido es obligatorio</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="address">Direccion:</label>
							<input
								type="text"
								name="address"
								id="address"
								value={formData.address}
								onChange={handleChange}
              />
              {errors.address && <p className={styles.error}>La direccion es obligatoria</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="email">Correo:</label>
							<input
								type="email"
								name="email"
								id="email"
								value={formData.email}
								onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>El correo es obligatorio</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="phone">Telefono:</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								value={formData.phone}
								onChange={handleChange}
              />
              {errors.phone && <p className={styles.error}>El telefono es obligatorio</p>}
						</div>
						<button className={styles.submitButton} type="submit">
							Enviar
						</button>
					</form>
				</>
			) : (
				<>
					<h2>Datos del envio</h2>
					<section className={styles.summary}>
						<p>Nombre: {formData.name}</p>
						<p>Apellido: {formData.lastname}</p>
						<p>Direccion{formData.address}</p>
						<p>Correo: {formData.email}</p>
						<p>Telefono: {formData.phone}</p>
					</section>
				</>
			)}
		</div>
	);
};

export default Form;
