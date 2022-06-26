import { API_URL } from "../../api"


export const all = (payload) => {
  return {
    type: 'news/all',
    payload: payload
  }
}

export const byId = (payload) => {
  return {
    type: 'news/byId',
    payload: payload
  }
}

export const allThunk = () => async dispatch => {
  const rawData = await fetch(API_URL, {
    method: 'GET',
  })

  const response = await rawData.json();

  dispatch(all(response))
};

export const byIdThunk = (id) => async dispatch => {
  const rawData = await fetch(`${API_URL}${id}`, {
    method: 'GET',
  })

  const response = await rawData.json();

  dispatch(byId(response))
};
