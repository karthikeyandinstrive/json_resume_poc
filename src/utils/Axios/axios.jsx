import axios from 'axios';
import jwt_decode from 'jwt-decode';

const refreshToken = async () => {
  const params = {
    grant_type: 'refresh_token',
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: window.location.origin,
    refresh_token: localStorage.getItem('refresh_token'),
  };

  const data = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${process.env.REACT_APP_AUTH_TOKEN}`,
    },
    data,
    url: process.env.REACT_APP_AUTH_GET_TOKEN_URL,
  };
  await axios(options).then(
    (res) => {
      localStorage.setItem('access_token', res?.data?.access_token);
      localStorage.setItem('idToken', res?.data?.id_token);
    },
    (err) => {
      console.log('error=======>', err);
    }
  );
};

const getToken = async () => {
  // TODO to add refresh token logout flow
  let token = localStorage.getItem('idToken');
  if (token) {
    let decoded = jwt_decode(token);
    let expiryTime = new Date(decoded.exp * 1000);
    let currentTime = new Date();
    let MS_PER_MINUTE = 60000;
    const expiryEpochMinus = expiryTime.getTime() - 5 * MS_PER_MINUTE;
    if (expiryEpochMinus <= currentTime.getTime()) {
      await refreshToken();
      return localStorage.getItem('idToken');
    } else {
      return token;
    }
  } else {
    return null;
  }
};

axios.interceptors.response.use(null, (error) => {
  if (!error.response.config.isNormal) {
    if (error && error.response) {
      if (error.response.status === 401) {
        // initial call to whoami will get intercepted here and redirect, need to throw log event
        // TODO: Do something
      }
      const { data } = error.response;
      const errorPayload =
        data.error ||
        data.errors ||
        data.error_message ||
        data.error_type ||
        data.message;

      return Promise.reject(errorPayload);
    }

    return Promise.reject(error);
  } else {
    return Promise.reject(error.response.data);
  }
});
/**
 *
 * @param {*} path  endpoint
 * @returns data from api
 */
export async function apiGet(path) {
  const authToken = await getToken();
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
    },
  };

  return axios.get(path, config);
}

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export async function apiPost(path, data, isNormal = false) {
  const authToken = await getToken();
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
      'Content-Type': 'application/json',
    },
    isNormal: isNormal,
  };

  return axios.post(path, data, config);
}
/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export async function apiPatch(path, data, headers = {}) {
  const authToken = await getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ...headers,
    },
  };

  return axios.patch(path, data, config);
}
/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export async function apiPut(path, data, isNormal = false) {
  const authToken = await getToken();
  const config = {
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
      'Content-Type': 'application/json',
    },
    isNormal: isNormal,
  };

  return axios.put(path, data, config);
}
/**
 *
 * @param {*} path   endpoint
 * @param {*} data params
 * @returns   data from api
 */
export async function apiDelete(path, data) {
  const authToken = await getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return axios.delete(path, { ...config, ...data });
}

/**
 *
 * @param {*} path   endpoint
 * @param {*} data object of data
 * @returns   data from api
 */
export function apiPostWithCustomToken(path, data, token) {
  const config = {
    headers: {
      Authorization: token ? `Basic ${token}` : null,
      'Content-Type': 'application/json',
    },
  };

  return axios.post(path, data, config);
}

const instance = axios.create();

export default instance;
