# Bibliophile Project Overview
![Book Magic](https://res.cloudinary.com/dreamer123/image/upload/v1602366324/Sampreet-SEIR-831-unit2/book-magic_k114jh.png) 

## Project Links

- [Github repo link](https://github.com/sampreet-chawla/bibliophile)
- [bibliophile](https://bibliophile.netlify.app/) deployed using [![Netlify Status](https://api.netlify.com/api/v1/badges/966fc1fe-9b8d-4e02-a213-e53f3902fe90/deploy-status)](https://app.netlify.com/sites/bibliophile/deploys)

## Project Description

Bibliophile is a "Book Browsing" project as a part of Sampreet Chawla's Unit-2 Project for SEI course at General Assembly. The instension of this project is to help current and emerging Book Lovers with the following -

- Best Seller List
- Search for the Books by Title / Author / Genre.
- View the Book Information with details like Title, Author, Rating, etc.
- View the Book Preview (an external link) or Add to Wishlist
- My Wishlist - Track user book interests
- Resources - To include project journey and miscellaneous links.

## API

1. API sample from [Google Books API](https://developers.google.com/books) :

#### Here, the API performs a search with the term 'quilting'

#### https://www.googleapis.com/books/v1/volumes?q=quilting

```
{
    "kind": "books#volumes",
    "totalItems": 2607,
    "items": [
        {
          "kind": "books#volume",
          "id": "x9x_DwAAQBAJ",
          "etag": "iRznuXvj02o",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/x9x_DwAAQBAJ",
          "volumeInfo": {
          "title": "Simple Geometric Quilting",
          "subtitle": "Modern, Minimalist Designs for Throws, Pillows, Wall Decor and More",
          "authors": [
            "Laura Preston"
           ],
          "publisher": "Page Street Publishing",
          "publishedDate": "2019-08-27",
          "description": "Bold Shapes and Clean Lines for Faster Modern Quilting Breathe some fresh air into your quilts with 20 stunning contemporary projects from designer Laura Preston. Using simple shapes and solid colors, Laura’s method streamlines the traditional quilting process for beautiful quilts in less time. Quilt tops come together quickly with large-scale cuts of fabric and as little piecing as possible, making these projects perfect for beginners. Advanced quilters can delve into modern techniques such as creating curved lines and working with negative space rather than intricate quilting blocks. From chic wall hangings to cozy crib-size and queen-size quilts, every project doubles as a work of art. Fueled by her minimalist lifestyle traveling the United States in her Airstream trailer, Laura’s designs reflect the striking landscapes of the American West. The Arches Queen Quilt showcases the dramatic curves found in Arches National Park in Utah. The Lone Pine Pillow, with its range of triangles, was inspired by the Sierra Nevada mountains, and the Sand Dollar Table Runner was sparked by a beach in Big Sur, California. Follow Laura’s insightful design tips, and soon you’ll start to see inspiration everywhere. With illustrated step-by-step instructions and in-depth tutorials, this book is an essential resource for the modern quilter.",
          ...
       }, ...
    ],
    ...
}
```

2. API sample from [New York Times Book API](https://developer.nytimes.com/docs/books-product/1/overview)

#### This API gets the Top 15 Best Sellers list. If no date is provided returns the latest list. By default, it fetches the best seller list for hard-cover fiction books.

#### https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=<API_KEY>

```
  {
    "status": "OK",
    "copyright": "Copyright (c) 2020 The New York Times Company.  All Rights Reserved.",
    "num_results": 15,
    "last_modified": "2020-09-30T23:39:01-04:00",
    "results": [
      {
        "list_name": "Hardcover Fiction",
        "display_name": "Hardcover Fiction",
        "bestsellers_date": "2020-09-26",
        "published_date": "2020-10-11",
        "rank": 1,
        "rank_last_week": 0,
        "weeks_on_list": 1,
        "asterisk": 0,
        "dagger": 0,
        "amazon_product_url": "https://www.amazon.com/dp/198481835X?tag=NYTBSREV-20&tag=NYTBS-20",
        "isbns": [
          {
            "isbn10": "198481835X",
            "isbn13": "9781984818355"
          },
          {
            "isbn10": "1984818368",
            "isbn13": "9781984818362"
          }
        ],
        "book_details": [
        {
          "title": "THE BOOK OF TWO WAYS",
          "description": "After surviving a plane crash, a death doula travels to Egypt to reconnect with an old flame who is an archaeologist.",
          "contributor": "by Jodi Picoult",
          "author": "Jodi Picoult",
          "contributor_note": "",
          "price": 0,
          "age_group": "",
          ...
          ...
        }
        ...
      }
  }
```

## Wireframes

Wireframes are created using [MockFlow](https://mockflow.com/) and Architecture Diagram using [Google Drawings](https://chrome.google.com/webstore/detail/google-drawings/mkaakpdehdafacodkgkpghoibnmamcme?hl=en-US)

- [Mobile View](https://res.cloudinary.com/dreamer123/image/upload/v1602260934/Sampreet-SEIR-831-unit2/Bibliophile_-_Mobile_View_c2c8eb.png) - The mobile view provides browse feature for Best Sellers, Search by Author or Title. The resulting books are listed in a single column with brief information on the book, with add to wishlist and preview links. The wishlist displays the books selected in a single column with Preview link. Resources section will share details on the project journey and miscellaneous resources links.
- [Tablet View](https://res.cloudinary.com/dreamer123/image/upload/v1602260934/Sampreet-SEIR-831-unit2/Bibliophile_-_Tablet_View_p6prcb.png) - The tablet view provides browse feature for Best Sellers, Search by Author or Title. The resulting books are listed in a two columns with information on the book with description, add to wishlist and preview links. The wishlist displays the books selected in a two columns with Preview link. Resources section will share details on the project journey and miscellaneous resources links.
- [Laptop View](https://res.cloudinary.com/dreamer123/image/upload/v1602260934/Sampreet-SEIR-831-unit2/Bibliophile_-_Laptop_view_nr7od5.png) - The laptop view provides browse feature for Best Sellers, Search by Author or Title. It also has addition search with New Releases, For You and varying pre-selected genres. The resulting books are listed in a two columns with information on the book with description, add to wishlist and preview links. The wishlist displays the books selected in a two columns with Preview link. Resources section will share details on the project journey and miscellaneous resources links.

## React Architecture Diagram

The project is built on React Components and makes use of Props, and React hooks like useState, useEffect, useContext, for state management. There is lifting of state while handling search criteria and selecting items.

- [React Architecture Diagram](https://res.cloudinary.com/dreamer123/image/upload/v1601916957/Sampreet-SEIR-831-unit2/Bibiophile_React_Architecture_Diagram_vyyisz.png)

### MVP/PostMVP

#### MVP EXAMPLE

- Find API urls for project
- Create Stateless Components with Router
- Create Stateful Components - Browse
- Create Stateful Components - Show Item & Genre
- Create Stateful Components - My Wishlist
- Integrate with GB-API (fetch and show items)
- Integrate with GB-API (show item)
- Integrate with NYT books API - Bestselling List
- Create Resource Component
- Make Icons and Mock Image
- Basic Nav Bar Functionality
- Mobile First layout using CSS Grid, CSS Flex / SCSS
- Responsive Design

#### PostMVP EXAMPLE

- Add Embedded viewer (free items)
- Include Blog of Project Journey
- Show items from same author
- Complete Sass Integration (if not used)
- Gatsby Integration
- Dark Theme and Light Theme
- Code Cleanup and conformance to best practices

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component    |                                 Description                                  |
| ------------ | :--------------------------------------------------------------------------: |
| App          |       Make the initial data pull and include React Router, and Footer        |
| Nav          |                          Render the navigation bar                           |
| ShowCriteria |                        Take inputs on search criteria                        |
| Sidebar      | List the search options and list of genure to filter current search criteria |
| ShowItems    |    Display search criteria and books matching the current search criteria    |
| ShowItem     |                  Display an individual book in card format                   |
| MyWishlist   |                        Display books in the wish-list                        |
| Resources    |            Display resources and extra information about the site            |

## Timeline

- [Timeline](https://res.cloudinary.com/dreamer123/image/upload/v1601904065/Sampreet-SEIR-831-unit2/Bibiophile_Timeline_asqp4w.png)

### MVP

| Label | Activity                                        | Priority | Estimated Time | Time Invested | Actual Time |
| ----- | ----------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| A     | Find API urls for project                       |    H     |      2hrs      |    2.5hrs     |   2.5hrs    |
| B     | Create Stateless Components with Router         |    H     |      3hrs      |    1.5hrs     |   1.5hrs    |
| C     | Create Stateful Components - (Browse)           |    H     |      4hrs      |     6hrs      |    4hrs     |
| D     | Create Stateful Components - Show Item, Sidebar |    H     |      3hrs      |     3hrs      |    3hrs     |
| E     | Create Stateful Components - My Wishlist        |    H     |      3hrs      |     2hrs      |    2hrs     |
| F     | Integrate with GB-API (fetch and show items)    |    H     |      2hrs      |     4hrs      |    4hrs     |
| G     | Integrate with GB-API (show item- display)      |    H     |      2hrs      |     4hrs      |    3hrs     |
| H     | Integrate with NYT Books API - Best Selling     |    H     |      2hrs      |     2hrs      |    2hrs     |
| I     | Make own ~~Logo~~, Icons and Mock Image         |    M     |     1.5hrs     |     1hrs      |     1hr     |
| J     | Create Resource Component                       |    H     |      2hrs      |    0.5hrs     |   0.5hrs    |
| K     | Basic Nav Nar Functionality                     |    H     |      2hrs      |     6hrs      |   1.5hrs    |
| L     | Mobile First layout using CSS Grid/ Flex / SCSS |    H     |      3hrs      |     3hrs      |    3hrs     |
| M     | Responsive Design                               |    H     |      4hrs      |     3hrs      |    2hrs     |
|       | **Total**                                       |          |  **33.5hrs**   |  **38.5hrs**  |  **30hrs**  |

### PostMVP

| Label | Activity                                       | Priority | Estimated Time | Time Invested | Actual Time |
| ----- | ---------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| A     | Include Blog of Project Journey                |    H     |      3hrs      |      hrs      |     hrs     |
| B     | ~~Show items from same author~~                |    M     |      3hrs      |      hrs      |     hrs     |
| C     | ~~Sass Integration~~                           |    H     |      4hrs      |      hrs      |     hrs     |
| D     | ~~Dark Theme and Light Theme~~                 |    H     |      3hrs      |      hrs      |     hrs     |
| E     | ~~Remove from Wishlist~~                       |    M     |      2hrs      |      hrs      |     hrs     |
| F     | Code Cleanup and conformance to best practices |    H     |      3hrs      |     3hrs      |    3hrs     |
|       | **Total**                                      |          |   **18hrs**    |     3hrs      |    3hrs     |

## Additional Libraries - TBD

Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.

- [react-router](https://www.npmjs.com/package/react-router) and [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-icons](https://www.npmjs.com/package/react-icons) for [Font Awesome Icons](https://fontawesome.com/) - For example, used for search icon.
- [reactstrap Navbar](https://reactstrap.github.io/components/navbar/) for the top navigation bar.
- [react-router-bootstrap](https://www.npmjs.com/package/react-router-bootstrap) - Wrap the reactstrap NavLink in a <LinkContainer> to make it behave like a React Router <Link>.

## References

- [Liyas Thomas's Book Website](https://liyasthomas.github.io/books/#search) developed in HTML, CSS and JavaScript. Referred the website for its look and feel. Also talked to Liyas Thomas for his choice of Google Books API, limitations and challenges for the project.
- Article [Build a Best Sellers List with New York Times and Google Books API](https://www.freecodecamp.org/news/build-a-best-sellers-list-with-new-york-times-google-books-api-46201c30aec7/)

## Challenges

- Importing functions from helpers - Referred the [Stackflow link](https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native)
- [A Simple JavaScript Technique for Filling Star Ratings](https://webdesign.tutsplus.com/tutorials/a-simple-javascript-technique-for-filling-star-ratings--cms-29450)

## Code Snippet - TBD

The following code snippet is from ShowItems.jsx. It fetches the book details from Google Books API for the Best Sellers list received from NYT Book API, suing the matching 13-digit ISBNs. It had to make use of Promise.all() to wait for all the data fetched in the Array.map() before saving the details. This code work was demonstrated by [Alex Merced](https://www.linkedin.com/in/alexmerced/), our instructor to Riana, my fellow student, and I was able to use it similarly in my code.

```
// Make calls to Google API with ISBNs matching from NYT Book API results, for fetching details.
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
```

## Limitations

- Current search implementation would be for books and magazines.
- Best Selling list would be supported for hard-cover fiction books.
- Search results maybe restricted to 10 items at a time for all searches, except for best seller search which can fetch maximum of 15 items.
- 'New Releases' search would refer to mock images as could not find any API supporting it.
- 'For You' search is currently hard-coded to Inspirational books and magazines.
- Added a mock default image as sometimes images are not available from Google Book Api. The mock image was created by [canva.com](https://www.canva.com/) and resized to thumbnail size with [resizeimage.net](https://resizeimage.net/).

## Challenges

- Dependencies in useEffect were getting auto-filled by ESLint and giving 'Object is not a Function' error at compile time. Joe suggested disabling the ESLint, the code gives compile time warning but the runs well. Keeping it that way.
- reactstrap Navbar is giving Deprecated API error for its internal use of Collapse component, which is not supported by StrictMode of create-react-app. The code seems to run well but has the side-effect of losing state values from one page to another. Will have to try Materialize Navbar if time permits.
- Searching the right use of API and integrating with another API results was time-taking. In my bibliophile project, the combining of results of NYT Book API with Google Books API for Best Sellers list was challenging and time-consuming. Still have minor issues which needs to be fixed based on available time.
- Need to work on developing skills in Page layout, CSS styling and animation for faster Front-end development. Getting realistic mock screens makes life easier. React Architecture Design build was much easier and of great support.
- Use of [reactstrap Navbar](https://reactstrap.github.io/components/navbar/) is causing loss of React state values, hence any items added in wishlist in 'Browse' webpage is lost while moving to other pages like 'My Wishlist' and 'Resources'. An error is also raised that 'Collapse' component used in [reactstrap Navbar](https://reactstrap.github.io/components/navbar/) is using a Deprecated API which is not allowed by the strict mode of [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). Alex Merced, our instructor, suggested the use of LinkContainer and it worked well.

## Learnings

- Learnt a lot on developing React application using React components, State, Props, Hooks, React Icons and Emojis, reactstrap Navbar, etc. Resources used - API docs, Google, Stack Overflow, Asking for help from instructors and peers.

## Resolved Issues

- Submitting a form by pressing enter without a submit button - Found a [solution](https://stackoverflow.com/questions/477691/submitting-a-form-by-pressing-enter-without-a-submit-button) and will try out if the time permits. In current implementation, the search icon needs to be pressed after entering the search text (Title or Author) to fetch the results. - As on 10/7/2020. 2pm EST. - Fixed it with [Joe Keohan](https://www.linkedin.com/in/jkeohan/) on one of the project demonstrations.
- CI/CD Project deployment [netlify](https://www.netlify.com/) was failing as the project warnings were treated as errors. This was because CI=true by default for [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). The CI was set to blank value (does not consider false) for the build script in package.json for successful CI deployment in netlify.

## Unresolved Issues

- Was unable to save changes in VSCode while fetching details from api in useEffect, as ESLint was modifying the code. Disabled the ESLint on Joe's suggestion and tested the functionality. Functionality runs with compile time warnings, but was able to go ahead with coding the functionality. - As on 10/6/2020. 11:30pm EST.
- Emojis are used directly in this project, and give compile time warnings. We need to use [react-emoji - npm](https://www.npmjs.com/package/react-emoji) similar to successful use of [React Icons](https://www.npmjs.com/package/react-icons). Can also use tiny library of React Emojis - [react-emojione](https://reactjsexample.com/super-minimal-emoji-rendering-utility-for-react/) - As on 10/7/2020, 9PM EST

## Future Releases

- Thumbnail Image Carousel
- Pagination of Search Results
- Book rating can be displayed in star format using and existing Javascript / CSS snippet
- Support for ISBN search and ISBN check digit algorithm
- Removing of items from wishlist
- Integrating with Embedded Viewer API for free contents
- Search for free and paid items.
- Light and Dark Themes
