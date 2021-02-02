import { navigateTo } from '../index.js';
import { auth, db } from '../firebaseConfig.js';

const dashboardScript = () => {
  const select = document.querySelector('.selectCategory');
  const newCatBtn = document.querySelector('.btnAddCategory');
  const newCatInput = document.querySelector('.inputNewCat');

  auth.onAuthStateChanged((user) => {
    if (user) {
      let catData;
      const renderSelect = () => {
        db.collection('users')
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            catData = snapshot.data().BooksCategory;
            for (let key in catData) {
              const selectOption = document.createElement('option');
              selectOption.text = catData[key];
              selectOption.value = catData[key];
              select.appendChild(selectOption);
            }
          });
      };
      renderSelect();

      newCatBtn.addEventListener('click', async () => {
        if (newCatInput.value) {
          for (let key in catData) {
            if (catData[key] === newCatInput.value) {
              alert('Category exists');
              return;
            }
          }
          const newKey = Object.keys(catData).length;
          const newEl = { [newKey]: newCatInput.value };
          catData = { ...catData, ...newEl };
          await db.collection('users').doc(user.uid).update({
            BooksCategory: catData,
          });
          select.innerHTML = '';
          renderSelect();
        } else {
          alert('Add category input is empty');
        }
      });
    } else {
      console.log('user is not signed in');
      navigateTo('/signin');
    }
  });

  const collectionForm = document.querySelector('.collectionForm');
  if (collectionForm) {
    collectionForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
};

export { dashboardScript };
