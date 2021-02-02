import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';

const logoutScript = () => {
  auth.signOut().then(() => {
    console.log('user signedOut');
  });
  navigateTo('/signin');
  const userNameSpan = document.querySelector('.userNameSpan');
  const nonAuthNav = document.querySelectorAll('.nonAuthNav');
  const authNav = document.querySelectorAll('.authNav');
  userNameSpan.innerText = '';
  authNav.forEach((el) => {
    el.style.display = 'none';
  });
  nonAuthNav.forEach((el) => {
    el.style.display = 'block';
  });

  console.log('user is not signed in');
};

export { logoutScript };
