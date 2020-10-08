//import { FaStart, FaStarO, FaStarHalfO } from 'react-icons/fa';

//////////////////////////////////////////////////////////////////////////////////
// Function to return a single string with comma separated values from an array
export function convertArrToStr(arr) {
	let str = '';
	if (arr) {
		if (arr.length > 1) {
			str = arr.reduce((str, arrValue) => str.concat(arrValue, ', '));
			str = str.endsWith(', ') ? str.substr(0, str.lastIndexOf(', ')) : str;
		} else if (arr.length === 1) {
			str = arr[0];
		}
	} else {
		str = 'Unknown';
	}
	return str;
}

export function trimTo500(description) {
	if (description) {
		return description.length > 500
			? description.substr(0, 500) + '...'
			: description;
	} else {
		return 'Not available.';
	}
}

//////////////////////////////////////
// Function to return stars from the book rating.
export function ratingAsStarJSX(ratingNum) {}
