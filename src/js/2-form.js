const form = document.querySelector('form');

const localStorageKey = 'feedback-form-state';
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formData = {
  email: '',
  message: '',
};

const inputsOnPageLoad = () => {
  try {
    const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    if (localStorageValue) {
      emailInput.value = localStorageValue.email;
      messageInput.value = localStorageValue.message;
    }
  } catch (err) {
    console.error(err.message);
  }
};
inputsOnPageLoad();

form.addEventListener('input', onInputsUpdate);
form.addEventListener('submit', onSubmit);

function onInputsUpdate() {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  evt.target.reset();
}
