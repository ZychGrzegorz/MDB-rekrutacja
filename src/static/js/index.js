import DashboardView from './views/DashboardView.js';
import SearchView from './views/SearchView.js';
import BookView from './views/BookView.js';
import LoginView from './views/LoginView.js';
import RegisterView from './views/RegisterView.js';
import NoPageView from './views/NoPageView.js';
import { auth, db } from './firebaseConfig.js';
import { registerScript } from './logic/registerScript.js';
import { loginScript } from './logic/loginScript.js';
import { logoutScript } from './logic/logoutScript.js';
import { dashboardScript } from './logic/dashboardScript.js';
import LogoutView from './views/LogoutView.js';
import { noPageScript } from './logic/noPageScript.js';
import { bookScript } from './logic/bookScript.js';
import { searchScript } from './logic/searchScript.js';

const authNav = document.querySelectorAll('.authNav');
const nonAuthNav = document.querySelectorAll('.nonAuthNav');
const userNameSpan = document.querySelector('.userNameSpan');

auth.onAuthStateChanged((user) => {
  if (user) {
    nonAuthNav.forEach((el) => {
      el.style.display = 'none';
    });
    authNav.forEach((el) => {
      el.style.display = 'block';
    });
    console.log('user logged in');
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((snapshot) => {
        userNameSpan.innerText = snapshot.data().Name;
      });
  } else {
    authNav.forEach((el) => {
      el.style.display = 'none';
    });
    nonAuthNav.forEach((el) => {
      el.style.display = 'block';
    });
    console.log('user is not logged in');
  }
});

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(
    keys.map((key, i) => {
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
      path: '/search',
      view: SearchView,
    },
    {
      path: '/book/:id',
      view: BookView,
    },
    {
      path: '/signin',
      view: LoginView,
    },
    {
      path: '/signup',
      view: RegisterView,
    },
    {
      path: '/signout',
      view: LogoutView,
    },
    {
      path: '/nopagefound',
      view: NoPageView,
    },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  if (!match) {
    console.log(match);
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.getHtml();
  if (location.pathname.match('/book/(.+)')) {
    bookScript();
  } else {
    switch (location.pathname) {
      case '/signup': {
        registerScript();
        break;
      }
      case '/signin': {
        loginScript();
        break;
      }
      case '/signout': {
        logoutScript();
        break;
      }
      case '/search': {
        searchScript();
        break;
      }
      case '/': {
        dashboardScript();
        break;
      }
      case '/nopagefound': {
        setTimeout(() => {
          navigateTo('/');
        }, 2000);
        break;
      }

      default: {
        noPageScript();

        break;
      }
    }
  }
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

export { navigateTo };
