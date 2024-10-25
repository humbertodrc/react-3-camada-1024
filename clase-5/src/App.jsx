import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import {DATA} from "./data";
import { goku } from './data/goku';

function App() {
	return (
		<main>
			<Navbar />
			<section>
				{DATA.map(({character, image, price, amiiboSeries, tail}) => (
					<Card
						key={tail}
						character={character}
						image={image}
						price={price}
						amiiboSeries={amiiboSeries}
					/>
        ))}
        
        {JSON.stringify(goku, null, 2)}
			</section>
		</main>
	);
}

export default App;
