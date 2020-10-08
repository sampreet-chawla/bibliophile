import React from 'react';

import './MyWishlist.css';
import ShowItem from '../ShowItem/ShowItem';

const MyWishlist = (props) => {
	console.log('MyWishlist favItems ', props.favItems);
	const showItems = props.favItems.map((item, index) => {
		return <ShowItem item={item} key={index} from='mywishlist' />;
	});

	return (
		<div className='mywishlist-container'>
			<h3>My Wishlist </h3>
			{showItems}
		</div>
	);
};

export default MyWishlist;
