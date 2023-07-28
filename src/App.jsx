import Nav from './components/Nav';
import Hero from './components/Hero';
import Container from './components/Container';
import FlipCard from './components/FlipCard';
import Card from './components/Card';

function App() {
	return (
		<section className="">
			{/* Navigatin menu */}
			<Nav />

			{/* Hero Section */}
			<Hero />

			{/* Image AgenSql */}
			<Container className="flex justify-center bg-blue-100 py-[2rem] px-[2rem] md:py-[4rem] md:px-[4rem]">
				<img
					src="./image1.png"
					alt="agensql picture"
					className="md:max-w-[648px]"
				/>
			</Container>

			{/* Key Features */}
			<Container className="flex items-center flex-col py-[2rem] px-[2rem] md:py-[4rem] md:px-[4rem] text-center gap-3">
				<h3>Key Features</h3>
				<p>
					Manage your data with Agens Enterprise Package Essential
					enterprise features such as high availability and sharding
					are provided
				</p>
				<img src="./key-features.png" />
			</Container>

			{/* AgensSQL DB Engine */}

			<Container className="flex gap-2 items-center py-[2rem] text-center flex-col bg-blue-50 ">
				<h3>AgensSQL DB Engine</h3>
				<h4 className="decoration-solid underline">
					Enhanced Data Security
				</h4>
				<p>
					AgensSQL is a PostgreSQL-based DBMS that guarantees optimal
					security and stability.
				</p>
				<div className="flex lg:justify-center lg:flex-row flex-col gap-5 lg:gap-1 px-[4rem] w-full">
					<FlipCard
						src="./Password-Profile.png"
						alt="password profile"
						text1="user password policy reinforces login security"
						text2="excessive failed login attempts lock an account"
						text3="define rules for password complexity"
					/>
					<FlipCard
						src="./Password-Profile.png"
						alt="password profile"
						text1="user password policy reinforces login security"
						text2="excessive failed login attempts lock an account"
						text3="define rules for password complexity"
					/>
					<FlipCard
						src="./Password-Profile.png"
						alt="password profile"
						text1="user password policy reinforces login security"
						text2="excessive failed login attempts lock an account"
						text3="define rules for password complexity"
					/>
				</div>
			</Container>

			{/* Agent Enterprise Package */}
			<Container className="flex flex-col gap-4 py-[2rem] items-center px-pmobile text-center w-[4/5] max-w-fit">
				<h3>Agens Enterprise Package</h3>
				<p>
					Agens Enterprise Package comes with a high availability
					management server that supports backup and data monitoring
					dashboard that helps enterprise customers manage their data
					efficiently.
				</p>
				<div className="card-wrapper flex  flex-col lg:flex-row gap-[3rem] w-full ">
					<div className="flex w-full flex-col items-center mx-[1rem]">
						<h4>Agens HA Manager</h4>
						<div className="text-center w-ful mx-auto ">
							<span className="text-blue-400 pl-[2rem] font-bold  ">
								HA Clustering
							</span>
							<span className="text-center pr-[1rem]">
								– Failover/Failback, Load-balancing
							</span>
						</div>
						<div>
							<img src="./AgentHAM.png" alt="Agent HA Manager" />
						</div>
					</div>
					<div className="w-full flex flex-col ">
						<h3> Agens Enterprise Manager</h3>
						<div className="grid  grid-flow-col auto-cols-[47%] lg:auto-cols-[27%] gap-3 px-2 overflow-x-auto  scroll-smooth w-full card-container lg:flex lg:flex-col">
							<Card
								title="Backup/Restore"
								text1="provides a convenient interface for backup & restore"
								text2="provides backup & restore features for DB and table objects"
							/>
							<Card
								title="DB/Monitoring Dashboard"
								text1="provides a convenient interface for backup & restore"
								text2="provides backup & restore features for DB and table objects"
							/>
							<Card
								title="Schedule Management"
								text1="provides a convenient interface for backup & restore"
								text2="provides backup & restore features for DB and table objects"
							/>
							<Card
								title="Schedule Management"
								text1="provides a convenient interface for backup & restore"
								text2="provides backup & restore features for DB and table objects"
							/>
							<Card
								title="Schedule Management"
								text1="provides a convenient interface for backup & restore"
								text2="provides backup & restore features for DB and table objects"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default App;
