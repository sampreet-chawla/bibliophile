import React, { useState } from 'react';

import './ShowItem.css';
import { convertArrToStr, trimToLen } from './ShowItemHelper';
import { appContext } from '../App/App.jsx';

const ShowItem = (props) => {
	const item = props.item;
	const defaultThumbnail =
		'https://res.cloudinary.com/dreamer123/image/upload/v1602199643/Sampreet-SEIR-831-unit2/image-not-available-thumbnail_ydl8en.png';

	const appCtx = React.useContext(appContext);
	const [isFav, setIsFav] = useState(false);

	const [isShowDescFull, setShowDescFull] = useState(false);

	const toggleAddToWishlist = (event) => {
		if (!isFav) {
			appCtx.handleSelectedItem(item, 'add');
			event.target.disabled = true;
			event.target.innerHTML = 'Added';
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

		// IF BOOK DETAILS ARE AVAILABLE FROM GOOGLE BOOK API
		// SAMPLE API RESPONSE - https://www.googleapis.com/books/v1/volumes?q=isbn:9780525954989
		if (itemDetails) {
			const authorStr = convertArrToStr(itemDetails.authors);
			const categoryStr = itemDetails.categories
				? convertArrToStr(itemDetails.categories)
				: '';
			const ratingStr = itemDetails.averageRating
				? `Ratings: ${itemDetails.averageRating} (${itemDetails.ratingsCount} reviews)`
				: 'No ratings available (0)';

			const thumbnail = itemDetails.imageLinks
				? itemDetails.imageLinks.thumbnail
				: defaultThumbnail;

			const addButtonJSX =
				props.from === 'showItems' ? (
					<button
						className='btn add-to-wishlist'
						value='add'
						onClick={toggleAddToWishlist}>
						Add to Wishlist
					</button>
				) : (
					''
				);

			// IF BEST SELLER INFORMATION IS AVAILABLE.
			let bestSellerDateJSX = <></>;
			if (item.rank) {
				bestSellerDateJSX = (
					<div className='best-seller-div'>
						<p className='extra-info'>Rank: {item.rank}</p>
						<p className='extra-info'>Rank Last Week: {item.rank_last_week}</p>
						<p className='extra-info'>Weeks on list: {item.weeks_on_list}</p>
						<p className='extra-info'>
							Best Seller's Date: {item.bestsellers_date}
						</p>
					</div>
				);
			}

			const descLen = itemDetails.description
				? itemDetails.description.length
				: 0;
			const toggleShowFullDesc = () => {
				if (descLen.length > 200) {
					const desc = document.getElementById('desc');
					if (isShowDescFull) {
						desc.innerHTML = trimToLen(itemDetails.description, 200) + 'more';
					} else {
						desc.innerHTML = itemDetails.description + ' ...less';
					}
					setShowDescFull(!isShowDescFull);
				}
			};

			return (
				<div className='show-item-container'>
					<div className='image'>
						<a
							href={itemDetails.previewLink}
							target='_blank'
							rel='noopener noreferrer'>
							<img src={thumbnail} alt={itemDetails.title} />
						</a>
					</div>
					<div className='title-info'>
						<h4>{itemDetails.title}</h4>
						<h6>by {authorStr}</h6>
						<p className='extra-info bold'>{ratingStr} </p>
						<p className='extra-info bold'>{categoryStr} </p>
						{bestSellerDateJSX}

						{/* <p>ISBN: {itemDetails.industryIdentifiers[0].identifier}</p> */}
					</div>
					<div className='description' onClick={toggleShowFullDesc}>
						<span id='desc' tooltip='Click on Preview for more' flow='down'>
							{trimToLen(itemDetails.description, 200)}
						</span>
					</div>
					<div className='publisher'>
						<p className='extra-info'>Publisher: {itemDetails.publisher}</p>
						<p className='extra-info'>
							Published In: {itemDetails.publishedDate}
						</p>
					</div>
					<div className='links'>
						{addButtonJSX}
						<a
							id='preview'
							href={itemDetails.previewLink}
							target='_blank'
							rel='noopener noreferrer'>
							Preview
						</a>
					</div>
				</div>
			);
		}
	} else return <></>;
};

export default ShowItem;
