import {useMemo, useState} from "react";
import {data} from "../database";

const averageCalc = (list) => {
	console.log("Calculando Average");
	const suma = list.reduce((a, b) => a + b.amount, 0);
	return `el promedio es ${suma / list.length}`;
};

const Statistics = () => {
	const [show, setShow] = useState(false);

	const average = useMemo(() => averageCalc(data), []);
	// const average = averageCalc(data);

	console.log("Renderizado de Statistics");

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<div>
			<h2>Statistics {average}</h2>
			<button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
		</div>
	);
};
export default Statistics;
