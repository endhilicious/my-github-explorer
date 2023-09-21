import axios from 'axios';
import { API_BASE_URL } from './constants';

export const searchUsers = async (query: string, page?: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/users?q=${query}&per_page=${page || 5}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export const getUserRepositories = async (username: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}/repos`);
    console.log('response', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetail = async (username: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRepositories = async (url: string) => {
  console.log('url',url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
