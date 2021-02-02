// Couldn't import it in this way
// import * as firebase from '@firebase/app';
// import '@firebase/auth';
// import '@firebase/database';
// firebase is taken from window

var firebaseConfig = {
  apiKey: 'AIzaSyB7g6FJe6aYHunZ611HQfB6LN5RXtvOqHI',
  authDomain: 'spa-vanillajs.firebaseapp.com',
  projectId: 'spa-vanillajs',
  storageBucket: 'spa-vanillajs.appspot.com',
  messagingSenderId: '519797916153',
  appId: '1:519797916153:web:f7c102fa938b0d4ea73d28',
  measurementId: 'G-8MDJTPKE1L',
};

const firebase = window.firebase;
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
