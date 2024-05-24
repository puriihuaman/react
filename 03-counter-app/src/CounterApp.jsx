import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const handleIncrement = () => setCounter(counter + 1);
	const handleDecrement = () => setCounter(counter - 1);
	const handleReset = () => setCounter(0);

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>

			<button onClick={handleIncrement}>+</button>
			<button onClick={handleDecrement}>-</button>
			<button onClick={handleReset}>Reset</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
	value: 0,
};
