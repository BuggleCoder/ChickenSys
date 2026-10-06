let command = $("#commandCenter");
let commandInput;

command.on("submit", function (e) {
  e.preventDefault();
  commandInput = command.val();
});
