import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import Button from './Button';
import { useState } from 'react';
const Nav = () => {
	const active = `text-yellow-500`;
	const [mobileToggle, setMobileToggle] = useState(false);

	const handleNavigation = () => {
		setMobileToggle((prev) => !prev);
	};

	return (
		<section className="flex justify-between w-full  py-pmobile relative bg-white z-10 font-sans ">
			{/* Logo Wrapper */}
			<div className="w-4/5 max-w-full  flex justify-between  mx-auto  items-center ">
				<div className="max-w-[40%] lg:max-w-[15%] ">
					<NavLink to="/">
						<img
							src="./b_logo.png"
							alt="Bitnine Logo"
							className="w-full "
						/>
					</NavLink>
				</div>
				{/* Mobile Menu */}
				<div
					onClick={handleNavigation}
					className="lg:hidden  cursor-pointer">
					<AiOutlineMenu />
				</div>
				<nav className="hidden lg:flex ">
					<ul className=" flex justify-between gap-4 items-center">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? active : ' hover:text-gray-600'
								}>
								PRODUCTS
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/usecase"
								className={({ isActive }) =>
									isActive ? active : 'hover:text-gray-400'
								}>
								USE CASES
							</NavLink>
						</li>
						<li>
							<NavLink
								to="services"
								className={({ isActive }) =>
									isActive ? active : 'hover:text-gray-400'
								}>
								SERVICES
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/resources"
								className={({ isActive }) =>
									isActive ? active : 'hover:text-gray-400'
								}>
								RESOURCES
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/blog"
								className={({ isActive }) =>
									isActive ? active : 'hover:text-gray-400'
								}>
								BLOG
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/company"
								className={({ isActive }) =>
									isActive ? active : 'hover:text-gray-400'
								}>
								COMPANY
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/ir"
								className={({ isActive }) =>
									isActive ? active : 'hover:text-gray-400'
								}>
								IR
							</NavLink>
						</li>

						<Button className="bg-blue-700 rounded-[10px] px-[2rem] py-[0.8rem] text-white ml-2 hover:bg-white hover:border hover:text-blue-700 hover:border-blue-700">
							<NavLink to="/" className="text-[16px]">
								Try Free
							</NavLink>
						</Button>
					</ul>
				</nav>
			</div>
			{/* mobile menu nav */}
			<nav
				className={`absolute  top-[5rem] left-[2rem]  lg:hidden ${
					mobileToggle ? 'flex w-full bg-white z-10' : 'hidden'
				}`}>
				<ul className="w-full">
					<li className="mobile-nav">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? active : ''
							}>
							PRODUCTS
						</NavLink>
					</li>
					<li className="mobile-nav">
						<NavLink
							to="/usecase"
							className={({ isActive }) =>
								isActive ? active : ''
							}>
							USE CASES
						</NavLink>
					</li>
					<li className="mobile-nav">
						<NavLink
							to="services"
							className={({ isActive }) =>
								isActive ? active : ''
							}>
							SERVICES
						</NavLink>
					</li>
					<li className="mobile-nav">
						<NavLink
							to="/resources"
							className={({ isActive }) =>
								isActive ? active : ''
							}>
							RESOURCES
						</NavLink>
					</li>
					<li className="mobile-nav">
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								isActive ? active : ''
							}>
							BLOG
						</NavLink>
					</li>
					<li className="mobile-nav">
						<NavLink
							to="/company"
							className={({ isActive }) =>
								isActive ? active : ''
							}>
							COMPANY
						</NavLink>
					</li>
					<li className="mobile-nav ">
						<NavLink
							to="/ir"
							className={({ isActive }) =>
								isActive ? active : ''
							}>
							IR
						</NavLink>
					</li>

					<Button className="bg-blue-700 hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 py-[0.5rem] px-[2rem] rounded-[10px] text-white my-[1rem] mx-[1.5rem] border-b border-[grey]">
						<NavLink to="/" className="text-[16px]">
							Try Free
						</NavLink>
					</Button>
				</ul>
			</nav>
		</section>
	);
};

export default Nav;
