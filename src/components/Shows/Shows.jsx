import React from "react";
import { Link } from "react-router-dom";
import { Map, Marker, Overlay } from "pigeon-maps";
// import './Shows.css'


export const Shows = (props) => {
	// console.log(props);
	return (
		<React.Fragment>
			<ul>
				<li>
					{props.shows?.map(show => {
						return (
							<div key={show._id} className="container mx-auto">

								<div className="flex  w-100 h-96 bg-gradient-to-b from-slate-400 to-slate-200 rounded-lg overflow-hidden m-2" >
									{/* <div className=" bg-gradient-to-b from-slate-400 to-slate-200 rounded-lg  m-2" > */}
									<div className="flex w-1/3">
										<img src={show.logo} alt="fraiserlogo" />
									</div>
									<div className="flex flex-col w-1/3">
										{/* <LocationMap center={[50.879, 4.6997]} /> */}
										<div className='font-Hind italic uppercase bg-cyan-800 text-white font-semibold'>Click a place for more info</div>

										<Map defaultCenter={[47.6150, -122.3405]} defaultZoom={13}>
											{/* {show.places?.map((place) => {
												return <Overlay anchor={place.location} offset={[120, 79]}>
													<div className="w-10 h-10">{place.name} </div>
												</Overlay>
												return <Marker anchor={place.location}></Marker>

											})} */}
											{show.places?.map((place => {
												return <Overlay anchor={place.location} offset={[15, 0]}>
													<Link key={place._id} to={`/${place._id}`} state={[place, show.characters]} className='relative z-1 text-slate-500 font-Raleway font-semibold p-1 bg-slate-100/50 border-2 rounded-md border-slate-500 hover:p-3 hover:z-10 hover:bg-slate-100 hover:cursor-pointer'>{place.title}</Link></Overlay>
											}))}

										</Map>

									</div>
									{/* <div>{show?.places.map(location => {
										return (<LocationMap className="w-1/3 h-96" center={[50.879, 4.6997]} />)
									})}</div> */}
									{/* <div className="w-full h-96"><LocationMap className="h-96" defaultCenter={[50.879, 4.6997]} center={[50.879, 4.6997]} /></div> */}
									<div className='flex flex-col w-1/3 self-center'>
										<h3 className="text-xl lg:text-2xl font-semibold text-left ml-4 font-Raleway mb-2">{show.title}</h3>
										<p className="text-xs lg:text-base font-Raleway text-left m-4">{show.description}</p>
									</div>
									{/* <h3 className="text-xl lg:text-2xl font-semibold text-left ml-4 font-Raleway mb-2">Places</h3> */}
									{/* <div className="flex flex-col">
										{show.places?.map(place => {
											return <Link key={place._id} to={`/${place._id}`} state={[place, show.characters]}
												className="flex text-left items-center text-sm lg:text-xl font-Raleway m-1 ml-4 mr-4 last:mb-4 pl-2 pr-2 rounded bg-cyan-700 font-medium text-white w-5/6 lg:w-2/3 h-10">

												<div className="w-5/6">{place.title}</div><div className="w-1/6 font-semibold text-center">{'>'}</div>

											</Link>
										})}
									</div> */}
								</div>
							</div>
						)
					})}
				</li>
			</ul>


		</React.Fragment>



	)
}