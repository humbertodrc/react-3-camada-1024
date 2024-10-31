import "./App.css";
import {DATA} from "./data";
import Card from "./components/card/Card";
import Form from './components/form/Form';

const App = () => {

	return (
		<main>
			<h1>Formularios</h1>
			<div>
				<Form />
			</div>
			<section>
				{DATA.map(({id, name, price, image}) => (
					<Card key={id} name={name} price={price} image={image} />
				))}
      </section>
		</main>
	);
};

export default App;
