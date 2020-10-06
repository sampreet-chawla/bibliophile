import React, { useState, useEffect } from 'react';

import ShowItem from '../ShowItem/ShowItem';
import { FaAngleDoubleRight } from 'react-icons/fa';

const ShowItems = (props) => {
	const [searchedResults, setSearchedResults] = useState({});

	const searchKey = props.searchCriteria.key;
	const displaySearchKey = props.searchCriteria.displayKey;
	const displaySearchValue = props.searchCriteria.value;

	const googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes';

	// const makeGoogleApiCall = async () => {
	// 	if (displaySearchValue !== '') {
	// 		const searchUrl = `${googleBaseUrl}?{searchKey}=${displaySearchValue}`;
	// 		console.log('In ShowItems - searchUrl', searchUrl);
	// 		const res = await fetch(searchUrl);
	// 		const data = await res.json();
	// 		console.log('data', data);
	// 		//setSearchedResults(data);
	// 	} else {
	// 		console.log('In Show Items: ', searchKey);
	// 	}
	// };

	const makeGoogleApiCall = async () => {
		console.log('In makeGoogleApiCall');
		const res = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=Amanda`
		);
		const data = await res.json();
		console.log('data', data);
		setSearchedResults({ totalItems: data.totalItems, items: data.items });
	};

	useEffect(() => {
		console.log('In useEffect');
		makeGoogleApiCall();
	}, []);

	if (searchedResults.items) {
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
