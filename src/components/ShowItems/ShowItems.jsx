import React, { useState, useEffect } from 'react';

import ShowItem from '../ShowItem/ShowItem';
import { FaAngleDoubleRight } from 'react-icons/fa';

const ShowItems = (props) => {
	const [searchedResults, setSearchedResults] = useState({});
	const [searchCriteria, setSearchCriteria] = useState({});

	const searchKey = props.searchCriteria.key;
	const displaySearchKey = props.searchCriteria.displayKey;
	const displaySearchValue = props.searchCriteria.value;

	const googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes';

	console.log('In Show Items,  props.searchCriteria', props.searchCriteria);
	if (searchCriteria !== props.searchCriteria)
		setSearchCriteria(props.searchCriteria);
	console.log(
		'In Show Items,  searchCriteria',
		searchCriteria === props.searchCriteria
	);

	useEffect(() => {
		const makeGoogleApiCall = async () => {
			console.log('In Show Items: ', searchKey);
			if (searchKey !== 'bestSelling') {
				const searchUrl = `${googleBaseUrl}?${searchKey}=${displaySearchValue}`;
				console.log('In ShowItems - searchUrl', searchUrl);
				const res = await fetch(searchUrl);
				const data = await res.json();
				console.log('data', data);
				setSearchedResults({ totalItems: data.totalItems, items: data.items });
			} else {
				// console.log(
				// 	'process.env.NYT_BOOKS_API_KEY : ',
				// 	process.env.NYT_BOOKS_API_KEY
				// );
				// const nytBooksUrl = 'qhstV6EWd3jJ6cmGxXP5ZA7UwEgaFdRf';
				
			}
		};
		makeGoogleApiCall();
	}, [searchCriteria]);

	// const makeGoogleApiCall = async () => {
	// 	console.log('In makeGoogleApiCall');
	// 	const res = await fetch(
	// 		`https://www.googleapis.com/books/v1/volumes?q=Amanda`
	// 	);
	// 	const data = await res.json();
	// 	console.log('data', data);
	// 	setSearchedResults({ totalItems: data.totalItems, items: data.items });
	// };

	// useEffect(() => {
	// 	console.log('In useEffect');
	// 	makeGoogleApiCall();
	// }, [makeGoogleApiCall]);

	if (searchedResults.items) {
		// let defaultThumbnail = '';
		// if (
		// 	searchedResults.items[0] &&
		// 	searchedResults.items[0].volumeInfo &&
		// 	searchedResults.items[0].volumeInfo.imageLinks
		// ) {
		// 	defaultThumbnail =
		// 		searchedResults.items[0].volumeInfo.imageLinks.thumbnail;
		// }

		const itemsList = searchedResults.items.map((item, index) => {
			return <ShowItem item={item} key={index} />;
		});
		return (
			<>
				<h3>
					{displaySearchKey} <FaAngleDoubleRight /> {displaySearchValue}
				</h3>
				{itemsList}
			</>
		);
	} else return <h3>No Results Found</h3>;
};

export default ShowItems;
