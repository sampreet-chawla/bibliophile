import React from 'react';

import ShowItem from '../ShowItem/ShowItem';

const MyWishlist = (props) => {
	const showItems = props.favItems.map((item, index) => {
		return <ShowItem item={item} key={index} from='mywishlist' />;
	});

	return (
		<>
			<h3>My Wishlist </h3>
			{showItems}
		</>
	);
};

export default MyWishlist;
