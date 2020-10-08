import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**** REACT NAV-BAR ***/
// import {
// 	Collapse,
// 	Navbar,
// 	NavbarToggler,
// 	NavbarBrand,
// 	Nav,
// 	NavItem,
// 	NavLink,
// 	UncontrolledDropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem,
// 	NavbarText,
// } from 'reactstrap';

import './BiblioNavBar.css';

const BiblioNavBar = (props) => {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggle = () => setIsOpen(!isOpen);

	// return (
	// 	<div>
	// 		<Navbar color='success' dark fixed='top' expand='md'>
	// 			<NavbarBrand href='/'>
	// 				biblio<span style={{ color: 'orange' }}>phile</span>
	// 			</NavbarBrand>
	// 			<NavbarToggler onClick={toggle} />
	// 			<Collapse isOpen={isOpen} navbar>
	// 				<Nav className='mr-auto' navbar>
	// 					<NavItem>
	// 						<NavLink href='/'>Browse</NavLink>
	// 					</NavItem>
	// 					<NavItem>
	// 						<NavLink href='/mywishlist'>My Wishlist</NavLink>
	// 					</NavItem>
	// 					<NavItem>
	// 						<NavLink href='/resources'>Resources</NavLink>
	// 					</NavItem>
	// 				</Nav>
	// 				<NavbarText>Logo</NavbarText>
	// 			</Collapse>
	// 		</Navbar>
	// 	</div>
	// );

	/**** REGULAR NAV-BAR ***/
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
	);
};

export default BiblioNavBar;
