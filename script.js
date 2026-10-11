var message = document.getElementById("message");
var counter = document.getElementById("counter");
var warning = document.getElementById("warning");

message.addEventListener("input", function() {

    var typedCharacters = message.value.length;
    var remainingCharacters = 200 - typedCharacters;

    counter.textContent = typedCharacters + "/200 characters";

    if (remainingCharacters == 0) {
        warning.textContent = "Warning: Character limit reached!";
    } else {
        warning.textContent = "";
    }

});
