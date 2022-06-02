import React from "react";
import { Outlet, Link } from "react-router-dom";

import './Shows.css'

export const Shows = (props) => {
	return (
		<React.Fragment>
			<ul>
				<li>
					{props.shows?.map(show => {
						return (
							<div key={show._id} className="container mx-auto">
								<div className="w-96 bg-gradient-to-b from-slate-400 to-slate-200 rounded-lg overflow-hidden m-2" >
									<div className="pb-5">
										<img src={show.logo} alt="fraiserlogo"></img>
									</div>
									<h3 className="text-3xl font-light text-left ml-4 font-Raleway mb-2">{show.title}</h3>
									<p className="text-base font-Raleway text-left m-4">{show.description}</p>
									<h3 className="text-3xl font-light text-left ml-4 font-Raleway mb-2">Places</h3>
									<div className="flex flex-col">
										{show.places?.map(place => {
											return <Link key={place._id} to={`/${place._id}`} state={[place]}
												className="flex text-left items-center text-xl font-Raleway m-1 ml-4 last:mb-4 pl-2 pr-2 rounded bg-cyan-700 font-medium text-white w-2/3 h-12">

												<div className="w-5/6">{place.title}</div><div className="w-1/6 font-semibold text-center">{'>'}</div>

											</Link>
										})}
									</div>
								</div>
							</div>
						)
					})}
				</li>
			</ul>
			<Outlet />

		</React.Fragment>



	)
}