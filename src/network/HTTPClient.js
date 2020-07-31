import axios from 'axios';
import {ApiPaths} from './ApiConfig';

var instance = axios.create({
    baseURL: ApiPaths.BASE,
    headers: {
      'Content-Type': 'application/json',
    },
  });   

export const HttpClient = instance;