const LOAD_ARTICLES = "articles/loadArticles";
const ADD_ARTICLE = "articles/addArticle";

export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article,
  };
};

export const fetchArticles = () => async (dispatch) => {
  const response = await fetch("/api/articles");
  const articles = await response.json();
  dispatch(loadArticles(articles));
};

export const fetchSingleArticle = (id) => async (dispatch) => {
  const response = await fetch(`/api/articles/${id}`);
  const article = await response.json();
  dispatch(addArticle(article));
};

export const writeArticle = (payload) => async (dispatch) => {
  const response = await fetch("/api/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const article = await response.json();
    dispatch(addArticle(article));
    return article;
  } else {
    const error = await response.json();
    return error;
  }
};

const initialState = {};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      const newState = { ...state };
      action.articles.forEach(
        (article) => (newState[article.id] = article)
      );
      return newState;

    case ADD_ARTICLE:
      return {
        ...state,
        [action.article.id]: action.article
      };

    default:
      return state;
  }
};

export default articleReducer;
