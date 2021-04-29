const setText = (text) => {
  console.log(text);
};
const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...');
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...');
    setTimeout(() => {
      resolve({ name: 'Manuel' });
    }, 2000);
  });
};

module.exports = {
    setText,
    checkAuth,
  fetchUser,
};