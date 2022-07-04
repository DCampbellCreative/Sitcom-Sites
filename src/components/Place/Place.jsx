import React, { useState } from "react";
import { Character } from "../Character/Character";
import { LocationMap } from "../Map/LocationMap";
import { useLocation, useNavigate, Link, Outlet } from "react-router-dom";
import "./Place.css"

export const Place = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const data = location.state;

	// separates data 
	const place = data[0];
	const characters = data[1];

	// filters data for each of array of characters by object id
	const residents = characters?.filter(char => place.residents.includes(char._id))
	const regulars = characters?.filter(char => place.regulars.includes(char._id))
	const employees = characters?.filter(char => place.employees.includes(char._id))

	const [showModal, setShowModal] = useState(false);
	const [selectedData, setSelectedData] = useState({});

	// passes only data for selected character to modal
	const handleClick = (selectedRec) => {
		setSelectedData(selectedRec);
		setShowModal(true);
	};

	// console.log(residents)

	return (
		<div className="container mx-auto h-screen">
			<React.Fragment>
				<div className="flex flex-row">
					<h1 className="w-1/2 text-xl lg:text-2xl mb-3 mt-3 font-semibold font-Raleway text-left">{place.title}</h1>
					<button className="w-1/2 text-xl lg:text-xl mb-3 mt-3 font-light font-Raleway text-right" onClick={() => navigate(-1)}>Back</button>
				</div>

				<div className="flex flex-row mb-5">
					<img className="w-2/3 mr-8 rounded-lg" src={place.imageUrl} alt={place.title} />
					<LocationMap className="w-1/3 h-96" center={place.location} />
				</div>

				<div className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/2 mr-10 mb-5">
						<h3 className="text-left text-xl lg:text-2xl mb-3 font-semibold font-Raleway">Description</h3>
						<p className="text-justify text-sm lg:text-lg font-Raleway">{place.description}</p>
					</div>

					{/* renders character list by type if array is > 0 */}
					{residents?.length > 0 ?
						<div className="width-full lg:w-1/2">
							<h3 className="text-left mb-3 text-xl lg:text-2xl font-semibold font-Raleway">Residents</h3>
							<div className="flex flex-row">
								{residents?.map(character =>
									<div className="flex flex-col mr-3" key={character._id} >
										<button onClick={() => handleClick(character)}>
											<img
												className="flex border-4 border-cyan-700 rounded-full w-32 hover:opacity-75 hover:cursor-pointer"
												src={character.avatarUrl}
												alt={character.name}
											/>
										</button>
										<Character key={character._id} showModal={showModal} setShowModal={setShowModal} details={selectedData} />
										<p className="text-center font-Raleway font-light">{character.name}</p>
									</div>
								)}
							</div> </div> :
						<div></div>
					}

					{regulars.length > 0 ?
						<div className="width-full lg:w-1/2">
							<h3 className="text-left mb-3 text-xl lg:text-2xl font-semibold font-Raleway">Regulars</h3>
							<div className="flex flex-row">
								{regulars.map(character =>
									<div className="flex flex-col mr-3" key={character._id} >
										<button onClick={() => handleClick(character)}>
											<img
												className="flex border-4 border-cyan-700 rounded-full w-32 hover:opacity-75 hover:cursor-pointer"
												src={character.avatarUrl}
												alt={character.name}
											/>
										</button>
										<Character key={character._id} showModal={showModal} setShowModal={setShowModal} details={selectedData} />
										<p className="text-center font-Raleway font-light">{character.name}</p>
									</div>
								)}
							</div> </div> :
						<div></div>
					}

					{employees.length > 0 ?
						<div className="width-full lg:w-1/2">
							<h3 className="text-left mb-3 text-xl lg:text-2xl font-semibold font-Raleway">Employees</h3>
							<div className="flex flex-row">
								{employees.map(character =>
									<div className="flex flex-col mr-3" key={character._id} >
										<button onClick={() => handleClick(character)}>
											<img
												className="flex border-4 border-cyan-700 rounded-full w-32 hover:opacity-75 hover:cursor-pointer"
												src={character.avatarUrl}
												alt={character.name}
											/>
										</button>
										<Character key={character._id} showModal={showModal} setShowModal={setShowModal} details={selectedData} />
										<p className="text-center font-Raleway font-light">{character.name}</p>
									</div>
								)}
							</div> </div> :
						<div></div>
					}

				</div>
			</React.Fragment >
			<Outlet />
		</div >
	)
}