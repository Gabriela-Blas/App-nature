import React from 'react'

// icons
import { BiMenuAltRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Home = () => {
	return (
		<main>
			<div className='h-screen w-screen'>
				{/* perfil, hamburguer, searchbox */}

				<div className='bg-[#e5e5e5] flex flex-col gap-4 py-4'>
					<div className='flex flex-row px-4 relative items-center'>
						<img src='img/perfil.jpeg' alt='perfil' className='h-12 w-12 rounded-full object-cover' />
						<div className='relative ml-4 leading-3'>
							<p>Hello </p>
							<p className='text-green-500 text-lg font-medium'>Hesam</p>
						</div>
						<BiMenuAltRight className='text-4xl absolute right-3 text-zinc-600' />
					</div>
					{/* Searchbox */}
					<div className="relative flex items-center px-4">
						<input type="text" className="w-full px-3 py-2.5 rounded-xl text-sm font-medium focus:outline-none"
							placeholder="Search here..." />
						<FiSearch className="absolute right-8 text-xl text-zinc-600" />
					</div>
				</div>
				{/* texto shop */}
				<div className='flex flex-col py-4'>
					<div className='divide-y divide-blue-700'>
						<p className='text-xl p-4 font-medium text-zinc-600'>shop</p>
						<div class="divide-y divide-blue-200">
						</div>
					</div>
				</div>
				{/*plants*/}
				<div className='p-4 flex flex-row'>
					<div className='relative bg-white p-4 flex flex-row rounded-2xl shadow-xl'>
						<div className='flex flex-col gap-2 rounded-2xl'>
							<button className='w-4 h-4 bg-black rounded-full'></button>
							<button className='w-4 h-4 bg-red-300 rounded-full'></button>
							<button className='w-4 h-4 bg-orange-200 rounded-full'></button>
							<button className='w-4 h-4 bg-orange-100 rounded-full'></button>
							<button className='w-4 h-4 bg-cyan-900 rounded-full text-white text-[10px]'>+3</button>
							<p className='font-medium text-zinc-600'>$25</p>
							<div className='relative leading-3'>
								<p className='text-zinc-600 text-sm font-medium'>Fiddle Leaf</p>
								<p className='text-xs text-zinc-400'>Indor Plant</p>
							</div>
						</div>
						<div className='drop-shadow-md rounded-md aspect-square w-28 flex justify-center items-center '>
							<img className=' ' src='img/plant_1.png' alt='plant_1'></img>
						</div>
						<button className='bg-zinc-800 w-6 h-6 rounded-md text-white absolute bottom-5 right-7'>+</button>
					</div>
				</div>

				{/* Explore plants*/}
				<div className='bg-red-500 flex flex-row p-4'>
					<div className='relative bg-white p-1 rounded-xl flex flex-row items-center'>
						<p className='w-1/3 text-xl font-medium'>Get 50% Discount Today</p>
						<img src='img/plant_discount.png' alt='discount' className='w-32'/>
					</div>
				</div>

			</div>

		</main>

	)
}

export default Home