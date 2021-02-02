import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';
const loginScript = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      navigateTo('/');
    } else {
    }
  });

  const loginForm = document.querySelector('.login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const loginEmail = loginForm['login-email'].value;
      const loginPassword = loginForm['login-password'].value;

      auth
        .signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(() => {
          console.log('login invoked');
          navigateTo('/');
        })
        .catch((err) => {
          console.log(err.message);
          const loginError = document.querySelector('.login-error');
          loginError.innerText = err.message;
        });
    });
  }
};

export { loginScript };
