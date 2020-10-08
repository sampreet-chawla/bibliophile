import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './App.css';

import BiblioNavBar from '../Nav/BiblioNavBar.jsx';
import SearchCriteria from '../SearchCriteria/SearchCriteria';
import Sidebar from '../Sidebar/Sidebar';
import ShowItems from '../ShowItems/ShowItems';
import MyWishlist from '../MyWishlist/MyWishlist';
import Resources from '../Resources/Resources';

export const appContext = React.createContext(null);

function App() {
	const [favItems, setFavItems] = useState([]);

	const defaultSearchCriteria = {
		key: 'bestSelling',
		value: '',
		displayKey: 'Best Selling Books',
	};

	const [searchCriteria, setSearchCriteria] = useState(defaultSearchCriteria);

	const handleSearchCriteria = (searchKey, searchText) => {
		console.log(
			`App handleSearchCriteria - searchkey : ${searchKey}, searchText=${searchText}`
		);
		switch (searchKey) {
			case 'searchText':
				searchText === null || searchText.trim() === ''
					? setSearchCriteria(defaultSearchCriteria)
					: setSearchCriteria({
							key: 'q',
							value: searchText,
							displayKey: 'Searched by',
					  });
				break;
			case 'genre':
				setSearchCriteria({
					key: 'q=subject:',
					value: searchText,
					displayKey: 'Genre',
				});
				break;
			case 'justForYou':
				setSearchCriteria({
					key: 'q=subject:inspirational',
					value: '',
					displayKey: 'Just for You',
				});
				break;
			case 'newReleases':
				setSearchCriteria({
					key: 'q=subject:fiction',
					value: '',
					displayKey: 'New Releases',
				});
				break;
			case 'bestSelling': // Fallback
			default:
				setSearchCriteria(defaultSearchCriteria);
				break;
		}
	};

	const handleSelectedItem = (favItem, str) => {
		const favItemList = [...favItems];
		if (str === 'add') {
			favItemList.push(favItem);
		} else {
			// Remove from wishlist
		}
		console.log('App favItemList : ', favItemList);
		setFavItems(favItemList);
	};

	console.log('searchCriteria : ', searchCriteria);
	console.log('favItems : ', favItems);

	return (
		<appContext.Provider value={{ handleSelectedItem }}>
			<Router>
				<div className='App'></div>
				<BiblioNavBar />
				<main>
					<Switch>
						<Route
							path='/'
							exact={true}
							render={(routerProps) => {
								return (
									<div className='browse-container'>
										<aside className='sidebar'>
											<Sidebar
												searchCriteria={searchCriteria}
												handleSearchCriteria={handleSearchCriteria}
											/>
										</aside>
										<section className='search-section'>
											<SearchCriteria
												searchCriteria={searchCriteria}
												handleSearchCriteria={handleSearchCriteria}
												routerProps={routerProps}
											/>
											<ShowItems
												searchCriteria={searchCriteria}
												favItems={favItems}
											/>
										</section>
									</div>
								);
							}}
						/>
						<Route
							path='/mywishlist'
							exact={true}
							render={(routerProps) => <MyWishlist favItems={favItems} />}
						/>
						<Route path='/resources' exact={true}>
							<Resources />
						</Route>
						<Redirect to='/' />
					</Switch>
				</main>
			</Router>
		</appContext.Provider>
	);
}

export default App;
