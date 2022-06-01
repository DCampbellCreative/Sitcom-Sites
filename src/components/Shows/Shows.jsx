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
							<div key={show._id} className="container mx-auto flex">
								<div className="card w-96 border-4 bg-gradient-to-b from-slate-400 to-slate-100 rounded-md m-2" >
									<div className="flex p-10 pb-5 rounded-md">
										<img src={show.logo} alt="fraiserlogo"></img>
									</div>
									<h3 className="text-2xl font-semibold font-Raleway mb-2">{show.title}</h3>
									<p className="text-md font-Raleway mb-3 text-left m-4">{show.description}</p>
									<h3 className="text-2xl font-semibold font-Raleway mb-2">Places</h3>
									<div className="flex-col justify-center mb-3">
										{show.places?.map(place => {
											return <Link key={place._id} to={`/${place._id}`} state={[place]}
												className="text-m font-Raleway m-1 rounded bg-transparent p-1 justify-center self-center w-1/2 border-double border-4 border-sky-500">
												{place.title}
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