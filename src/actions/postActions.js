import axios from 'axios';
import * as TYPES from './types';

export const getPosts = () => async dispatch => {
  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((posts) => {
      dispatch({
        type: TYPES.GET_POSTS,
        payload: posts.data
      })
    })
    .catch((error) => {
      console.error("error", error)
    });
} 