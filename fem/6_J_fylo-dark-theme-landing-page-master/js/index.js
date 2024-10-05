const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
  let email = document.getElementById("email");
  let errorMessageEmail = document.getElementById("email--error");
  let isValid = EMAIL_REGEX.test(email.value);
  if (isValid) {
    errorMessageEmail.style.display = "none";
  } else {
    errorMessageEmail.style.display = "block";
  }
  return isValid;
}

document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");

  email.addEventListener("focusout", () => {
    validateEmail();
  });
});
