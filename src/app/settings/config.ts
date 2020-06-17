import { getUsers } from './utils';
import { HttpHeaders, HttpParams } from '@angular/common/http';

export const UrlAPI = 'https://hub.2vn.vn/';
export const UrlAuthAPI = 'https://hub.2vn.vn/';
export const UrlImage = 'https://hub.2vn.vn';

//export const UrlAPI = 'http://127.0.0.1:8000/';
//export const UrlAuthAPI = 'http://127.0.0.1:8000/';
//export const UrlImage = 'http://127.0.0.1:8000';

export class Constants {
  static readonly DATE_FMT = 'dd/MM/yyyy';
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
}

export function httpOption() {
  const user = getUsers();

  return {
    headers: new HttpHeaders({
      'x-client-language': '1',
      'x-access-type': '1',
      'x-access-token': user ? user.access_token : '',
      'x-client-random-key': '',
      'x-client-uid': ''
    })
  };
}

export function httpOptionFormData() {

  const user = getUsers();

  return {
    headers: new HttpHeaders({
      'x-client-language': '1',
      'x-access-type': '1',
      'x-access-token': user ? user.access_token : '',
      'x-client-random-key': '',
      'x-client-uid': ''
    })
  };
}

export function httpOptionParames(p) {
  const user = getUsers();
  return {
    headers: new HttpHeaders({
      'x-client-language': '1',
      'x-access-type': '1',
      'x-access-token': user ? user.access_token : '',
      'x-client-random-key': '',
      'x-client-uid': ''
    }),
    params: p
  };
}

export function httpOptionFileDownloadParames(p) {
  const user = getUsers();
  return {
    responseType: 'arraybuffer' as 'arraybuffer',
    headers: new HttpHeaders({
      'x-client-language': '1',
      'x-access-type': '1',
      'x-access-token': user ? user.access_token : '',
      'x-client-random-key': '',
      'x-client-uid': ''
    }),
    params: p
  };
}
