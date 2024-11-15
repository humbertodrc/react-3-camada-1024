import {memo} from 'react';

const Increment = ({ onIncrement }) => {
	console.log("Hijo component rendered");
	return <button onClick={onIncrement}>Increment</button>;
};
export default memo(Increment);
