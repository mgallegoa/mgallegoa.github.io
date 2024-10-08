const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateRequired(value) {
  if (value == null || value.trim() === "") {
    return false;
  }
  return true;
}
function toggleError(isValid, field, errorIcon, errorMessage) {
  if (isValid) {
    field.classList.remove("form__input--invalid");
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
  } else {
    field.classList.add("form__input--invalid");
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
  }
}
function validateFirstName() {
  let firstName = document.getElementsByName("firstName");
  let errorIcon = document.querySelector('[data-icon="firstName"]');
  let errorMessage = document.querySelector('[data-message="firstName"]');
  const isValid = validateRequired(firstName[0].value);
  toggleError(isValid, firstName[0], errorIcon, errorMessage);
  return isValid;
}
function validateLastName() {
  let lastName = document.getElementsByName("lastName");
  let errorIcon = document.querySelector('[data-icon="lastName"]');
  let errorMessage = document.querySelector('[data-message="lastName"]');
  const isValid = validateRequired(lastName[0].value);
  toggleError(isValid, lastName[0], errorIcon, errorMessage);
  return isValid;
}
function validateEmail() {
  let email = document.getElementsByName("email");
  let errorMessageEmail = document.querySelector('[data-message="emailRegex"]');
  let errorIcon = document.querySelector('[data-icon="email"]');
  let isValid = EMAIL_REGEX.test(email[0].value);
  toggleError(isValid, email[0], errorIcon, errorMessageEmail);
  return isValid;
}
function validatePassword() {
  let password = document.getElementsByName("password");
  let errorIcon = document.querySelector('[data-icon="password"]');
  let errorMessage = document.querySelector('[data-message="password"]');
  const isValid = validateRequired(password[0].value);
  toggleError(isValid, password[0], errorIcon, errorMessage);
  return isValid;
}
function validateForm() {
  let isFormCorrect = validateFirstName();
  isFormCorrect = validateLastName() && isFormCorrect;
  isFormCorrect = validateEmail() && isFormCorrect;
  isFormCorrect = validatePassword() && isFormCorrect;
  return isFormCorrect;
}
function submitForm(event) {
  event.preventDefault();
  if (validateForm()) {
    return true;
  }
  return false;
}
document.addEventListener("DOMContentLoaded", () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  firstName.addEventListener("focusout", () => {
    validateFirstName();
  });
  lastName.addEventListener("focusout", () => {
    validateLastName();
  });
  email.addEventListener("focusout", () => {
    validateEmail();
  });
  password.addEventListener("focusout", () => {
    validatePassword();
  });
});
