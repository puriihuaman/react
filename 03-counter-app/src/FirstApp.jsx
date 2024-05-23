export const FirstApp = (props) => {
	console.log(props);
	const message = "puri";
	const sayHello = () => "Hello world";

	return (
		<>
			<h1 className="title">FirstApp</h1>
			<h2>{message.toUpperCase()}</h2>
			<h3>{sayHello()}</h3>
			{props.children}
		</>
	);
};
