import React from 'react'
import { Link } from "react-router-dom";
import { Map, Overlay } from 'pigeon-maps'

export const ShowMap = ({ show }) => {
	const coords = show?.places.map((item) => {
		return { latitude: item.location[0], longitude: item.location[1] }
	})

	// calculate average geolocation, credited to https://gist.github.com/tlhunter
	const averageGeolocation = (coords) => {
		if (coords.length === 1) {
			return coords[0];
		}

		let x = 0.0;
		let y = 0.0;
		let z = 0.0;

		for (let coord of coords) {
			let latitude = coord.latitude * Math.PI / 180;
			let longitude = coord.longitude * Math.PI / 180;

			x += Math.cos(latitude) * Math.cos(longitude);
			y += Math.cos(latitude) * Math.sin(longitude);
			z += Math.sin(latitude);
		}

		let total = coords.length;

		x = x / total;
		y = y / total;
		z = z / total;

		let centralLongitude = Math.atan2(y, x);
		let centralSquareRoot = Math.sqrt(x * x + y * y);
		let centralLatitude = Math.atan2(z, centralSquareRoot);

		return [
			centralLatitude * 180 / Math.PI,
			centralLongitude * 180 / Math.PI
		];
	}

	console.log(averageGeolocation(coords))

	return (
		<Map key={show._id} defaultCenter={averageGeolocation(coords)} defaultZoom={12}>
			{show?.places?.map((place => {
				return <Overlay key={place._id} anchor={place.location} offset={[15, 0]}>
					<Link key={place._id} to={`/${place._id}`} state={[place, show?.characters]} className='leading-tight text-white font-Hind font-semibold p-1 bg-slate-400/75 rounded-t-lg rounded-br-lg hover:p-3 hover:bg-slate-400 hover:cursor-pointer hover:shadow-lg duration-200 ease-in-out'>
						{place.title}
					</Link>
				</Overlay>
			}))}
			<div className='absolute bottom-0 left-0 rounded-tr-lg overflow-hidden w-auto mx-auto'>
				<img className="w-32 lg:w-36" src={show.logo} alt={`${show.title} Logo`} />
			</div>
		</Map>
	)
}
