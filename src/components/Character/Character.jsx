import React from "react";

export const Character = ({ details, showModal, setShowModal }) => {
	const content = showModal && (
		<div className='fixed z-10 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
			<div className="flex flex-col relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
				<button className="text-right"
					type="button"
					onClick={() => setShowModal(false)}
				>
					X
				</button>
				<img className="flex self-center mb-2 border-4 border-cyan-700 rounded-full w-72" src={details?.avatarUrl} alt={details?.name}></img>
				<div className="mb-2 font-Raleway text-xl">{details?.name}</div>
				<div className="text-justify font-Raleway font-light">{details?.description}</div>
			</div>
		</div>)

	return content

}