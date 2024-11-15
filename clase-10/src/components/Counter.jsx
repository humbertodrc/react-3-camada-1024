import {useCallback, useState} from "react";
import Increment from "./Increment";

const Counter = () => {
	const [count, setCount] = useState(0);

	// Función para incrementar el contador (se crea en cada renderizado)
	// const increment = () => {
	// 	setCount(count + 1);
	// };

	const increment = useCallback(() => {
		setCount((prevState) =>
		{
			console.log(prevState);
			return prevState + 1;
		}
		);
	}, []);

	console.log("Padre Counter component");

	return (
		<div>
			<p>Count: {count}</p>
			<Increment onIncrement={increment} />
		</div>
	);
};
export default Counter;
