import React from 'react';
import { Map, Marker } from "pigeon-maps";

export const PlaceMap = (props) => {
	return (
		<div className='w-full'>
			<Map defaultCenter={props.center} defaultZoom={13}>
				<Marker width={50}
					anchor={props.center}
				/>
			</Map>
		</div>
	);
};
