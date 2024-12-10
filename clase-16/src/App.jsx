import "./App.css";
import {useFetch} from "./hooks/useFetch";
import {useForm} from "./hooks/useForm";

function App() {
	const {values, handleChange, resetForm} = useForm({name: "", email: ""});
	const {data, loading, error} = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(values);
		resetForm();
	};

	console.log(data, loading, error);

	return (
    <section>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div>
        {data && data.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
			<div>
				<h1>Custom Hook</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Nombre</label>
						<input
							type="text"
							id="name"
							name="name"
							value={values.name}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={values.email}
							onChange={handleChange}
						/>
					</div>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</section>
	);
}

export default App;
