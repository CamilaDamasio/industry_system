import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_BACK_INDUSTRYSYSTEM_URL || process.env.REACT_APP_INDUSTRYSYSTEM_URL,
});
