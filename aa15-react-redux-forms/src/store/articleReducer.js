import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const WRITE_ARTICLE = 'article/writeArticle';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const actionCreateArticle = (article) => {
  return {
    type: WRITE_ARTICLE,
    article
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case WRITE_ARTICLE:
      return { ...state, entries: [action.article, ...state.entries] };
    default:
      return state;
  }
};

export default articleReducer;
