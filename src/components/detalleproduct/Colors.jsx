import React from 'react'

const Colors = () => {
    return (
        <div>
            {/* colors*/}
            <div>
                <div className='flex p-4 gap-5 items-center'>
                    <button className='bg-pink-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                    <button className='bg-orange-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                    <button className='bg-green-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                    <button className='bg-blue-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                    <button className='bg-teal-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                    <button className='bg-purple-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                    <button className='bg-red-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                    <button className='bg-slate-400 border-2 border-zinc-200 w-7 h-7 rounded-full'></button>
                </div>
                <div className='flex p-4'>
                    <button className='bg-gradient-to-r from-green-600 to-green-400 rounded-lg text-white text-xl w-full p-3'>Add to cart | $25</button>
                </div>
            </div>
        </div>
    )
}

export default Colors