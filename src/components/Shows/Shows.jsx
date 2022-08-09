import React from "react";
import { ShowMap } from "../ShowMap/ShowMap";

export const Shows = (props) => {
	// console.log(props);
	return (
		<React.Fragment>
			<ul>
				<li>
					{props.shows?.map(show => {
						return (
							<div key={show._id} className="container mx-auto">
								<div className="flex  w-100 h-96 bg-gradient-to-b from-slate-400 to-slate-200 rounded-lg overflow-hidden m-2" >

									<div className="flex w-1/3">
										<img src={show.logo} alt="fraiser-logo" />
									</div>

									<div className="flex flex-col w-1/3 h-full">
										<div className='font-Hind italic uppercase bg-cyan-800 text-white font-semibold'>Click a place for more info</div>
										<ShowMap show={show} />
									</div>

									<div className='flex flex-col w-1/3 self-center'>
										<h3 className="text-xl lg:text-2xl font-semibold text-left ml-4 font-Raleway mb-2">{show.title}</h3>
										<p className="text-xs lg:text-base font-Raleway text-left m-4">{show.description}</p>
									</div>
								</div>
							</div>
						)
					})}
				</li>
			</ul>


		</React.Fragment>



	)
}