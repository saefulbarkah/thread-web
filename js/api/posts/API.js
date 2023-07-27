import { get, post } from '../utils.js';
import { BASE_URL } from '../config.js';

export const getPosts = async () => {
  try {
    const data = await get(BASE_URL + '/posts');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (data) => {
  try {
    const results = await post(BASE_URL + '/posts', data);
    return results;
  } catch (error) {
    console.log(error);
  }
};
