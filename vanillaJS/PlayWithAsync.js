// call backs old approach
const getUser = (cb) => {
  setTimeout(() => {
    cb({ name: 'Manuel Call Back' });
  }, 2000);
};
//const user = getUser(); // This doesn't actually fetch the user
//console.log(user.name); // This won't work the user.name is undefined
getUser((user) => {
  console.log(user.name); // Prints 'Max' after 2 seconds
});

// Promises
const getUserPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Manuel Promise' });
    }, 2000);
  });
};
getUserPromise()
  .then((user) => {
    console.log(user.name);
  })
  .catch((error) => {
    console.log(error);
  });

//Async await --> new feature added by ES8
const HTTPServices = require('./HTTPServices.js');
async function fetchData() {
  const isAuth = await HTTPServices.checkAuth();
  let user = null;
  if (isAuth) {
    user = await HTTPServices.fetchUser();
  }
  HTTPServices.setText(user.name);
}

fetchData();
