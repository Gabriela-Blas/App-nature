import React from 'react'

// import Components
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Product from '../components/Product';
import Discount from '../components/Discount';
import Explore from '../components/Explore';

const Home = () => {

	return (
		<div className='h-screen w-screen'>
				<Navbar />
				<Product />
				<Discount />
				<Explore />
				<Menu />
		</div>
	)
}

export default Home