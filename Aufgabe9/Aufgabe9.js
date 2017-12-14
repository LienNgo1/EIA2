/* Aufgabe 8: RandomBoxes
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 8.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
        let anzahl = alphabet.length;
        if (anzahl == alphabet.length) {
            for (let i = 0; i < alphabet.length; i++) {
                drawRect(alphabet[i]);
            }
        }
    }
    //Funktion Kästchen Zeichnen
    function drawRect(_alphabet) {
        let div = document.createElement("div"); //div erstellen
        div.style.width = "40px"; //Returns a String of an object
        div.style.height = "40px";
        div.style.backgroundColor = "red";
        div.innerText = _alphabet;
        div.style.marginLeft = "2px";
        div.style.marginTop = "2px";
        document.body.appendChild(div); //html ELement in den Code einfügen lassen - hängt div an body dran - wird gezeichnet
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Aufgabe9.js.map