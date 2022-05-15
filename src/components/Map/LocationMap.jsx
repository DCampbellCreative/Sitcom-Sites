import React from 'react';
import { Map, Marker } from "pigeon-maps";

import './LocationMap.css';

export const LocationMap = (props) => {
	return (
		<Map height={500} width={500} defaultCenter={props.center} defaultZoom={13}>
			<Marker width={50}
				anchor={props.center}
			/>
		</Map>
	);
};
