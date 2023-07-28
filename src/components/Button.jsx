const Button = (props) => {
	const { children, className, ...prop } = props;
	return (
		<button className={`${className}`} {...prop}>
			{children}
		</button>
	);
};
export default Button;
