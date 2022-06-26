const initialState = {
  allNews: [],
  createdNews: [],
  inProgressNew: {},
  specificNews: {}
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/all':
      return {
        ...state,
        allNews: action.payload
      }
    case 'news/byId':
      return {
        ...state,
        specificNews: action.payload
      }
    default:
      return state;
  }
}

export default newsReducer;
