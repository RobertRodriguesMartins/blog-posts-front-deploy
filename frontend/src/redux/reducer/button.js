const initialState = {
  button: 0
}

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'button/increment':
      return {
        ...state,
        button: state.button + 1
      }
    default:
      return state;
  }
}

export default buttonReducer;
