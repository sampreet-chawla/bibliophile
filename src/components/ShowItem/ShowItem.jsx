import React from 'react';

import './ShowItem.css';
import { convertAuthorsArrToStr, trimDescriptionTo500 } from './ShowItemHelper';
import { appContext } from '../App/App.jsx';

const ShowItem = (props) => {
	const item = props.item;

	const appCtx = React.useContext(appContext);
	console.log(' In ShowItem, appCtx: ', appCtx);
	console.log(' In ShowItem, appContext: ', appContext);

	React.useEffect(() => {
		console.log('In ShowItem useEffect');
	}, []);

	if (item) {
		const itemDetails = item.volumeInfo;

		let authorStr = convertAuthorsArrToStr(itemDetails.authors);
		const ratingJSX = itemDetails.averageRating
			? `${itemDetails.averageRating} (${itemDetails.ratingsCount} reviews)`
			: '(0)';

		const thumbnail = itemDetails.imageLinks
			? itemDetails.imageLinks.thumbnail
			: 'http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api';

		return (
			<div className='show-item'>
				<hr />
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
					<p>{trimDescriptionTo500(itemDetails.description)}</p>
					<p>{ratingJSX} </p>
					<button
						className='btn add-to-wishlist'
						value='Add to Wishlist'
						onClick={() => appCtx.handleSelectedItem(item, 'add')}>
						Add to Wishlist
					</button>
				</div>
			</div>
		);
	} else return <></>;
};

export default ShowItem;
