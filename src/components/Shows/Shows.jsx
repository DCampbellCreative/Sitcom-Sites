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
								<div className="flex w-100 h-96 bg-gradient-to-b from-slate-400 to-slate-200 rounded-lg overflow-hidden my-5" >

									<div className="flex w-1/3">
										<img className="object-scale-down" src={show.logo} alt={`${show.title} Logo`} />
									</div>

									<div className="flex flex-col w-1/3 h-full">
										<p className='flex h-10 w-full font-Hind uppercase bg-cyan-800 text-white text-lg items-center justify-center'>Click a place for more info</p>
										<ShowMap show={show} />
									</div>

									<div className='flex flex-col w-1/3 self-center'>
										<h1 className="text-2xl lg:text-2xl text-left ml-4 font-Work uppercase font-semibold tracking-wide mb-2">{show.title}</h1>
										<p className="text-xs lg:text-base font-Hind text-left ml-4 mr-4 mb-2 font-light">{show.description}</p>
										<h2 className="text-lg lg:text-lg  text-left ml-4 font-Work font-semibold mb-2">Network: {show.network}</h2>
										<h2 className="text-lg lg:text-lg text-left ml-4 font-Work font-semibold mb-2">Originally Aired: {show.start} - {show.end}</h2>
										<h2 className="text-lg lg:text-lg text-left ml-4 font-Work font-semibold">Seasons: {show.seasons}</h2>
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