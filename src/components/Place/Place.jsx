import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { LocationMap } from "../Map/LocationMap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Place.css"

export const Place = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const data = location.state;
	console.log(data);


	return (
		<div className="container mx-auto">
			{data?.map(place => {
				return <React.Fragment>
					<div className="flex flex-row">
						<h1 className="w-1/2 text-2xl mb-3 mt-3 font-semibold font-Raleway text-left">{place.title}</h1>
						<button className="w-1/2 text-xl mb-3 mt-3 font-light font-Raleway text-right" onClick={() => navigate(-1)}>Back</button>
					</div>

					<div className="flex flex-row mb-5">
						<img className="w-2/3 mr-8 rounded-lg" src={place.imageUrl} alt={place.title} />
						<LocationMap center={place.location} />
					</div>

					<div className="flex flex-row">

						<div className="w-1/2 mr-10">
							<h3 className="text-left text-2xl mb-3 font-semibold font-Raleway">Description</h3>
							<p className="text-justify font-Raleway">{place.description}</p>
						</div>

						<div className="w-1/2">
							<h3 className="text-left mb-3 text-2xl font-semibold font-Raleway">Residents</h3>
							{place.residents?.map((resident) => (
								<div className="flex flex-row">

									<img
										className="border-4 border-cyan-700 mr-3 rounded-full w-32 hover:opacity-75 hover:cursor-pointer"
										src={resident.avatarUrl}
										alt={resident.name}
									/>
								</div>
							))}
						</div>

					</div>
				</React.Fragment>
			}
			)}
		</div>
	)
}