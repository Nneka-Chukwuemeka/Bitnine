const Card = (props) => {
	const { title, text1, text2, ...prop } = props;
	return (
		<section className="rounded-[10px] border border-gray-400 flex w-full hover:border-yellow-400 max-w-[100%] h-[100px]]">
			<div className="w-full flex flex-col relative">
				{/* Card Front */}
				<div className="border-b border-gray-400  flex justify-center items-center w-full z-10 bg-white rounded-[10px] h-[100%] front-card ">
					<p>{title}</p>
				</div>

				{/* Card Back */}
				<div className="bg-blue-400 overflow-hidden rounded-[9px] text-start absolute top-0 z-0 w-full h-full back-card">
					<ul className="list-disc max-w-[80%] mx-auto text-[10px] md:text-[14px]">
						<li> {text1} </li>
						<li> {text2} </li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Card;
