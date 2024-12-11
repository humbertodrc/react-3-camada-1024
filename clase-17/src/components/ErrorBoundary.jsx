import React, {Component} from "react"; // Importa React y la clase base Component
import Swal from "sweetalert2";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		// Inicializa el estado para rastrear si ocurrió un error
		this.state = {hasError: false};
	}

	// Método estático que actualiza el estado en caso de error
	static getDerivedStateFromError(error) {
		// Cambia el estado para indicar que ocurrió un error
		return {hasError: true};
	}

	// Captura los detalles del error y la información adicional
	componentDidCatch(error, errorInfo) {
		// Puedes enviar esta información a un servicio externo como Sentry
		console.error("Error capturado por Error Boundary:", error, errorInfo);

		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong!",
			footer: '<a href="#">Why do I have this issue?</a>',
		});
	}

	render() {
		// Si ocurrió un error, muestra la UI de fallback
		if (this.state.hasError) {
			return (
				<div style={{textAlign: "center", color: "red"}}>
					<h1>Algo salió mal.</h1>
					<p>Por favor, recarga la página o intenta más tarde.</p>
				</div>
			);
		}

		// Si no hay errores, renderiza los componentes hijos normalmente
		return this.props.children;
	}
}

export default ErrorBoundary; // Exporta el componente para usarlo en otras partes de la aplicación
