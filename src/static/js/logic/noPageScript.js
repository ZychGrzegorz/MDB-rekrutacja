import { navigateTo } from '../index.js';

const noPageScript = () => {
  console.log('No page found. Error: 404');
  navigateTo('/nopagefound');
};

export { noPageScript };
