import React from 'react'
import { useNavigate } from "react-router-dom";

import { FiHexagon } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { GiPineTree } from "react-icons/gi";
import { MdOutlineCenterFocusWeak } from "react-icons/md";
import { RiShoppingBasket2Line } from "react-icons/ri";


const Menu = () => {
    let navigate = useNavigate();

	function goToScan() {
        navigate("/Scan")
    }
    return (
        <div>
            {/* menu*/}
            <div className='bg-zinc-200 h-16 w-full fixed left-0 bottom-4 rounded-xl flex justify-around items-center text-2xl text-zinc-600'>
                <GrHomeRounded />
                <GiPineTree />
                <MdOutlineCenterFocusWeak onClick={() => goToScan()} />
                <RiShoppingBasket2Line />
                <FiHexagon />
            </div>
            {/* END menu*/}
        </div>
    )
}

export default Menu