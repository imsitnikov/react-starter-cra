// place to define requests

// EXAMPLES !!!!
import { postRequest, putRequest, patchRequest, getRequest } from './rest';
import { getAuthEndpoint } from './endpoints';

// EXAMPLES !!!!
export const fetchLoginRequest = ({ username, password }) =>
  postRequest({
    endpoint: getAuthEndpoint(),
    data: { username, password },
  });

export const mockRequest = (values: {
  url: string;
  method: string;
  data: any;
}): Promise<any> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ error: 'test error' });
    }, 2000);
  });
