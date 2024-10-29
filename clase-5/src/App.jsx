import "./App.css";
import {DATA} from "./data";

function App() {
	return (
		<main>
			<h1>Conociendo los hooks en React</h1>
			<section>
				{DATA.map((item) => (
					<div className='card' key={item.id}>
						<img src={item.image} alt={item.name} />
						<h2>{item.name}</h2>
            <p>$ {item.price}</p>
					</div>
				))}
			</section>
		</main>
	);
}

export default App;

