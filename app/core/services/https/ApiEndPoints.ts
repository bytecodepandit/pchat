import {AUTH_BASE_URL, BASE_URL} from '@app/app.config';

const ApiEndPoints = {
  signIn: {
    method: 'POST',
    api: () => `${AUTH_BASE_URL}/api/auth/oauth/token`,
  },
  getChatsByUserId: {
    method: 'GET',
    api: (input: APIInput) => `${BASE_URL}/chats/${input.userId}/chats.json`,
  },
  getUserWithSectionByUserId: {
    method: 'GET',
    api: (input: APIInput) =>
      `${BASE_URL}/chats/${input.userId}/user-with-section.json`,
  },
  getUsersCallHistoryByUserId: {
    method: 'GET',
    api: (input: APIInput) =>
      `${BASE_URL}/calls/${input.userId}/call-history.json`,
  },
  getUsersStatusByUserId: {
    method: 'GET',
    api: (input: APIInput) => `${BASE_URL}/status/${input.userId}/status.json`,
  },
};

export interface APIDef {
  method: string;
  api: any;
}

export interface APIInput {
  email?: string;
  userId?: string;
}

export default ApiEndPoints;
