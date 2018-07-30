const initialState = {
	listOpen: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLELIST":
      //return { ...state, articles: [...state.articles, action.payload] };
      return {...state, listOpen: action.payload}
    default:
      return state;
  }
};

export default rootReducer;