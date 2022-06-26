import { API_URL } from "../../api"


export const getAll = (payload) => {
  return {
    type: 'news/getAll',
    payload: payload
  }
}

export const getAllThunk = () => async dispatch => {
  const rawData = await fetch(API_URL, {
    method: 'GET',
  })

  const response = await rawData.json();

  dispatch(getAll(response))
};

