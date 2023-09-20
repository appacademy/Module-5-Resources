# Normalizing Your State

So far in your article reducer you have used an `entries` array to store the
data. _Normalizing the data_ in your reducer can lead to better optimization.

In this practice, you will normalize the data in your `articleReducer` and make
the corresponding adjustments to your components. This will allow your
`SingleArticle` component to search for data in 0(1) time.

## Setup

Clone the starter repo accessible from the `Download Project` button at the
bottom of this page.

1. Install dependencies with `npm install`
2. Copy the **.env.example** file to a new file in the same location called
   **.env**
   * The server should be listening for requests on port `5000`
   * The SQLite3 database file should be **db/dev.db**
3. Run
   * `npm run db:setup` - create the database and tables and insert seed data
   * `npm start` - start the backend server

In a different terminal, `cd` into the __frontend__ directory of the starter.

1. Run `npm install` in the __frontend__ directory.
2. Run `npm start` in the __frontend__ directory to start the server.
   * Note that the __package.json__ now defines a proxy of
     `http://localhost:5000`. This will effectively forward any unrecognized
     requests to the port (`5000`) on which your backend is listening.
3. Open `http://localhost:3000` to see the frontend

## Normalize LOAD_ARTICLES case

In your __src/store/articleReducer.js__ file, locate your `initialState`
variable. Change your `entries` key from an empty array to an empty object.

Based on what you have learned, adjust the `LOAD_ARTICLES` case in your
`articleReducer` function. Your `entries` object should store each article with
a key of the article `id` and a value of the article itself. (Make sure you
don't mutate nested objects!)

## Adjust the ArticleList Component

The data type for the `entries` in your `articleReducer` has changed from an
array to an object. As a result, in your `ArticleList` component `return`, you
can no longer simply `.map` over the `articles` returned by the `useSelector`.
Adjust your JSX to make the articles display properly.

## Normalize ADD_ARTICLE case

Go back to your __src/store/articleReducer.js__ file. In the `articleReducer`
function, adjust the code so that you store the new article in the `entries`
array with a key of the article `id` and value of the article. Again, be careful
not to mutate nested objects.

## SingleArticle O(1)

In the `SingleArticle` component, you are now able to find your article without
using the `.find` function. Change the `singleArticle` variable so that you
directly reference the article you want to use.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Normalize data in your reducer for more optimal performance.
2. Choose data using O(1) time complexity.
