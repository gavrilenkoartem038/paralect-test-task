export const isExpired = (exp: string) => {
  if (!exp || exp === 'null' || exp === 'undefined') {
    return false;
  }
  return Date.now() > Number(exp) * 1000;
};

export const getToken = () => {
  if (!localStorage.getItem('app_access_token') || isExpired(localStorage.getItem('exp') || '')) {
    return null;
  }
  return localStorage.getItem('app_access_token');
};

const getHeaders = (headers: Headers, endpoint: string) => {
  const token = getToken() || '';
  headers.set('x-secret-key', 'GEU4nvd3rej*jeh.eqp');
  headers.set(
    'X-Api-App-Id',
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
  );
  if (token && endpoint != 'login') headers.set('Authorization', `Bearer ${token}`);
  return headers;
};

export default getHeaders;
