# Bibliophile Project Overview

## Project Links

- [Github repo link](https://github.com/sampreet-chawla/bibliophile)
- [add your deployment link]() - TBD

## Project Description

Bibliophile is an upcoming "Book/Magzine Browsing" project to help cuurent and emerging Book Lovers with the following -

- Search for the Books/Magzines for a search term(s) and/or search criteria.
- View the Book/ Magzine Information
- View the Book / Magzine Content (Embedded or External link)
- My Favorites - Track your interests (with Charts)
- Resources - with links to Good Reading Habits

## API

Here is a sample API from [Google Books API](https://developers.google.com/books) :

https://www.googleapis.com/books/v1/volumes?q=quilting - Performs a search for the term 'quilting'

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

## Wireframes

Wireframes are created using [MockFlow](https://mockflow.com/) and Architecture Diagram using [Google Drawings](https://chrome.google.com/webstore/detail/google-drawings/mkaakpdehdafacodkgkpghoibnmamcme?hl=en-US)

- [Mobile View](https://res.cloudinary.com/dreamer123/image/upload/v1601660352/Sampreet-SEIR-831-unit2/Bibliophile_-_Mobile_View_txtmeb.png)
- [Tablet View](https://res.cloudinary.com/dreamer123/image/upload/v1601660352/Sampreet-SEIR-831-unit2/Bibliophile_-_Tablet_View_irjoy7.png)
- [Laptop View](https://res.cloudinary.com/dreamer123/image/upload/v1601660352/Sampreet-SEIR-831-unit2/Bibliophile_-_Laptop_view_ebyj9w.png)
- [React Architecture Diagram](https://res.cloudinary.com/dreamer123/image/upload/v1601662632/Sampreet-SEIR-831-unit2/Bibiophile_React_Architecture_Diagram_oqoofe.png)

### MVP/PostMVP - 5min - TBD

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Allow user to interact with the page

#### PostMVP EXAMPLE - TBD

- Add localStorage or firebase for storage
- View the Book Content (Embedded or External link)

## Components - TBD

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |     3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |     2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |      5hrs      |    5hrs     |

## Additional Libraries - TBD

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
