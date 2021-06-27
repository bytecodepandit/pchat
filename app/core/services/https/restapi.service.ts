import axios from 'axios';
import { APIDef, APIInput } from './ApiEndPoints';
import { httpErrorHandler } from '@app/core/utils';

export class RestApiService {
  public invoke<T>(
    def: APIDef,
    apiInput: APIInput = {},
    data?: T,
    queryMap?: any,
    additionalHeaders?: any,
    handleError?: boolean,
  ) {
    return this.invokeAPI(
      def.api(apiInput),
      def.method,
      data,
      queryMap,
      additionalHeaders,
      handleError,
    );
  }

  private invokeAPI<T>(
    api: string,
    method: string,
    body?: T,
    queryMap?: any,
    additionalHeaders = {},
    handleError = true,
  ) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...additionalHeaders,
    };

    const httpOptions = { headers: headers, params: queryMap, observe: 'body' };
    switch (method) {
      case 'POST':
        return this.post<T>(api, body, httpOptions, handleError);
      case 'GET':
        return this.get<T>(api, httpOptions, handleError);
      case 'PUT':
        return this.put<T>(api, body, httpOptions, handleError);
      case 'PATCH':
        return this.patch<T>(api, body, httpOptions, handleError);
      case 'DELETE':
        return this.delete<T>(api, body, httpOptions, handleError);
      default:
        break;
    }
  }

  private post<T>(
    apiUrl: any,
    body: any,
    httpOptions: any,
    handleError?: boolean,
  ) {
    return axios({
      method: 'post',
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err: any) => this.handleError<T>(err, handleError));
  }

  private get<T>(apiUrl: any, httpOptions: any, handleError?: boolean) {
    return axios({
      method: 'get',
      url: apiUrl,
      params: httpOptions.params,
      headers: httpOptions.headers,
    }).catch((err: any) => this.handleError<T>(err, handleError));
  }

  private put<T>(
    apiUrl: any,
    body: any,
    httpOptions: any,
    handleError?: boolean,
  ) {
    return axios({
      method: 'put',
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err: any) => this.handleError<T>(err, handleError));
  }

  private patch<T>(
    apiUrl: any,
    body: any,
    httpOptions: any,
    handleError?: boolean,
  ) {
    return axios({
      method: 'patch',
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err: any) => this.handleError<T>(err, handleError));
  }

  private delete<T>(
    apiUrl: any,
    body: any,
    httpOptions: any,
    handleError?: boolean,
  ) {
    return axios({
      method: 'delete',
      data: body,
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
    }).catch((err: any) => this.handleError<T>(err, handleError));
  }

  private handleError<T>(error: any, handleError?: boolean) {
    if (handleError === undefined || handleError == true) {
      httpErrorHandler(error);
    }

    return Promise.reject(error);
  }
}
