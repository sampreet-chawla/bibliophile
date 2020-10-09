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

export function trimToLen(description, len) {
	if (description) {
		return description.length > len
			? description.substr(0, len) + '...'
			: description;
	} else {
		return 'Not available.';
	}
}

///////////////////////////////////////
// Function to Determine Viewport Size
// Source - https://www.dyn-web.com/javascript/viewport/
function dw_getWindowDims() {
	var doc = document,
		w = window;
	var docEl =
		doc.compatMode && doc.compatMode === 'CSS1Compat'
			? doc.documentElement
			: doc.body;

	var width = docEl.clientWidth;
	var height = docEl.clientHeight;

	// mobile zoomed in?
	if (w.innerWidth && width > w.innerWidth) {
		width = w.innerWidth;
		height = w.innerHeight;
	}

	return { width: width, height: height };
}

//////////////////////////////////////
// Function to return stars from the book rating. - TODO
export function ratingAsStarJSX(ratingNum) {}
