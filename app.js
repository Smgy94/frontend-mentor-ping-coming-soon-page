// Select the email input element and text element in the DOM
const emailInput = document.querySelector("#email-input");
const text = document.querySelector("#text");

// Select the button element in the DOM and add a click event listener
const button = document.querySelector("button");
button.addEventListener("click", () => {
  // Get the value of the email input and check if it's a valid email address
  const email = emailInput.value;
  const isValidEmail = isValid(email);

  // If the email address is valid, show a valid message and apply valid styles
  if (isValidEmail) {
    text.innerText = "Thank you!";
    text.classList.remove("error-message");
    text.classList.add("valid-message");
    emailInput.classList.remove("error-border");
    emailInput.classList.add("valid-border");
  }
  // If the email address is invalid, show an error message and apply error styles
  else {
    text.innerText = "Please enter a valid email address";
    text.classList.remove("valid-message");
    text.classList.add("error-message");
    emailInput.classList.remove("valid-border");
    emailInput.classList.add("error-border");
  }
});

// Function to check if a string is a valid email address
function isValid(email) {
  // Regular expression to check if the string is a valid email address
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Return whether the regex test is successful (email is valid) or not (email is invalid)
  return regex.test(String(email).toLowerCase());
}
