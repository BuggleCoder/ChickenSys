const form = document.querySelector("#commandCenter");
const inputField = document.querySelector("#commandInput");
const outputDisplay = document.querySelector("#output");

let date = new Date();

function displayOutput(string, type) {
  if (type === "text") {
    outputDisplay.textContent += `Output: ${string}\n`;
  } else if (type === "error") {
    outputDisplay.textContent += `Error: ${string}\n`;
  }
}

function commandCenter(inputValue) {
  let trimmedValue = inputValue.trim();

  if (!trimmedValue) {
    displayOutput("Unknown command.", "error");
    return;
  }

  if (!trimmedValue.startsWith("$")) {
    displayOutput("Commands must start with '\$'.", "error");
    return;
  }

  let command = trimmedValue.slice(1).trim();

  if (command === "clear") {
    outputDisplay.textContent = "";
  } else if (command === "") {
    displayOutput("Unknown command.", "error");
  } else if (command === "help") {
    displayOutput("Commands: \n Clear \n time", "text");
  } else if (command === "time") {
    displayOutput(`Time: ${date.getHours}: ${date.getMinutes}`, "text");
  } else {
    displayOutput(`Executed '${command}' successfully.`, "text");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = inputField.value;
  commandCenter(input);
  inputField.value = "";
});
