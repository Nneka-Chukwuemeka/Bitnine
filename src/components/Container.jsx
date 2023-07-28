const Container = (props) => {
	const { children, className, ...prop } = props;
	return (
		<div className={`${className}`} {...prop}>
			{children}
		</div>
	);
};

export default Container;
