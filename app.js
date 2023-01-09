const emailInput = document.querySelector("#email-input");
const text = document.querySelector("#text");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const email = emailInput.value;
  const isValidEmail = isValid(email);

  if (isValidEmail) {
    text.innerText = "Thank you!";
    text.classList.remove("error-message");
    text.classList.add("valid-message");
    emailInput.classList.remove("error-border");
    emailInput.classList.add("valid-border");
  } else {
    text.innerText = "Please enter a valid email address";
    text.classList.remove("valid-message");
    text.classList.add("error-message");
    emailInput.classList.remove("valid-border");
    emailInput.classList.add("error-border");
  }
});

function isValid(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
