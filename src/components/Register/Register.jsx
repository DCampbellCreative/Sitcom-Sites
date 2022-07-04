import React from 'react'

export const Register = () => {
	return (
		<div className="font-Raleway w-full">
			<div className="container mx-auto flex flex-col items-center">
				<h1 className="flex text-3xl mb-3 mt-3">Register</h1>

				<div className="mb-3 flex flex-col text-left w-6/12">
					<label className="flex mb-1 text-2xl">Username:</label>
					<input type="text" name="username" className="flex border-2 h-10 rounded-sm"></input>
				</div>

				<div className="mb-3 flex flex-col text-left w-6/12">
					<label className="flex mb-1 text-2xl">Email:</label>
					<input type="text" name="email" className="flex border-2 h-10 rounded-sm"></input>
				</div>

				<div className="mb-5 flex flex-col text-left w-6/12">
					<label className="flex mb-1 text-2xl">Password:</label>
					<input type="text" name="password" className="flex border-2 h-10 rounded-sm"></input>
				</div>

				<div className="flex flex-row">
					<button className="flex border-2 p-1 pl-5 pr-5 text-2xl rounded-sm items-center">Register</button>
					<button className="flex  p-1 pl-5 pr-5 text-2xl items-center">Login</button>
				</div>
			</div>
		</div>


	)
}
