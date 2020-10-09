import React from 'react';
import { Link } from 'react-router-dom';

import './MyWishlist.css';
import ShowItem from '../ShowItem/ShowItem';

const MyWishlist = (props) => {
	console.log('MyWishlist favItems ', props.favItems);

	let message = '';
	let showItems = '';

	if (props.favItems.length === 0) {
		message = (
			<div className='mywishlist-message'>
				No books in the list yet. Please try{' '}
				<Link to='/' className='browse-link'>
					Browse
				</Link>
			</div>
		);
	} else {
		showItems = props.favItems.map((item, index) => {
			return <ShowItem item={item} key={index} from='mywishlist' />;
		});
	}

	return (
		<div className='mywishlist-container'>
			<div>
				<h3>My Wishlist </h3>
				{message}
			</div>
			<div className='mywishlist-contents'>{showItems}</div>
		</div>
	);
};

export default MyWishlist;
