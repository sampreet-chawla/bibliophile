import React from 'react';

import './ShowItem.css';
import { convertAuthorsArrToStr, trimDescriptionTo500 } from './ShowItemHelper';

const ShowItem = (props) => {
	const item = props.item;

	React.useEffect(() => {
		console.log('In ShowItem useEffect');
	}, []);

	if (item) {
		const itemDetails = item.volumeInfo;

		console.log('authorStr : ', convertAuthorsArrToStr(itemDetails.authors));
		let authorStr = convertAuthorsArrToStr(itemDetails.authors);
		const ratingJSX = itemDetails.averageRating
			? `${itemDetails.averageRating} (${itemDetails.ratingsCount})`
			: '(0)';
		return (
			<div className='show-item'>
				<hr />
				<div>
					<a
						href={itemDetails.previewLink}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={itemDetails.imageLinks.thumbnail}
							alt={itemDetails.title}
						/>
					</a>
				</div>
				<div>
					<h3>{itemDetails.title}</h3>
					<h5>by {authorStr}</h5>
					<p>{trimDescriptionTo500(itemDetails.description)}</p>
					<p>{ratingJSX} </p>
				</div>
			</div>
		);
	} else return <></>;
};

export default ShowItem;
