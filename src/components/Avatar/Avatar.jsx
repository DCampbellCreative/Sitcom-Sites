import React from "react";
import { useLocation } from "react-router-dom";
import "./Avatar.css"

export const Avatar = () => {
	const location = useLocation();
	const data = location.state;
	return (
		<img className="border-4 border-cyan-700 mr-3 rounded-full w-32 hover:opacity-75 hover:cursor-pointer" src={data.avatarUrl} alt={data.name}></img>
	)
}