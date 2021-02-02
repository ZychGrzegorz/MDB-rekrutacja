import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';
const registerScript = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      navigateTo('/');
      console.log('user is logged in');
    }
  });

  const signUpForm = document.querySelector('.register-form');
  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = signUpForm['name'].value;
      const email = signUpForm['email'].value;
      const password = signUpForm['password'].value;
      const user = { name, email, password };
      console.log(user);

      signUpForm.reset();
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          return db
            .collection('users')
            .doc(cred.user.uid)
            .set({
              Name: name,
              Email: email,
              Password: password,
              BooksCategory: ['crime story', 'sci fi', 'fantasy', 'poetry', 'drama', 'science'],
              BooksCollection: [],
            })
            .then(() => {
              console.log('succes');
              navigateTo('/signin');
            })
            .catch((err) => {
              console.log(err.message);
              const signupError = document.querySelector('.signup-error');
              signupError.innerText = err.message;
            });
        })
        .catch((err) => {
          console.log(err.message);
          const signupError2 = document.querySelector('.signup-error2');
          signupError2.innerText = err.message;
        });
    });
  }
};

export { registerScript };
