import React, { useState } from 'react';
import './SearchCriteria.css';
import { FaSearch } from 'react-icons/fa';

const SearchCriteria = (props) => {
	const [searchText, setSearchText] = useState('');
	const handleOnChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleClick = (event) => {
		//event.preventDefault();
		console.log('searchText : ', searchText);
		props.handleSearchCriteria('searchText', searchText);
	};

	return (
		<div className='div-search-criteria'>
			<form>
				<input
					type='text'
					value={searchText}
					onChange={handleOnChange}
					placeholder='Search by Title OR Author'
					className='div-search-criteria search-text'
					autocomplete="off"
				/>
				<a
					href='#'
					onClick={handleClick}
					className='div-search-criteria search-icon'>
					<FaSearch />
				</a>
			</form>
		</div>
	);
};

export default SearchCriteria;
