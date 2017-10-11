

function dialogFeld() {
    var eingabe = prompt("Please enter your name.", "Harry Potter");
    if (eingabe != null) {
        document.getElementById("demo").innerHTML =
            "Hi" + eingabe + "! How are you today?";
    }
}

