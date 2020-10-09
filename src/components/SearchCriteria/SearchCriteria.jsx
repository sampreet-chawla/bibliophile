import React, { useState } from 'react';
import './SearchCriteria.css';
import { FaSearch } from 'react-icons/fa';

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

	return (
		<div className='div-search-criteria'>
			<h3>Browse</h3>
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
					//href=''
					onClick={handleClick}
					className='div-search-criteria search-icon'>
					<FaSearch id='search-icon' />
				</button>
			</form>
		</div>
	);
};

export default SearchCriteria;
