// Variables

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

// Define Commands

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
    displayOutput(
      "Here are some helpful commands: \n clear \n time \n date",
      "text",
    );
  } else if (command === "time") {
    displayOutput(`Time: ${date.getHours()}: ${date.getMinutes()}`, "text");
  } else if (command === "date") {
    displayOutput(
      `Date: ${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`,
      "text",
    );
  } else {
    displayOutput(`Executed '${command}' successfully.`, "text");
  }
}

// Form Submit

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = inputField.value;
  commandCenter(input);
  inputField.value = "";
});
