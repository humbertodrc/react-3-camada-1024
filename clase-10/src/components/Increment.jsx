const Increment = ({onIncrement}) => {
	console.log("Child component rendered");
	return <button onClick={onIncrement}>Increment</button>;
};
export default Increment;
