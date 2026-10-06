const form = document.querySelector("#commandCenter");
const inputField = document.querySelector("#commandInput");
const outputDisplay = document.querySelector("#output");

const commands = {
  pepper: () => displayOutput("Pepper command activated!", "text"),
  clear: () => (outputDisplay.textContent = ""),
};

function displayOutput(string, type) {
  const prefix = type === "error" ? "Error: " : "Output: ";
  outputDisplay.textContent += `${prefix}${string}\n`;
}

function commandCenter(inputValue) {
  const command = inputValue.trim().toLowerCase();

  if (commands[command]) {
    commands[command]();
  } else {
    displayOutput("Unknown command.", "error");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!inputField.value) return;

  commandCenter(inputField.value);
  inputField.value = "";
});
