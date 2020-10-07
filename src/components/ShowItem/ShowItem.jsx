import React from 'react';

import './ShowItem.css';
import { convertArrToStr, trimTo500 } from './ShowItemHelper';
import { appContext } from '../App/App.jsx';

const ShowItem = (props) => {
	const item = props.item;
	const defaultThumbnail =
		'https://res.cloudinary.com/dreamer123/image/upload/v1602029515/Sampreet-SEIR-831-unit2/image-unavailable-thumbnail_jnjdhg.gif';
	//: 'http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api';

	const appCtx = React.useContext(appContext);

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
			console.log('itemDetails.categories', itemDetails.categories);
			const categoryStr = convertArrToStr(itemDetails.categories);
			const categoryJSX = itemDetails.categories ? (
				<p>convertArrToStr(itemDetails.categories)</p>
			) : (
				<></>
			);
			const ratingJSX = itemDetails.averageRating
				? `${itemDetails.averageRating} (${itemDetails.ratingsCount} reviews)`
				: '(0)';

			const thumbnail = itemDetails.imageLinks
				? itemDetails.imageLinks.thumbnail
				: defaultThumbnail;

			const addButtonJSX =
				props.from === 'showItems' ? (
					<button
						className='btn add-to-wishlist'
						value='Add to Wishlist'
						onClick={() => appCtx.handleSelectedItem(item, 'add')}>
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

			// IF BOOK DETAILS ARE AVAILABLE FROM NYT BOOK API
			// REFER SAMPLE AT - https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=qhstV6EWd3jJ6cmGxXP5ZA7UwEgaFdRf
			// } else {
			// 	return (
			// 		<div className='show-item'>
			// 			<hr />
			// 			<div>
			// 				<a
			// 					href={item.amazon_product_url}
			// 					target='_blank'
			// 					rel='noopener noreferrer'>
			// 					<img src={defaultThumbnail} alt={item.book_details[0].title} />
			// 				</a>
			// 			</div>
			// 			<div>
			// 				<h3>{item.book_details[0].title}</h3>
			// 				<h5>by {item.book_details[0].author}</h5>
			// 				{bestSellerDateJSX}
			// 				<p>ISBN:{item.isbn_13}</p>
			// 				<p>{trimDescriptionTo500(item.book_details[0].description)}</p>
			// 				<p>Publisher:{item.book_details[0].publisher}</p>
			// 				<p>Published: {item.published_date}</p>
			// 				<button
			// 					className='btn add-to-wishlist'
			// 					value='Add to Wishlist'
			// 					onClick={() => appCtx.handleSelectedItem(item, 'add')}>
			// 					Add to Wishlist
			// 				</button>
			// 			</div>
			// 		</div>
			// 	);
		}
	} else return <></>;
};

export default ShowItem;
