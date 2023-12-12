// types - EVERY VAR MUST BE UNIQUE
const READ_LANGUAGE = "language/readLanguage";
const CREATE_LANGUAGE = "language/createCreate";
const UPDATE_LANGUAGE = "language/update";
const DELETE_LANGUAGE = "language/deleteLanguage";

// action creators
const actionReadLanguage = () => {
  return {
    type: READ_LANGUAGE,
    payload: { spanish: true },
  };
};

// thunks

// reducer

const initialState = {
  languages: { english: true, spanish: false },
  isLoaded: false,
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case READ_LANGUAGE: {
      // update logic is done here
      // 1. copy of state
      // 2. mutate the copy
      // 3. return the copy

      const newState = { ...state, 
                          languages: { 
                            ...state.languages 
                          } };
      // { languages: { // oldstuff }, isLoaded, languages: { english: true, spanish: false } }
      newState.languages.spanish = action.payload.spanish;

      newState.articles = [ action.payload, ...state.articles ]

      return newState;
    }
    default:
      return state;
  }
}