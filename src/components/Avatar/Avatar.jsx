import React from "react";
import "./Avatar.css"

export const Avatar = (props) => {
	return (
		<img className="border-4 border-cyan-700 mr-3 rounded-full w-32 hover:opacity-75 hover:cursor-pointer" src={props.avatarUrl} alt={props.name}></img>
	)
}