import { API } from '../utils';

export const searchUsers = (searchText) => {
    return customFetch(API.searchUsers(searchText), {
      method: 'GET',
      
    });
  };