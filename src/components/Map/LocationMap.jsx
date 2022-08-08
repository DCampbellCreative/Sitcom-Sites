import React from 'react';
import { Map, Marker } from "pigeon-maps";

import './LocationMap.css';

export const LocationMap = (props) => {
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
