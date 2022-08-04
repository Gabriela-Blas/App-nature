import React from 'react'

const Discount = () => {
  return (
    <div>
        {/* Explore plants 50% DESCOUNT*/}
				<div className='flex flex-col ml-4 relative items-center justify-center rounded-2xl overflow-hidden h-40 w-10/12'>
					<div className='z-20 p-5 text-black flex flex-row items-center'>
						<p className='text-3xl font-medium'>Get 50% Discount Today</p>
						<img src='img/plant_discount.png' alt='discount' className='w-6/12' />
					</div>
					<img src='img/background_plants.png' className='absolute z-0' />
				</div>
    </div>
  )
}

export default Discount