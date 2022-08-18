import React from "react";
import { ShowMap } from "../ShowMap/ShowMap";
import { Character } from "../Character/Character";

export const Shows = ({ shows }) => {
	// console.log(props);
	return (
		<React.Fragment>
			<h1 className="text-3xl text-left ml-8 m-4 font-Work uppercase font-semibold tracking-wide mb-2">Shows</h1>
			<ul>
				<li>
					{shows?.map(show => {
						return (
							<div key={show._id} className="container mx-auto">
								<div className="flex w-100 h-96 mt-5 mb-20" >
									<div className="flex flex-col w-1/2 h-full">
										<h2 className='flex h-10 w-full font-Hind uppercase bg-cyan-800 text-white text-lg items-center justify-center'>Click a place for more info</h2>
										<ShowMap show={show} />
									</div>

									<div className='flex flex-col w-1/2 self-center'>
										<h1 className="text-2xl text-left ml-4 font-Work uppercase font-semibold tracking-wide mb-2">{show.title}</h1>
										<p className="text-base font-Hind text-left ml-4 mr-4 mb-2 font-light">{show.description}</p>
										<h2 className="text-lg text-left ml-4 font-Work font-semibold mb-2">Network: {show.network}</h2>
										<h2 className="text-lg text-left ml-4 font-Work font-semibold mb-2">Originally Aired: {show.start} - {show.end}</h2>
										<h2 className="text-lg text-left ml-4 font-Work font-semibold">Seasons: {show.seasons}</h2>
										<div className="flex flex-row text-center">
											{show.characters.map(character =>
												<div className="flex-col items-center justify-center w-24 m-2" key={character._id} >

													<img
														className="flex border-4 border-slate-400 rounded-full w-24 shadow-md hover:border-slate-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:cursor-pointer mx-auto"
														src={character.avatarUrl}
														alt={character.name}
													/>

													<p className="flex w-full mx-auto text-center font-Hind text-base uppercase semibold">{character.name}</p>
												</div>
											)}
										</div>
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