const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);
	};
	return (
		<section>
			<h1>Login</h1>
			<form onSubmit={handleSubmit} data-testid="login-form">
				<label>
					Email
					<input type="email" role="email" data-testid="email" />
				</label>
				<label>
					Password
					<input type="password" role="password" data-testid="password" />
				</label>
				<button type="submit">Ingresar</button>
			</form>
		</section>
	);
};
export default Login;
