const form = document.querySelector(".cta-wrapper");
const emailInput = document.querySelector("#email-input");
const text = document.querySelector("#text");

const validMessage = "Thank you!";
const invalidMessage = "Please enter a valid email address.";
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value;
  if (!isValidEmail(email)) {
    text.textContent = invalidMessage;
    text.classList.add("error-message");
    text.classList.remove("valid-message");
    emailInput.classList.add("error-border");
    emailInput.classList.remove("valid-border");
  } else {
    text.textContent = validMessage;
    text.classList.remove("error-message");
    text.classList.add("valid-message");
    emailInput.classList.remove("error-border");
    emailInput.classList.add("valid-border");
  }
});
