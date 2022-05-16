import React from 'react';
import { Map, Marker } from "pigeon-maps";

import './LocationMap.css';

export const LocationMap = (props) => {
	return (
		<div className='w-1/3'>
			<Map defaultCenter={props.center} defaultZoom={13}>
				<Marker width={50}
					anchor={props.center}
				/>
			</Map>
		</div>
	);
};
