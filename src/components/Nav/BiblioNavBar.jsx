import React, { useState } from 'react';

/**** REACT BOOTSTRAP NAV-BAR ***/
// USING REACT ROUTER BOOTSTRAP to wrap <NavLink></NavLink> with <LinkContainer></LinkContainer>
//  to retain React state - a bug fix as suggested by Alex Merced.
import { LinkContainer } from 'react-router-bootstrap';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	// UncontrolledDropdown,
	// DropdownToggle,
	// DropdownMenu,
	// DropdownItem,
	// NavbarText,
} from 'reactstrap';

import './BiblioNavBar.css';

const BiblioNavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar
				color='success'
				dark
				fixed='top'
				expand='md'
				collapseOnSelect='true'>
				<NavbarBrand href='/'>
					biblio<span style={{ color: 'orange' }}>phile</span>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavItem onClick={toggle}>
							<LinkContainer to='/'>
								<NavLink>Browse</NavLink>
							</LinkContainer>
						</NavItem>
						<NavItem onClick={toggle}>
							<LinkContainer to='/mywishlist'>
								<NavLink>My Wishlist</NavLink>
							</LinkContainer>
						</NavItem>
						<NavItem onClick={toggle}>
							<LinkContainer to='/resources'>
								<NavLink>Resources</NavLink>
							</LinkContainer>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default BiblioNavBar;
