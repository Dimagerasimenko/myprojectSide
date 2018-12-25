const formEntry = document.querySelector('.form-entry');
const btnLogin = document.querySelector('.header-user-login');
const btnCloseFormEntry = document.querySelector('.close-form2');


btnLogin.addEventListener('click', (evt) => {
  evt.preventDefault();
  formEntry.classList.add('modal-show');
})

btnCloseFormEntry.addEventListener('click', (evt) => {
  evt.preventDefault();
  formEntry.classList.remove('modal-show');
})
