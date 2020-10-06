import { FaStart, FaStarO, FaStarHalfO } from 'react-icons/fa';

//////////////////////////////////////////////////////////////////////////////////
// Function to return a single string with comma separated values from an array
// Here, this function return an author string from an array of authors.
export function convertAuthorsArrToStr(authorsArr) {
	let authorStr = '';
	if (authorsArr.length > 1) {
		authorStr = authorsArr.reduce((authorsStr, author) =>
			authorsStr.concat(author, ', ')
		);
		authorStr = authorStr.endsWith(', ')
			? authorStr.substr(0, authorStr.lastIndexOf(', '))
			: authorStr;
	} else if (authorsArr.length === 1) {
		authorStr = authorsArr[0];
	} else {
		authorStr = 'Unknown';
	}
	return authorStr;
}

export function trimDescriptionTo500(description) {
	if (description) {
		return description.length > 500
			? description.substr(0, 500) + ' ...'
			: description;
	} else {
		return 'Not available.';
	}
}

//////////////////////////////////////
// Function to return stars from the book rating.
export function ratingAsStarJSX(ratingNum) {}
