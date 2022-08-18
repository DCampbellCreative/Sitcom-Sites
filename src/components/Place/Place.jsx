import React, { useState } from "react";
import { Character } from "../Character/Character";
import { PlaceMap } from "../PlaceMap/PlaceMap";
import { useLocation, useNavigate } from "react-router-dom";

export const Place = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const data = location.state;

	// console.log(data)

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
					<h1 className="w-3/4 text-xl lg:text-2xl mb-3 mt-3 font-semibold font-Work text-left tracking-wide uppercase">{place.title}
						{place.address ?
							<span className="ml-4 text-lg lg:text-xl font-Hind font-light">Address: {place.address}</span> :
							<div></div>
						}
					</h1>
					<div className="w-1/4 flex justify-end mb-2 mt-2">
						<button className="inline-block px-5 py-2 bg-slate-400 text-white font-semibold font-Hind text-sm leading-tight uppercase rounded shadow-md hover:bg-slate-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={() => navigate(-1)}>Go Back</button>
					</div>
				</div>

				<div className="flex flex-row mb-5">
					<img className="w-2/3 mr-8 rounded-lg" src={place.imageUrl} alt={place.title} />
					<PlaceMap className="w-1/3 h-96" center={place.location} />
				</div>

				<div className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/2 mr-10 mb-5">
						<h3 className="text-left text-xl lg:text-2xl mb-3 font-semibold font-Work">Description</h3>
						<p className="text-justify text-sm lg:text-lg font-Hind">{place.description}</p>
					</div>

					<div className="flex-col">

						{/* renders character list by type if array is > 0 */}
						{residents?.length > 0 ?
							<div className="width-full lg:w-1/2 flex-row mb-5">
								<h3 className="text-left mb-3 text-xl lg:text-2xl font-semibold font-Work">Residents</h3>
								<div className="flex flex-row">
									{residents?.map(character =>
										<div className="flex flex-col mr-3 h-36" key={character._id} >
											<button className='w-32' onClick={() => handleClick(character)}>
												<img
													className="flex border-4 border-slate-400 rounded-full shadow-md hover:border-slate-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:cursor-pointer"
													src={character.avatarUrl}
													alt={character.name}
												/>
											</button>
											<Character key={character._id} showModal={showModal} setShowModal={setShowModal} details={selectedData} />
											<p className="text-center font-Hind text-lg uppercase semibold">{character.name}</p>
										</div>
									)}
								</div> </div> :
							<div></div>
						}

						{regulars.length > 0 ?
							<div className="width-full lg:w-1/2 flex-row mb-5">
								<h3 className="text-left mb-1 text-xl lg:text-2xl font-semibold font-Work">Regulars</h3>
								<div className="flex flex-row">
									{regulars.map(character =>
										<div className="flex-col mr-3" key={character._id} >
											<button className='w-32' onClick={() => handleClick(character)}>
												<img
													className="flex border-4 border-slate-400 rounded-full shadow-md hover:border-slate-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:cursor-pointer"
													src={character.avatarUrl}
													alt={character.name}
												/>
											</button>
											<Character key={character._id} showModal={showModal} setShowModal={setShowModal} details={selectedData} />
											<p className="text-center font-Hind text-lg uppercase semibold">{character.name}</p>
										</div>
									)}
								</div> </div> :
							<div></div>
						}

						{employees.length > 0 ?
							<div className="width-full lg:w-1/2 flex-row">
								<h3 className="text-left mb-3 text-xl lg:text-2xl font-semibold font-Work">Employees</h3>
								<div className="flex flex-row">
									{employees.map(character =>
										<div className="flex flex-col mr-3" key={character._id} >
											<button className='w-32' onClick={() => handleClick(character)}>
												<img
													className="flex border-4 border-slate-400 rounded-full shadow-md hover:border-slate-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:cursor-pointer"
													src={character.avatarUrl}
													alt={character.name}
												/>
											</button>
											<Character key={character._id} showModal={showModal} setShowModal={setShowModal} details={selectedData} />
											<p className="text-center font-Hind text-lg uppercase semibold">{character.name}</p>
										</div>
									)}
								</div> </div> :
							<div></div>
						}

					</div>

				</div>
			</React.Fragment >

		</div >
	)
}