const form = document.querySelector("#commandCenter");
const inputField = document.querySelector("#commandInput");
const outputDisplay = document.querySelector("#output");

function displayOutput(string, type) {
  if (type === "text") {
    outputDisplay.textContent += `Output: ${string}\n`;
  } else if (type === "error") {
    outputDisplay.textContent += `Error: ${string}\n`;
  }
}

function commandCenter(inputValue) {
  if (!inputValue || inputValue.trim() === "") {
    displayOutput("Unknown command.", "error");
    return;
  }

  if (inputValue === "clear") {
    outputDisplay.textContent = "";
  } else {
    displayOutput(`Executed '${inputValue}' successfully.`, "text");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = inputField.value;

  commandCenter(input);

  inputField.value = "";
});
