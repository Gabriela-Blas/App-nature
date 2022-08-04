import React from 'react'

const Explore = () => {
    return (
        <div>
            {/* texto explore 3*/}
            <div className='flex flex-col p-4'>
                <div className='divide-y-2 divide-zinc-400 '>
                    <p className='text-xl p-4 font-medium text-zinc-600'>Explore</p>
                    <div class="divide-y-2">
                    </div>
                </div>
                {/* Explore plants*/}
                <div className='flex flex-col relative items-center justify-center rounded-2xl overflow-hidden h-40 w-full mt-6'>
                    <img src='img/plants.jpg' alt='plants' className='absolute z-0' />
                </div>
            </div>
        </div>
    )
}

export default Explore