import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Shows.css'
// const client = axios.create({
// 	baseURL:
// 		"https://secret-bastion-23687.herokuapp.com/"
// })

export const Shows = () => {
	const [shows, setShows] = useState([]);
	// const [shows, setShows] = useState([]);

	// const fetchShows = async () => {
	// 	const result = await axios(
	// 		"https://secret-bastion-23687.herokuapp.com/"
	// 	)
	// console.log(result.request.response)
	// const data = JSON.parse(result.request.response)
	// const parsedData = JSON.parse(data)
	// console.log(data)
	// 	setShows(result.request.response)
	// }

	// useEffect(() => {
	// 	if (!shows.length) {
	// 		fetchShows();
	// 	}
	// }, [shows]);

	// console.log(Object.keys(shows));
	// console.log(JSON.stringify(shows));
	// console.log(shows);

	useEffect(() => {
		fetch("https://secret-bastion-23687.herokuapp.com/")
			.then(response => response.json())
			.then(data => setShows(data))
	}, [])

	// console.log(shows)
	// console.log(shows.map(show => (show)));

	return (
		<React.Fragment>
			<ul>
				<li>

					{shows?.map(show => {
						return (
							<div key={show._id} className="container mx-auto flex overflow-hidden">
								<div className="card w-96 border-2 rounded-md m-2" >
									<img className="flex show-inner" src={show.logo} alt="fraiserlogo"></img>
									<h3 className="text-2xl font-semibold font-Raleway">{show.title}</h3>
									<p className="text-md font-Raleway">{show.description}</p>
									<h3 className="text-2xl font-semibold font-Raleway">Places</h3>
									<ul>
										{show.places.map(place => {
											return <li key={place._id} className="h-10 justify-self-center align-self-center text-xl font-Raleway m-1 border-t-2">{place.title}</li>

										})}
									</ul>
								</div>
							</div>
						)
					})}
				</li>
			</ul>
		</React.Fragment>



	)
}