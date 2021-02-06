var firebase = require('@firebase/app');
require('@firebase/auth');
require('@firebase/firestore');
var firebaseConfig = {
  apiKey: 'AIzaSyB7g6FJe6aYHunZ611HQfB6LN5RXtvOqHI',
  authDomain: 'spa-vanillajs.firebaseapp.com',
  projectId: 'spa-vanillajs',
  storageBucket: 'spa-vanillajs.appspot.com',
  messagingSenderId: '519797916153',
  appId: '1:519797916153:web:f7c102fa938b0d4ea73d28',
  measurementId: 'G-8MDJTPKE1L',
};
firebase.default.initializeApp(firebaseConfig);
const auth = firebase.default.auth();
const db = firebase.default.firestore();

export { auth, db };
