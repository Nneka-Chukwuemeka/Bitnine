import Form from './Form';

const SignUp = () => {
	return (
		<div className="w-full h-[100vh] flex ">
			<div className="sign-image hidden lg:block w-[50%] h-full"></div>
			<div className="flex justify-center w-full lg:w-[50%] items-center">
				<Form />
			</div>
		</div>
	);
};

export default SignUp;
