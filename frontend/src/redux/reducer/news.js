const initialState = {
  allNews: [],
  createdNews: [],
  inProgressNew: {}
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/getAll':
      return {
        ...state,
        allNews: action.payload
      }
    default:
      return state;
  }
}

export default newsReducer;
