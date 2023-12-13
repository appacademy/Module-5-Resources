# Practice: Using Forms With React-Redux

In this short practice, you will create an article using the steps you've
learned from previous short practices.

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

## Article reducer steps

In the __src/store/articleReducer.js__ file:

- Create a constant called `ADD_ARTICLE` with a string value of
  `'article/addArticle'`.
- Use this constant in an action creator called `addArticle` that takes a
  parameter of `article`--i.e., the article to be added--and returns an object
  with a `type` of the constant and a payload of `article`.
- Add an `ADD_ARTICLE` case to the reducer.
- Update the state by adding the `article` payload to the `entries` array.
  Remember not to mutate state! Instead, update state by creating a new
  reference in memory for all objects, including nested objects.

## `ArticleInput` component steps

Note that `App` now displays a new component: `ArticleInput`. Once completed,
this component will allow users to create new articles.

Use what you have learned in previous short practices to complete the
`ArticleInput` component. You will need to add the following functionality:

- Create the new article from submitted input to pass to the store.
- Dispatch that object using the action creator you created above.

> Note: Use `nanoid()` to create an `id` for the article. It has already been
> imported for you.

## What you have learned

**Congratulations!** In this practice you have applied your previous knowledge
to

1. Create a full Redux flow
