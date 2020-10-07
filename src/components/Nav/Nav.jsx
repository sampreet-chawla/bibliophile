import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = (props) => {
	// const handleOnClick = () => {
	// 		document.getElementsByClassName('navbar-collapse').collapse = 'hide';
	// 	};

	return (
		<nav className='nav-bar'>
			<h1>
				biblio<span style={{ color: 'orange' }}>phile</span>
			</h1>
			<p>
				<Link to='/' className='nav-bar menu-item'>
					Browse
				</Link>
			</p>
			<p>
				<Link to='/mywishlist' className='nav-bar menu-item'>
					My Wishlist
				</Link>
			</p>
			<p>
				<Link to='/resources' className='nav-bar menu-item'>
					Resources
				</Link>
			</p>
		</nav>
		// <nav className=''>
		// 	<h1>bibliophile</h1>
		// 	<Link to='/'>Browse</Link>
		// 	<Link to='/MyWishList'>My Wishlist</Link>
		// 	<Link to='/Resources'>Resources</Link>
		// </nav>

		// BOOTSTRAP NAV-BAR
		// <nav className='navbar navbar-expand-lg navbar-dark position-sticky'>
		// 	<span className='navbar-brand mb-0 h1' id='nav-brand-name'>
		// 		bibiophile
		// 	</span>
		// 	<button
		// 		className='navbar-toggler'
		// 		type='button'
		// 		dataToggle='collapse'
		// 		dataTarget='#navbarSupportedContent'
		// 		ariaControls='navbarSupportedContent'
		// 		ariaExpanded='false'
		// 		ariaLabel='Toggle navigation'>
		// 		<span className='navbar-toggler-icon'></span>
		// 	</button>

		// 	<div className='collapse navbar-collapse' id='navbarSupportedContent'>
		// 		<ul className='navbar-nav mr-auto'>
		// 			<li className='nav-item'>
		// 				<Link to='/' className='nav-link' onClick={handleOnClick}>
		// 					Browse
		// 				</Link>
		// 			</li>

		// 			<li className='nav-item'>
		// 				<Link to='/mywishlist' className='nav-link' onClick={handleOnClick}>
		// 					My Wishlist
		// 				</Link>
		// 			</li>

		// 			<li className='nav-item'>
		// 				<Link to='/resources' className='nav-link' onClick={handleOnClick}>
		// 					Resources
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </nav>
	);
};

export default Nav;
