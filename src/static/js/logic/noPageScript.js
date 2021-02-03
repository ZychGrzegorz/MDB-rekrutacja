import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';
const noPageScript = () => {
  console.log('No page found. Error: 404');
  navigateTo('/nopagefound');
};

export { noPageScript };
