const form = document.querySelector("#commandCenter");
const inputField = document.querySelector("#commandInput");
const outputDisplay = document.querySelector("#output");

function displayOutput(string, type) {
  if (type === "text") {
    outputDisplay.textContent = `Output: ${string}`;
  } else if (type === "error") {
    outputDisplay.textContent = `Error: ${string}`;
  }
}

function commandCenter(inputValue, keyword) {
  if (inputValue === keyword) {
    displayOutput("Console Output", "text");
  } else {
    displayOutput("Unknown command.", "error");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let input = inputField.value;
  commandCenter(input, "pepper");
});
