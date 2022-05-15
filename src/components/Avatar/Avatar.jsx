import React from "react";
import "./Avatar.css"

export const Avatar = (props) => {
	return (
		<img className="avatar" src={props.avatarUrl} alt={props.name}></img>
	)
}