import { API_URL } from '../../api';
import generateJsonFormData from '../utils/convertFormToJson';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpYXQiOjE2NTgzMjg2NTJ9.no20f_C6IA3S8TLM12Wnn-8IbWBJUZsNGDRJSgHpMbw'

export const all = (payload) => {
  return {
    type: 'news/all',
    payload: payload,
  };
};

export const byId = (payload) => {
  return {
    type: 'news/byId',
    payload: payload,
  };
};

export const create = (payload) => {
  return {
    type: 'news/create',
    payload: payload,
  };
};

export const maxOffset = (offset) => {
  return {
    type: 'offset/max',
    payload: offset,
  };
};

export const reset = () => {
  return {
    type: 'reset',
  };
};

export const setLastPostsNumber = (payload) => {
  return {
    type: 'set/totalPosts',
    payload: payload,
  };
};

export const setOffset = (offset) => {
  return {
    type: 'offset/add',
    payload: offset,
  };
};

export const setForm = (payload) => {
  return {
    type: 'set/form',
    payload: payload,
  };
};

export const maxOffsetThunk = () => async (dispatch) => {
  try {
    const rawData = await fetch(API_URL + 'post/offset', {
      method: 'GET',
    });

    const response = await rawData.json();

    dispatch(maxOffset(response));
  } catch (e) {
    dispatch(maxOffset(0));
  }
};

export const someThunk = (offset) => async (dispatch) => {
  try {
    const rawData = await fetch(API_URL + `post/some?q=${offset}`, {
      method: 'GET',
    });

    const response = await rawData.json();

    dispatch(all(response));
  } catch (e) {
    dispatch(all([0]));
  }
};

export const byIdThunk = (id) => async (dispatch) => {
  try {
    const rawData = await fetch(`${API_URL}${id}`, {
      method: 'GET',
    });

    const response = await rawData.json();

    dispatch(byId(response));
  } catch (e) {
    console.log(e);
  }
};

export const createThunk = (myForm) => async (dispatch) => {
  try {
    const form = new FormData(myForm);

    const requestBody = generateJsonFormData(form, [
      'content',
      'categories',
      'title',
    ]);
    const headers = new Headers();
    headers.set(
      'authorization', token);
    headers.set('Content-type', 'application/json');
    await fetch(API_URL + 'post/', {
      method: 'post',
      body: requestBody,
      headers,
      mode: 'cors',
    });
    dispatch(create());
  } catch (e) {
    console.log(e);
    dispatch(create(e));
  }
};
