//import { FaStart, FaStarO, FaStarHalfO } from 'react-icons/fa';
//////////////////////////////////////
// Function to return stars from the book rating. - TODO
export function ratingAsStarJSX(ratingNum) {}

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

//////////////////////////////////////////////////////////////////////////////////
// Function to trim the length of the description to a specified length
export function trimToLen(description, len) {
	if (description) {
		return description.length > len
			? description.substr(0, len) + '...'
			: description;
	} else {
		return 'Not available.';
	}
}
