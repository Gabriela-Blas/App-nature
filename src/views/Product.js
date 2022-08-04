import React from 'react'

// import Components
import Menu from '../components/Menu';
import Bodyproduct from '../components/detalleproduct/Bodyproduct';
import Colors from '../components/detalleproduct/Colors';
import Description from '../components/detalleproduct/Description';

const Product = () => {
  return (
    <main>
      <div className='w-screen h-screen'>
        <Description />
        <Bodyproduct />
        <Colors />
        <Menu />
      </div>
    </main>
  )
}
export default Product