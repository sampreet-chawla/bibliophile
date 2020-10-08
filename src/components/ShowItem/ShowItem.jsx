import React, { useState } from 'react';

import './ShowItem.css';
import { convertArrToStr, trimTo500 } from './ShowItemHelper';
import { appContext } from '../App/App.jsx';

const ShowItem = (props) => {
	const item = props.item;
	const defaultThumbnail =
		'https://res.cloudinary.com/dreamer123/image/upload/v1602199643/Sampreet-SEIR-831-unit2/image-not-available-thumbnail_ydl8en.png';
	// 'https://res.cloudinary.com/dreamer123/image/upload/v1602029515/Sampreet-SEIR-831-unit2/image-unavailable-thumbnail_jnjdhg.gif';

	const appCtx = React.useContext(appContext);
	const [isFav, setIsFav] = useState(false);

	const toggle = (event) => {
		if (!isFav) {
			appCtx.handleSelectedItem(item, 'add');
			event.target.disabled = true;
			event.target.innerHTML = 'Remove from Wishlist';
		} else {
			// TODO - To be implemented.
			appCtx.handleSelectedItem(item, 'remove');
		}
		setIsFav(!isFav);
	};

	// React.useEffect(() => {
	// 	console.log('In ShowItem useEffect');
	// }, []);

	if (item) {
		const itemDetails = item.volumeInfo;

		// IF BEST SELLER INFORMATION IS AVAILABLE.
		let bestSellerDateJSX = <></>;
		if (item.rank) {
			bestSellerDateJSX = (
				<>
					<p>Rank: {item.rank}</p>
					<p>Rank Last Week: {item.rank_last_week}</p>
					<p>Weeks on list: {item.weeks_on_list}</p>
					<p>Best Seller's Date: {item.bestsellers_date}</p>
				</>
			);
		}

		// IF BOOK DETAILS ARE AVAILABLE FROM GOOGLE BOOK API
		// SAMPLE API RESPONSE - https://www.googleapis.com/books/v1/volumes?q=isbn:9780525954989
		if (itemDetails) {
			const authorStr = convertArrToStr(itemDetails.authors);
			const categoryStr = convertArrToStr(itemDetails.categories);
			const categoryJSX = itemDetails.categories ? <p>{categoryStr}</p> : <></>;
			const ratingJSX = itemDetails.averageRating
				? `Ratings: ${itemDetails.averageRating} (${itemDetails.ratingsCount} reviews)`
				: 'No ratings available (0)';

			const thumbnail = itemDetails.imageLinks
				? itemDetails.imageLinks.thumbnail
				: defaultThumbnail;

			const addButtonJSX =
				props.from === 'showItems' ? (
					<button className='btn add-to-wishlist' value='add' onClick={toggle}>
						Add to Wishlist
					</button>
				) : (
					''
				);

			return (
				<div className='show-item'>
					<div>
						<a
							href={itemDetails.previewLink}
							target='_blank'
							rel='noopener noreferrer'>
							<img src={thumbnail} alt={itemDetails.title} />
						</a>
					</div>
					<div>
						<h3>{itemDetails.title}</h3>
						<h5>by {authorStr}</h5>
						{bestSellerDateJSX}
						{categoryJSX}
						{/* <p>ISBN: {itemDetails.industryIdentifiers[0].identifier}</p> */}

						<p>{trimTo500(itemDetails.description)}</p>
						<p>Publisher: {itemDetails.publisher}</p>
						<p>Published: {itemDetails.publishedDate}</p>
						<p>{ratingJSX} </p>
						{addButtonJSX}
					</div>
				</div>
			);
		}
	} else return <></>;
};

export default ShowItem;
