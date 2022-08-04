import React from 'react'
import { useNavigate } from "react-router-dom";

//Icons
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineScan } from "react-icons/ai";

const Photo = () => {
    let navigate = useNavigate();

    function goToHome() {
        navigate("/Home")
    }
    return (
        <div>
            <div class="w-screen h-screen flex relative items-center justify-center">
                <img src='img/Maceta.jpg' alt='maceta' className='object-cover absolute h-full' />
                <div class="absolute top-0 left-0 p-4">
                    <div>
                        <button onClick={() => goToHome()} className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                            <IoIosArrowRoundBack className='text-3xl text-zinc-600 text-center font-semibold' />
                        </button>
                    </div>
                </div>
                <div className='flex justify-center absolute bottom-4'>
                    <button className='w-16 h-16 bg-green-500 rounded-full flex justify-center items-center'>
                        <AiOutlineScan className='text-white text-3xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Photo