import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addSingleArticle'

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const actionAddArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      // todo: finish after confirming submit works
      console.log("in article reducer, action: ", action)
      state.entries.push(action.article)
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
