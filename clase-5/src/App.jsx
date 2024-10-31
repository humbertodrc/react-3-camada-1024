import "./App.css";
import {DATA} from "./data";
import Card from "./components/card/Card";
import {useState} from "react";

const App = () => {
	const [list, setList] = useState([]);
	const [item, setItem] = useState({
		name: "",
	});

	const handleChange = (event) => {
		setItem({
			...item,
			[event.target.name]: event.target.value,
		});
	};

	const handleAddItemToList = () => {
		setList([...list, item]);
	};

	return (
		<main>
			<h1>Conociendo los hooks en React</h1>
			{/* <section>
				{DATA.map(({id, name, price, image}) => (
					<Card key={id} name={name} price={price} image={image} />
				))}
      </section> */}

			<div>
				<h2>Agregar un elementos con useState</h2>
				<input
					type="text"
					value={item.name}
					name="name"
					onChange={handleChange}
				/>
				<button onClick={handleAddItemToList}>Agregar</button>
				<ul>
					{list.map((item, index) => {
						return <li key={`${item}-${index}`}>{item.name}</li>;
					})}
				</ul>
			</div>
		</main>
	);
};

export default App;
