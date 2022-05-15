import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { LocationMap } from "../Map/LocationMap";
import "./Place.css"

const DUMMY_DATA = [
	{
		id: "p1",
		title: "Frasier's Apartment",
		description: "Located in the fictional Elliott Bay Towers, the three-bedroom, three-bath luxury condo has view of the Space Needle and Seattle skyline so amazing, it’s no surprise that it’s entirely fictional. The backdrop image used was actually taken at Kerry Park and would be impossible from any real condo.",
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
		<div className="place-container">
			<h1 className="title">{DUMMY_DATA[0].title}</h1>
			<div className='row'>
				<img src={DUMMY_DATA[0].imageUrl} alt={DUMMY_DATA[0].title} className="main-image" />
				<LocationMap center={DUMMY_DATA[0].location} />
			</div>

			<div className='row'>

				<div className='column'>
					<h3>Description</h3>
					<p>{DUMMY_DATA[0].description}</p>
				</div>

				<div className='column'>
					<h3>Residents</h3>
					<div className="resident-avatars">
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