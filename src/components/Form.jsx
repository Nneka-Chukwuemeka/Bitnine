import { NavLink } from 'react-router-dom';
const Form = (props) => {
	const { title, text, login } = props;
	return (
		<section className="w-full  flex lg:pt-[4rem] flex-col items-center  gap-10 md:gap-20 md:max-w-[648px] md:mx-auto">
			<form className="flex flex-col gap-4 w-full px-4">
				<div className="input-group text-center">
					<h3 className="text-blue-500">
						{title || 'Get Started Now'}
					</h3>
				</div>
				<div className="flex flex-col gap-2 px-[1rem]">
					<label className="font-bold text-lg" htmlFor="email">
						E-mail :
					</label>
					<input
						id="email"
						type="email"
						placeholder="Enter Email Address"
						className="border border-gray-500 p-3 rounded-[12px]"
					/>
				</div>
				<div className="flex flex-col gap-2 px-[1rem]">
					<label className="font-bold text-lg" htmlFor="password">
						Password :
					</label>
					<input
						id="password"
						type="password"
						placeholder="Enter Password Address"
						className="border border-gray-500 p-3 rounded-[12px]"
					/>
				</div>
				<button
					type="submit"
					className="mt-5 bg-yellow-300 py-3 rounded-[12px] text-blue-600 mx-[1rem] text-lg hover:bg-white hover:border hover:border-yellow-600">
					{'Sign Up' || text}
				</button>
			</form>
			<div>
				{login ? (
					<p>
						Do not have an account{' '}
						<NavLink to="/sign-up" className=" text-blue-600">
							Sign Up
						</NavLink>
					</p>
				) : (
					<p>
						I have an account?{' '}
						<NavLink to="/login" className=" text-blue-600">
							Login
						</NavLink>
					</p>
				)}
			</div>
		</section>
	);
};

export default Form;
