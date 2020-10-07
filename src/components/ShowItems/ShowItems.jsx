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

	const makeGoogleApiCall = async () => {
		// Make Google API call
		const searchUrl = `${googleBaseUrl}?${searchKey}=${displaySearchValue}`;
		console.log('In ShowItems - searchUrl', searchUrl);
		const res = await fetch(searchUrl);
		const data = await res.json();
		console.log('data', data);
		setSearchedResults({ totalItems: data.totalItems, items: data.items });
	};

	const makeBestSellingApiCalls = async () => {
		// console.log(
		// 	'process.env.NYT_BOOKS_API_KEY : ',
		// 	process.env.NYT_BOOKS_API_KEY
		// );

		// For Best Selling Books as of Current Date, use NYT Book API
		const nytBooksUrl =
			'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=qhstV6EWd3jJ6cmGxXP5ZA7UwEgaFdRf';
		const res = await fetch(nytBooksUrl);
		const data = await res.json();
		console.log('nyt books api data - ', data.results);
		const bestSellingItems = data.results.map((item, index) => {
			return {
				rank: item.rank,
				rank_last_week: item.rank_last_week || 'N/A',
				weeks_on_list: item.weeks_on_list || 'New this week',
				isbn_13: item.isbns[0].isbn13,
				bestsellers_date: item.bestsellers_date,
			};
		});
		console.log('bestSellingItems : ', bestSellingItems);

		// Make calls to Google API for other details.
		const itemDetailsList = bestSellingItems.map(async (item) => {
			const searchUrl = `${googleBaseUrl}?q=isbn:${item.isbn_13}`;
			//console.log('In ShowItems - searchUrl', searchUrl);
			const res = await fetch(searchUrl);
			const data = await res.json();
			//console.log('data', await data);
			let volumeInfoData = {};
			if (data.items) {
				volumeInfoData = data.items[0].volumeInfo;
			}
			return { ...item, volumeInfo: volumeInfoData };
		});
		Promise.all(itemDetailsList).then((data) => {
			//console.log('In ShowItems - bestSellingItemsWithDetails', data);
			setSearchedResults({
				totalItems: data.length,
				items: data,
			});
		});
	};

	useEffect(() => {
		const makeApiCall = () => {
			console.log('In Show Items: ', searchKey);
			if (searchKey === 'bestSelling') {
				makeBestSellingApiCalls();
			} else {
				makeGoogleApiCall();
			}
		};
		makeApiCall();
	}, [searchCriteria]);

	if (searchedResults.items) {
		const itemsList = searchedResults.items.map((item, index) => {
			return <ShowItem item={item} key={index} from='showItems' />;
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
