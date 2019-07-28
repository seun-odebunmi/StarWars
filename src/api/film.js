import { fetchService } from './index';
import * as url from '../constants';

export const getFilmsApi = () => fetchService.get(url.GET_FILMS);
export const getFilmCharsApi = url => fetchService.get(url);
