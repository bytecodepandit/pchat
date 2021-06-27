import Toast from '../helpers/Toast';

export const httpErrorHandler = (error: any) => {
  let errorMessage: string | [] = '';
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    errorMessage = error.response.data.message;
  }
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errors
  ) {
    errorMessage = error.response.data.errors;
  }
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errorMessages
  ) {
    errorMessage = error.response.data.errorMessages;
  }
  if (errorMessage) {
    if (errorMessage instanceof Array) {
      errorMessage.forEach((element: any) => {
        if (element.message) {
          Toast(`${element.message}`);
        } else {
          Toast(`${element}`);
        }
      });
    } else if (errorMessage) {
      Toast(errorMessage);
    } else {
      Toast(errorMessage);
    }
  }
};
