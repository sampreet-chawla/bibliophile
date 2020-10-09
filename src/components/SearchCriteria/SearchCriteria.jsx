import React, { useState } from 'react';
import './SearchCriteria.css';
import { FaSearch } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';

const SearchCriteria = (props) => {
	const [searchText, setSearchText] = useState('');
	const handleOnChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleClick = (event) => {
		event.preventDefault();
		props.handleSearchCriteria('searchText', searchText);
		setSearchText('');
	};

	const handleBestSellingClick = (event) => {
		event.preventDefault();
		props.handleSearchCriteria('bestSelling', '');
	};

	return (
		<div className='div-search-criteria'>
			<div className='div-header'>
				<h3>Browse</h3>
				<button id='btn-best-selling' onClick={handleBestSellingClick}>
					<FaCertificate style={{ color: 'orange' }} />✨ Best Selling
				</button>
			</div>
			<p>Hi Bibliophile, please find me books...</p>
			<form>
				<input
					type='text'
					value={searchText}
					onChange={handleOnChange}
					placeholder='Search by Title OR Author'
					className='div-search-criteria search-text'
					autoComplete='off'
				/>
				<button
					onClick={handleClick}
					className='div-search-criteria search-icon'>
					<FaSearch id='search-icon' />
				</button>
			</form>
		</div>
	);
};

export default SearchCriteria;
