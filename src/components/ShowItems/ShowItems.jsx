import React, { useState, useEffect } from 'react';

import ShowItem from '../ShowItem/ShowItem';
//import { FaAngleDoubleRight } from 'react-icons/fa';
import './ShowItems.css';

const ShowItems = (props) => {
	const [searchedResults, setSearchedResults] = useState({});
	const [searchCriteria, setSearchCriteria] = useState({});

	const searchKey = props.searchCriteria.key;
	const displaySearchKey = props.searchCriteria.displayKey;
	const displaySearchValue = props.searchCriteria.value;

	if (searchCriteria !== props.searchCriteria) {
		setSearchCriteria(props.searchCriteria);
	}

	const makeGoogleApiCall = async () => {
		// Make Google API call for the search criteria
		const googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes';
		const searchUrl = `${googleBaseUrl}?${searchKey}=${displaySearchValue}`;
		const res = await fetch(searchUrl);
		const data = await res.json();
		setSearchedResults({ totalItems: data.totalItems, items: data.items });
	};

	const makeBestSellingApiCalls = async () => {
		// For Best Selling Books as of Current Date, use NYT Book API
		const nytBooksUrl =
			'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=qhstV6EWd3jJ6cmGxXP5ZA7UwEgaFdRf';
		const res = await fetch(nytBooksUrl);
		const data = await res.json();
		const bestSellingItems = data.results.map((item, index) => {
			return {
				rank: item.rank,
				rank_last_week: item.rank_last_week || 'N/A',
				weeks_on_list: item.weeks_on_list || 'New this week',
				isbn_13: item.isbns[0].isbn13,
				bestsellers_date: item.bestsellers_date,
			};
		});

		// Make calls to Google API with ISBN match for extra details.
		const itemDetailsList = bestSellingItems.map(async (item) => {
			const googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes';
			const searchUrl = `${googleBaseUrl}?q=isbn:${item.isbn_13}`;
			const res = await fetch(searchUrl);
			const data = await res.json();
			let volumeInfoData = null;
			if (data.items) {
				volumeInfoData = data.items[0].volumeInfo;
			}
			return {
				...item,
				volumeInfo: volumeInfoData,
			};
		});
		Promise.all(itemDetailsList).then((data) => {
			setSearchedResults({
				totalItems: data.length,
				items: data,
			});
		});
	};

	useEffect(() => {
		const makeApiCall = () => {
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
			// Display only when Google API data is available
			if (item.volumeInfo) {
				return <ShowItem item={item} key={index} from='showItems' />;
			} else {
				return '';
			}
		});
		return (
			<div className='div-search-results'>
				<h3>
					{displaySearchKey}: {displaySearchValue}
				</h3>
				<div className='div-search-results contents'>{itemsList}</div>
			</div>
		);
	} else {
		return <h4 className='search-message'>No match found.</h4>;
	}
};

export default ShowItems;
