import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, children }) => {
	const message = "puri";
	const sayHello = () => "Bienvenido!";

	if (!title) {
		throw {
			message: "El title no existe",
			code: 403,
		};
	}

	return (
		<>
			<h1 className="title">{title}</h1>
			<h2>{message.toUpperCase()}</h2>
			<h3>{subtitle}</h3>
			<h4>{sayHello()}</h4>
			{children}
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.element.isRequired,
};

FirstApp.defaultProps = {
	subtitle: "Hello",
};
