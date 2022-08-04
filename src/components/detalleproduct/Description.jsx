import React from 'react'
import { useNavigate } from "react-router-dom";


//icons
import { AiOutlineHeart } from "react-icons/ai";
import { BiShapeCircle } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";


const Description = () => {

  let navigate = useNavigate();

	function goToHome() {
        navigate("/Home")
    }
  return (
    <div>
      <div className='flex items-center'>
        <div className='flex flex-row bg-gradient-to-r from-green-600 to-green-400 w-8/12 h-60 rounded-br-2xl p-4'>
          <div>
            <div className='flex items-center'>
              <button onClick={() => goToHome()}className='w-10 h-10 rounded-full bg-white text-4xl text-zinc-500'><IoIosArrowRoundBack /></button>
              <p className='text-white text-xs px-2'>Shop/Indoor Plants/Fiddle Leaf</p>
            </div>
            <p className='text-white text-2xl py-2'>Fiiddle Leaf</p>
            <p className='w-5/8 text-sm text-white font-light'>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
          </div>
        </div>
        <div className='p-2'>
          <button className='bg-zinc-300 w-10 h-10 justify-center rounded-full flex items-center mb-2'>
            <AiOutlineHeart className='text-center text-zinc-600' /></button>
          <button className='bg-zinc-300 w-10 h-10 justify-center rounded-full flex items-center mb-2'>
            <BiShapeCircle className='text-center text-zinc-600' /></button>
        </div>
      </div>
    </div>
  )
}

export default Description