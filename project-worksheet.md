# Bibliophile Project Overview

## Project Links

- [Github repo link](https://github.com/sampreet-chawla/bibliophile)
- [bibliophile](https://bibliophile.netlify.app/) deployed using [![Netlify Status](https://api.netlify.com/api/v1/badges/966fc1fe-9b8d-4e02-a213-e53f3902fe90/deploy-status)](https://app.netlify.com/sites/bibliophile/deploys)

## Project Description

Bibliophile is an upcoming "Book Browsing" project to help current and emerging Book Lovers with the following -

- Best Seller List
- Search for the Books by Title / Author / Genre.
- View the Book Information with details like Title, Author, Rating, etc.
- View the Book Preview for paid books, and Content for free books (an external link)
- My Wishlist - Track user book interests
- Resources - with links to Good Reading Habits

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

- [Mobile View](https://res.cloudinary.com/dreamer123/image/upload/v1601843339/Sampreet-SEIR-831-unit2/Bibliophile_-_Mobile_View_pzjidc.png)
- [Tablet View](https://res.cloudinary.com/dreamer123/image/upload/v1601843339/Sampreet-SEIR-831-unit2/Bibliophile_-_Tablet_View_kyi1gb.png)
- [Laptop View](https://res.cloudinary.com/dreamer123/image/upload/v1601843339/Sampreet-SEIR-831-unit2/Bibliophile_-_Laptop_view_e16xo8.png)

## React Architecture Diagram

The project will be built on React Components and will make use of Props, and React hooks like useState, useEffect, useContext, for state management. There would be lifting of state while handling search criteria and selecting items.

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
- Make own Logo, Icons and Mock Image
- Basic Nav Nar Functionality
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
| Nav          |                    Render the logo and the navigation bar                    |
| ShowCriteria |     Take inputs on search criteria and show the current search criteria      |
| Sidebar      | List the search options and list of genure to filter current search criteria |
| ShowItems    |              Display books matching the current search criteria              |
| ShowItem     |                  Display an individual book in card format                   |
| MyWishlist   |                        Display books in the wish-list                        |
| Resources    |            Display resources and extra information about the site            |

## Timeline

- [Timeline](https://res.cloudinary.com/dreamer123/image/upload/v1601904065/Sampreet-SEIR-831-unit2/Bibiophile_Timeline_asqp4w.png)

### MVP

| Label | Activity                                        | Priority | Estimated Time | Time Invested | Actual Time |
| ----- | ----------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| A     | Find API urls for project                       |    H     |      2hrs      |      hrs      |     hrs     |
| B     | Create Stateless Components with Router         |    H     |      3hrs      |      hrs      |     hrs     |
| C     | Create Stateful Components - (Browse)           |    H     |      4hrs      |      hrs      |     hrs     |
| D     | Create Stateful Components - Show Item, Sidebar |    H     |      3hrs      |      hrs      |     hrs     |
| E     | Create Stateful Components - My Wishlist        |    H     |      3hrs      |      hrs      |     hrs     |
| F     | Integrate with GB-API (fetch and show items)    |    H     |      2hrs      |      hrs      |     hrs     |
| G     | Integrate with NYT Books API - Best Selling     |    H     |      2hrs      |      hrs      |     hrs     |
| H     | Create Resource Component                       |    H     |      2hrs      |      hrs      |     hrs     |
| I     | Make own Logo, Icons and Mock Image             |    M     |     1.5hrs     |      hrs      |     hrs     |
| J     | Create Resource Component                       |    H     |      2hrs      |      hrs      |     hrs     |
| K     | Basic Nav Nar Functionality                     |    H     |      2hrs      |      hrs      |     hrs     |
| L     | Mobile First layout using CSS Grid/ Flex / SCSS |    H     |      3hrs      |      hrs      |     hrs     |
| M     | responsive Design                               |    H     |      4hrs      |      hrs      |     hrs     |
|       | **Total**                                       |          |  **32.5hrs**   |      hrs      |     hrs     |

### PostMVP

| Label | Activity                                       | Priority | Estimated Time | Time Invested | Actual Time |
| ----- | ---------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| A     | Include Blog of Project Journey                |    H     |      3hrs      |      hrs      |     hrs     |
| B     | Show items from same author                    |    M     |      3hrs      |      hrs      |     hrs     |
| C     | Sass Integration                               |    H     |      4hrs      |      hrs      |     hrs     |
| D     | Dark Theme and Light Theme                     |    H     |      3hrs      |      hrs      |     hrs     |
| E     | Remove from Wishlist                           |    M     |      2hrs      |      hrs      |     hrs     |
| F     | Code Cleanup and conformance to best practices |    H     |      3hrs      |      hrs      |     hrs     |
|       | **Total**                                      |          |   **18hrs**    |      hrs      |     hrs     |

## Additional Libraries - TBD

Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.

- [react-icons](https://www.npmjs.com/package/react-icons) for [Font Awesome Icons](https://fontawesome.com/)

## References

- [Liyas Thomas's Book Website](https://liyasthomas.github.io/books/#search) developed in HTML, CSS and JavaScript. Referred the website for its look and feel. Also talked to Liyas Thomas for his choice of Google Books API, limitations and challenges for the project.
- Article [Build a Best Sellers List with New York Times and Google Books API](https://www.freecodecamp.org/news/build-a-best-sellers-list-with-new-york-times-google-books-api-46201c30aec7/)

## Challenges

- [Importing functions from helpers] - Referred the [Stackflow link](https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native)
- [A Simple JavaScript Technique for Filling Star Ratings] (https://webdesign.tutsplus.com/tutorials/a-simple-javascript-technique-for-filling-star-ratings--cms-29450)

## Code Snippet - TBD

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Limitations

- Current search implementation would be for books
- Best Selling list would be supported for hard-cover fiction books.
- Search results maybe restricted to 10-40 pages at a time.
- New Releases would refer to mock images as there is API supported for it.

## Future Releases

- Refactor in Gatsby
- Include search for magazines
