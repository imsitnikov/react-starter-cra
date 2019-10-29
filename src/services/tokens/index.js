export const saveTokens = ({
  accessToken,
  // refreshToken
}) => {
  localStorage.setItem('access_token', accessToken);
  //   localStorage.setItem('refresh_token', refreshToken);
};

export const removeTokens = () => {
  localStorage.removeItem('access_token');
  //   localStorage.removeItem('refresh_token');
};
