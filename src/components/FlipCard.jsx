import { useState } from 'react';

const FlipCard = (props) => {
	const { src, alt, text1, text2, text3 } = props;

	return (
		<section
			className={`card flex flex-col items-center w-full lg:max-w-[25%] h-[150px]  mx-auto border border-gray-400 bg-white rounded-[10px] hover:border-blue-400 `}>
			{/* front Card */}
			<div className="relative w-full h-full card-inner  ">
				<div className="front bg-white py-[2rem]  flex justify-center items-center rounded-[10px]">
					<img
						src={src}
						alt={alt}
						className="max-w-[50%] md:max-w-[30%] lg:max-w-[50%]"
					/>
				</div>

				{/* Back Card */}
				<div className=" back absolute overflow-hidden bg-white py-pmobile flex  items rounded-[10px]">
					<ul className="flex  list-disc no-underline flex-col gap-2 flex-wrap w-full max-w-[80%] text-start md:justify-normal md:gap-4 justify-between mx-auto text-[10px] pt-1">
						<li>{text1}</li>
						<li>{text2}</li>
						<li>{text3}</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default FlipCard;
