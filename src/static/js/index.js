import DashboardView from './views/DashboardView.js';
import Books from './views/Books.js';
import BookView from './views/BookView.js';
import LoginView from './views/LoginView.js';
import RegisterView from './views/RegisterView.js'

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');
const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(
    keys.map((key, i) => {
      // console.log(key, i);
      return [key, values[i]];
    })
  );
};
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    {
      path: '/',
      view: DashboardView,
    },

    {
      path: '/books',
      view: Books,
    },
    {
      path: '/books/:id',
      view: BookView,
    },
    {
      path: '/login',
      view: LoginView,
    },
    {
      path: '/register',
      view: RegisterView,
    },
  ];
  //test each route for potetntial match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }
  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.getHtml();
  // console.log(match.route.view());
};
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

let indexConst = ['lalala'];

const addToIndex = (el) => {
  indexConst.push(el);
  console.log(indexConst);
};
// addToIndex(13);
console.log(indexConst);
export { addToIndex };
