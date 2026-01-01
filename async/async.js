
async function getUsers() {
  try {
    await new Promise(r => setTimeout(r, 3000));
    const response = await fetch('./users.json');
    if (!response.ok) {
      throw new Error(`Данные не загрузились. Код ошибки: ${response.status} ${response.statusText}`);
    }
    const users = await response.json();
    return users;
  }
  catch (error) {
    alert('Данные не загрузились!!!');
    console.error(error.message);
  }
}

const load = document.querySelector('#load');
const userCardList = document.querySelector('.user-card-list');
const userCardTemplate = document.querySelector('#user-card-template');
let usersLocalStorage;
let usersFetch;

function fillOutCards(user) {
  const userCardClone = userCardTemplate.content.cloneNode(true);
  userCardClone.querySelector('.id').textContent = user.id;
  userCardClone.querySelector('.name').textContent = user.name;
  userCardClone.querySelector('.surname').textContent = user.surname;
  userCardClone.querySelector('.email').textContent = user.email;
  userCardClone.querySelector('.age').textContent = user.age;
  userCardList.appendChild(userCardClone);
}

async function synhronizedLocaStorage() {
  if (!localStorage.getItem('users')) {
    usersFetch = await getUsers();
    localStorage.setItem(`users`, JSON.stringify(usersFetch));
  }
  usersLocalStorage = JSON.parse(localStorage.getItem('users'));
  usersLocalStorage.forEach(user => fillOutCards(user));
  load.style.display = 'none';
}

const getUsersButton = document.querySelector('#get-users');
getUsersButton.addEventListener('click', async () => {
  try {
    if (!localStorage.getItem('users')) {
      alert('Данные не загрузились в Local storage');
      throw new Error('Данные не загрузились в Local storage');
    }
    if (usersFetch.length === usersLocalStorage.length) {
      alert('Пользователи уже загружены');
      return;
    }
    localStorage.setItem(`users`, JSON.stringify(usersFetch));
    usersLocalStorage = JSON.parse(localStorage.getItem('users'));
    const userCards = Array.from(document.querySelectorAll('.user-card'));
    usersLocalStorage.forEach(user => {
      if (userCards.filter(userCard => userCard.querySelector('.name').textContent === user.name).length > 0) {
        return;
      }
      fillOutCards(user);
    })
  } catch (error) {
    console.error(error.message);
  }
})

userCardList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-user')) {
    const userCard = event.target.closest('.user-card');
    const name = userCard.querySelector('.name').textContent;
    usersLocalStorage = usersLocalStorage.filter(user => user.name !== name);
    localStorage.setItem('users', JSON.stringify(usersLocalStorage));
    userCard.remove();
    if (localStorage.getItem('users') === '[]') {
      localStorage.clear();
    }
  }
})

const deleteUsersButton = document.querySelector('#delete-all-users');
deleteUsersButton.addEventListener('click', () => {
  const userCards = document.querySelectorAll('.user-card');
  userCards.forEach(userCard => userCard.remove());
  localStorage.clear();
})

synhronizedLocaStorage();
