function validateEmail(input) {
  // Regular expression to check if the input is a valid email address
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(input.toLowerCase());
}

const emailInput = document.querySelector('input[name="email"]');
const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Check if the input is a valid email address
  if (validateEmail(emailInput.value)) {
    // If it is valid, do something here (e.g. send an email notification)
  } else {
    // If it is not valid, show the error message
    errorMessage.style.display = "block";
  }
});
