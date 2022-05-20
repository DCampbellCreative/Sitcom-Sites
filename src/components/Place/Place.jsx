import React, { useState, useEffect } from "react";
import { Avatar } from "../Avatar/Avatar";
import { LocationMap } from "../Map/LocationMap";
import "./Place.css"

const DUMMY_DATA = [
	{
		id: "p1",
		title: "Frasier's Apartment",
		description: "Located in the fictional Elliott Bay Towers, The apartment has 3 bedrooms and a large sitting room, with an adjacent kitchen and a fireplace. There are two steps up to a landing with a terrace overlooking the city with a view of the Space Needle. A swanky 2000 square foot apartment today in Seattle would go for $8,360 a month on average, or roughly 3 million to purchase.",
		imageUrl:
			"https://live.staticflickr.com/65535/52073623000_7c9842f298_b.jpg",
		address: "20 W 34th St, New York, NY 10001",
		location: [
			47.6323,
			-122.3569,
		],
		residents: [
			{
				name: "Frasier Crane",
				description: "Frasier's Description",
				avatarUrl: "https://live.staticflickr.com/65535/52075589940_6bc79cb1c7_o.jpg"
			},
			{
				name: "Martin Crane",
				description: "Martin's Description",
				avatarUrl: "https://live.staticflickr.com/65535/52075337404_27b9df55c6_o.jpg"
			},
			{
				name: "Daphne Moon",
				description: "Daphne's Description",
				avatarUrl: "https://live.staticflickr.com/65535/52075589950_93418880ac_o.jpg"
			}
		],
	},
];

export const Place = () => {

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl mb-3 mt-3 font-semibold font-Raleway text-left">{DUMMY_DATA[0].title}</h1>

			<div className="flex flex-row mb-5">
				<img className="w-2/3 mr-8 rounded-lg" src={DUMMY_DATA[0].imageUrl} alt={DUMMY_DATA[0].title} />
				<LocationMap center={DUMMY_DATA[0].location} />
			</div>

			<div className="flex flex-row">

				<div className="w-1/2 mr-10">
					<h3 className="text-left text-2xl mb-3 font-semibold font-Raleway">Description</h3>
					<p className="text-justify font-Raleway">{DUMMY_DATA[0].description}</p>
				</div>

				<div className="w-1/2">
					<h3 className="text-left mb-3 text-2xl font-semibold font-Raleway">Residents</h3>
					<div div className="flex flex-row">
						{DUMMY_DATA[0].residents.map((data) => (
							<Avatar
								key={data.name}
								name={data.name}
								description={data.description}
								avatarUrl={data.avatarUrl}
							/>))}
					</div>
				</div>

			</div>

		</div>
	)
}