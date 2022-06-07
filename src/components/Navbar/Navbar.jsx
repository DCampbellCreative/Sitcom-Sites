import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="w-full h-24 bg-cyan-800 flex">
			<div className="container flex items-center mx-auto justify-between">
				<p className="flex w-2/3 text-4xl text-left text-white font-Montserrat">Sitcom Sites</p>
				<div lassName="flex w-1/3">
					<Link to={'/'} className="text-xl text-white font-Montserrat text-right">Shows</Link>
				</div>
			</div>
		</nav>
	)
}