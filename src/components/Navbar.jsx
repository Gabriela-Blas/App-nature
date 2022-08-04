import React from 'react'
import { BsMic } from "react-icons/bs";
import { FiSearch, FiHexagon } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
        {/* perfil, hamburguer, searchbox */}

				<div className='bg-[#e5e5e5] flex flex-col gap-4 py-4'>
					<div className='flex flex-row px-4 relative items-center'>
						<img src='/logo512.png' alt='perfil' className='h-12 w-12 rounded-full object-cover' />
						<div className='relative ml-4 leading-3'>
							<p>Hello </p>
							<p className='text-green-500 text-lg font-medium'>Hesam</p>
						</div>
						<BiMenuAltRight className='text-4xl absolute right-3 text-zinc-600' />
					</div>
					{/* Searchbox */}
					<div className="relative flex items-center px-4">
					< FiSearch className="absolute left-8 text-xl text-zinc-400" />
						<input type="text" className="w-full px-10 py-2.5 rounded-xl text-sm font-medium focus:outline-none"
							placeholder="Try Succulenta ..." />	
						<BsMic className="absolute right-8 text-xl text-zinc-400" />
					</div>
				</div>
				{/* END perfil, hamburguer, searchbox */}
    </div>
  )
}

export default Navbar