import React from 'react'

const Bodyproduct = () => {
    return (
        <div>
            {/* BODY plants*/}
            <div className='flex justify-between p-4'>

                <div className='flex flex-col gap-2 items-center'>
                    <div className='flex relative px-3 py-3 items-center justify-center rounded-lg overflow-hidden'>
                        <img src='img/fondo_planta_2.png' className='absolute z-0 object-cover shadow-zinc-300' />
                        <p className='text-xl text-zinc-900 font-normal z-10'>Indoor</p>
                    </div>

                    <div className='flex rounded-xl relative px-3 py-3 items-center justify-center overflow-hidden'>
                        <img src='img/fondo_planta.png' className='absolute z-0 object-cover rounded-lg shadow-inner shadow-zinc-300' />
                        <div className='flex flex-col justify-center items-center p-2'>
                            <p className='text-xs text-green-500 font-normal z-20'>Week</p>
                            <p className='text-2xl text-zinc-900 font-normal z-10'>1 </p>
                        </div>
                    </div>
                    <div className='flex rounded-xl relative px-3 py-3 items-center justify-center overflow-hidden'>
                        <img src='img/fondo_planta.png' className='absolute z-0 object-cover rounded-lg shadow-inner shadow-zinc-300' />
                        <div className='flex flex-col justify-center items-center p-2'>
                            <p className='text-xs text-teal-400 font-normal z-20'>Temp</p>
                            <p className='text-2xl text-zinc-900 font-normal z-10'>24 </p>
                        </div>
                    </div>
                    <div className='flex rounded-xl relative px-3 py-3 items-center justify-center overflow-hidden'>
                        <img src='img/fondo_planta.png' className='absolute z-0 object-cover rounded-lg shadow-inner shadow-zinc-300' />
                        <div className='flex flex-col justify-center items-center p-2'>
                            <p className='text-xs text-yellow-400 font-normal z-20'>light</p>
                            <p className='text-2xl text-zinc-900 font-normal z-10'>6h </p>
                        </div>
                    </div>

                </div>
                {/* planta grande*/}
                <div>
                    <img src='img/plant_1.png' className='w-64' />
                </div>
            </div>
        </div>
    )
}

export default Bodyproduct