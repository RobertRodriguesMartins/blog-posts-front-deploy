const initialState = {
  Allnews: [],
  createdNews: [],
  inProgressNew: {}
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/getAll':
      return {
        ...state,
        Allnews: action.payload
      }
    default:
      return state;
  }
}

export default newsReducer;
