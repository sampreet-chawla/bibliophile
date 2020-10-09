import React from 'react';

import './Sidebar.css';
import { FaCertificate } from 'react-icons/fa';

const Sidebar = (props) => {
	// return <h3>Sidebar Component</h3>;

	const handleBestSellingClick = () => {
		props.handleSearchCriteria('bestSelling', '');
	};

	const handleNewReleasesClick = () => {
		props.handleSearchCriteria('newReleases', '');
	};

	const handleForYouClick = () => {
		props.handleSearchCriteria('justForYou', '');
	};

	const handleClick = (event) => {
		console.log('searchText : ', event.target.value);
		props.handleSearchCriteria('genre', event.target.value);
	};

	return (
		<>
			<div className='sidebar-special'>
				<button onClick={handleBestSellingClick}>
					<FaCertificate style={{ color: 'orange' }} />✨ Best Selling
				</button>
				<button onClick={handleNewReleasesClick} value='inspirational'>
					🔥 New Releases
				</button>
				<button onClick={handleForYouClick} value='romance'>
					💝 For You
				</button>
			</div>
			<div className='sidebar-genre'>
				<div className='genre-heading'>
					<h5>Genres</h5>
				</div>
				<button onClick={handleClick} value='fantasy'>
					💕 Fantasy
				</button>
				<button onClick={handleClick} value='fiction'>
					👽 Fiction
				</button>
				<button onClick={handleClick} value='health'>
					🤹 Health
				</button>
				<button onClick={handleClick} value='horror'>
					😱 Horror
				</button>
				<button onClick={handleClick} value='inspirational'>
					🚀 Inspirational
				</button>
				<button onClick={handleClick} value='literature'>
					🔖 Literature
				</button>
				<button onClick={handleClick} value='poetry'>
					🌈 Poetry
				</button>
				<button onClick={handleClick} value='romance'>
					💕 Romance
				</button>
			</div>
		</>
	);
};

export default Sidebar;
