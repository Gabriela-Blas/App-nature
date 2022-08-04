
import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
	{
		img: "img/plant_1.png",
		name: "Fiddle Leaf",
		type: "Indoor Plant"
	},
	{
		img: "img/plant_2.png",
		name: "Annual Vincaf",
		type: "Catha roseus"
	},
	{
		img: "img/plant_3.png",
		name: "Balloon Flower",
		type: "Platycodon"
	}
];


const Product = () => {
	const [active, setActive] = useState(products[0].name);
	let navigate = useNavigate();

	function goToProduct() {
		navigate("/Product")
	}

	return (
		<div>
			{/* texto shop */}
			<div className='flex flex-col p-4'>
				<div className='divide-y-2  divide-zinc-400 '>
					<p className='text-xl p-4 font-medium text-zinc-600'>shop</p>
					<div class="divide-y-2">
					</div>
				</div>
			</div>

			{/*plants*/}

			<div className=' w-screen overflow-y-scroll p-4 flex flex-row gap-3'>
			{products.map((products, a) => 
					<div key={a} onClick={() => setActive(products.name)} 
						className={`relative bg-white p-4 flex flex-row rounded-2xl shadow-xl ${active === products.name ? "bg-zinc-400 text-white" : "bg-white"}`}>
						<div className='flex flex-col gap-2 rounded-2xl'>
							<button className='w-4 h-4 bg-black rounded-full'></button>
							<button className='w-4 h-4 bg-red-300 rounded-full'></button>
							<button className='w-4 h-4 bg-orange-200 rounded-full'></button>
							<button className='w-4 h-4 bg-orange-100 rounded-full'></button>
							<button className='w-4 h-4 bg-cyan-900 rounded-full text-white text-[10px]'>+3</button>
							<p className='font-medium text-zinc-600'>$25</p>
							<div className='relative leading-3'>
								<p className='text-zinc-600 text-sm font-medium'>{products.name}</p>
								<p className='text-xs text-zinc-400'>{products.type}</p>
							</div>
						</div>
						<div className='drop-shadow-md rounded-md aspect-square w-28 flex justify-center items-center '>
							<img className=' ' src={products.img} alt='plant_1'></img>
						</div>
						<button onClick={() => goToProduct()}  className='bg-zinc-800 w-6 h-6 rounded-md text-white absolute bottom-5 right-7'>+</button>
					</div>
			    )}
			</div>

		</div>
	)
}

export default Product