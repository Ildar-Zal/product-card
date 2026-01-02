
async function getUsers() {
  try {
    await new Promise(r => setTimeout(r, 1000));
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

const userCardTemplate = document.querySelector('#user-card-template');
const userCardList = document.querySelector('.user-card-list');
function fillOutCard(user) {
  const userCardClone = userCardTemplate.content.cloneNode(true);
  userCardClone.querySelector('.id').textContent = user.id;
  userCardClone.querySelector('.name').textContent = user.name;
  userCardClone.querySelector('.surname').textContent = user.surname;
  userCardClone.querySelector('.email').textContent = user.email;
  userCardClone.querySelector('.age').textContent = user.age;
  userCardList.appendChild(userCardClone);
}

function setLocalStorageUsers(users) {
  localStorage.setItem(`users`, JSON.stringify(users));
}

function getLocalStorageUsers() {
  return JSON.parse(localStorage.getItem('users'));
}

const load = document.querySelector('#load');
async function synhronizedLocalStorage() {
  if (!localStorage.getItem('users')) {
    setLocalStorageUsers(await getUsers());
  }
  getLocalStorageUsers().forEach(user => fillOutCard(user));
  load.style.display = 'none';
}

const getUsersButton = document.querySelector('#get-users');
getUsersButton.addEventListener('click', async () => {
  if (getLocalStorageUsers().length === (await getUsers()).length) {
    alert('Пользователи уже загружены');
    return;
  }
  const userCards = Array.from(document.querySelectorAll('.user-card'));
  setLocalStorageUsers(await getUsers());
  getLocalStorageUsers().forEach(user => {
    if (userCards.filter(userCard => userCard.querySelector('.name').textContent === user.name).length > 0) {
      return;
    }
    fillOutCard(user);
  })
})

userCardList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-user')) {
    const userCard = event.target.closest('.user-card');
    const cardUserId = userCard.querySelector('.id').textContent;
    localStorage.setItem('users', JSON.stringify(getLocalStorageUsers().filter(localStorageUser => localStorageUser.id !== cardUserId)));
    userCard.remove();
  }
})

const deleteUsersButton = document.querySelector('#delete-all-users');
deleteUsersButton.addEventListener('click', () => {
  const userCards = document.querySelectorAll('.user-card');
  userCards.forEach(userCard => userCard.remove());
  localStorage.clear();
})

synhronizedLocalStorage();
