import Button from './Button';

const Hero = () => {
	return (
		<section className="w-full font-sans z-0 pb-[4rem] lg:pt-[2rem] ">
			<div className="w-4/5 mx-auto py-[1rem] md:w-5/6 md:max-w-full flex justify-center">
				<img src="./AgenSQL-Logo.png" alt="AgenSql Logo" />
			</div>
			<div className="w-4/5 flex flex-col items-center text-center mx-auto pb-[1rem] md:w-5/6 md:max-w-full">
				<h3>
					An integration of Bitnine’s DB technology and PG expertise
				</h3>
				<p>
					AgensSQL is an all-new relational DBMS based on PostgreSQL,
					with years of expertise and knowledge accumulated through
					database research and development.
				</p>
				<p>
					The enterprise package, along with AgensSQL engine, is an
					all-in-one solution that ensures the efficiency and
					scalability of data management.
				</p>
				<p>
					Get AgensSQL now for stable operation and management
					services at a reduced maintenance cost.
				</p>
			</div>
			<div className="btn-container grid w-full grid-flow-col auto-cols-[64%] py-3 px-5 overflow-x-auto gap-3 scroll-smooth md:flex md:gap-4 md:justify-between md:px-[4rem] md:w-5/6 md:max-w-full md:mx-auto">
				<Button className="bg-blue-700 text-white rounded-[10px] py-[0.8rem] px-[0.5rem] text-lg md:px-[2rem]  md:text-xl hover:bg-yellow-400 hover:text-blue-800">
					Contact
				</Button>
				<Button className="bg-blue-700 text-white rounded-[10px] py-[0.8rem] px-[0.5rem] text-lg md:px-[2rem]  md:text-xl hover:bg-yellow-400 hover:text-blue-800">
					Brochure
				</Button>
				<Button className="bg-blue-700 text-white rounded-[10px] py-[0.8rem] px-[0.5rem] text-lg md:px-[2rem] lg:px-[3rem]  md:text-xl hover:bg-yellow-400 hover:text-blue-800">
					Blog
				</Button>
			</div>
		</section>
	);
};

export default Hero;
