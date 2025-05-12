const form = document.querySelector("form");

const localStorageKey = "feedback-form-state";
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const inputsOnPageLoad = async () => {
    try {
        const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
        if (localStorageValue) {
            emailInput.value = localStorageValue.email;
            messageInput.value = localStorageValue.message;
        }
    } catch (err) {
        console.error(err.message);
    }
}
inputsOnPageLoad();

form.addEventListener("input", onInputsUpdate);
form.addEventListener("submit", onSubmit);

async function onInputsUpdate() {
    const inputsValues = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    }
    localStorage.setItem(localStorageKey, JSON.stringify(inputsValues));
}

function onSubmit(evt) {
    evt.preventDefault();
    const userMessage = {
        email: emailInput.value,
        message: messageInput.value
    }
    console.log(userMessage);
    localStorage.removeItem(localStorageKey);
    evt.target.reset();
}
