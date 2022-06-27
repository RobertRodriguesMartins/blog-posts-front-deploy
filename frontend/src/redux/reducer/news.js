const initialState = {
  allNews: [],
  createdNews: [],
  inProgressNew: {},
  specificNews: {},
  form: ''
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
    case 'news/create':
      return {
        ...state,
        form: action.payload ? 'error' : 'submitted'
      }
    default:
      return state;
  }
}

export default newsReducer;
