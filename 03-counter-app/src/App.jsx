import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";

export const App = () => {
	return (
		<>
			<CounterApp value={8} />
			<FirstApp title="FirstApp" text={undefined} isLoading={false}>
				<p>Lorem ipsum dolor sit.</p>
			</FirstApp>
		</>
	);
};
