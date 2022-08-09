import React from 'react'
import { Link } from "react-router-dom";
import { Map, Overlay } from 'pigeon-maps'

export const ShowMap = (props) => {

	function averageGeolocation(coords) {
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

		return {
			latitude: centralLatitude * 180 / Math.PI,
			longitude: centralLongitude * 180 / Math.PI
		};
	}
	return (
		<Map defaultCenter={[47.6150, -122.3405]} defaultZoom={13}>
			{props.show?.places?.map((place => {
				return <Overlay anchor={place.location} offset={[15, 0]}>
					<Link key={place._id} to={`/${place._id}`} state={[place, props.show?.characters]} className='relative z-10000 text-slate-500 font-Raleway font-semibold p-1 bg-slate-100/50 border-2 rounded-md border-slate-500 hover:p-3 hover:z-10 hover:bg-slate-100 hover:cursor-pointer'>
						{place.title}
					</Link>
				</Overlay>
			}))}
		</Map>
	)
}
