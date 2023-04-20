export const getUser = () => {
  const username = localStorage.getItem('username');
  if (username === null) return;
  return username;
};
