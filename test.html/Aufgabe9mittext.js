/* Aufgabe : Erpresserbrief
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 13.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    //Globale Variable anlegen. -wie kann ich die versch. Div's vergleichen?
    let currentLetter;
    document.addEventListener("keydown", tastaturEingabe);
    function init() {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]; //variable alphabat vom typ stringarray - buchstaben sind im array drin
        let anzahl = alphabet.length;
        if (anzahl == alphabet.length) {
            for (let i = 0; i < alphabet.length; i++) {
                drawRect(alphabet[i]); //parameter _alphabet - funktionsaufruf drawrect mit dem parameter (ABC...) i + 
            }
        }
        drawKasten();
    }
    //handle click wird immmer aufgerufen, wenn mans anklickt 
    //Event.target gibt dir das objekt zurück - liefert div zurück
    //---------Funktion Kästchen (um Buchstaben) Zeichnen--------
    function drawRect(_alphabet) {
        let div = document.createElement("div"); //div erstellen - variable div type HTMLDivElement - = -> Zuweisungsapperator // Variable bekommt wert zugewiesen- soll ein div element creieren
        div.style.width = "40px"; //Returns a String of an object
        div.style.height = "40px";
        div.style.backgroundColor = "lightgrey";
        div.innerText = _alphabet; //hinter jedem buchstaben soll ein div creiert werden 
        div.style.marginLeft = "2px";
        div.style.marginTop = "2px"; //
        div.id = _alphabet;
        div.className = "letters"; //
        div.addEventListener("click", handleClick);
        document.body.appendChild(div); //html ELement in den Code einfügen lassen - hängt div an body dran - wird gezeichnet
    }
    //------ Funktion große Box zeichnen----
    function drawKasten() {
        let letter = document.createElement("div");
        letter.style.width = "800px"; //Returns a String of an object
        letter.style.height = "300px";
        letter.style.backgroundColor = "grey";
        letter.style.marginLeft = "2px";
        letter.style.marginTop = "2px"; //
        letter.addEventListener("click", putLetter);
        document.body.appendChild(letter);
    }
    //----- Funktion: Farbe ändert sich durch einen Klick
    function handleClick(_event) {
        let click = _event.target; //div element creieirt, target = was angeklickt wird
        click.style.backgroundColor = "lightblue";
        currentLetter = click.id; //der div der angeklickt wurde davon wird die id gespeichert - Buchstaben den ich angeklickt hab
        let divlist = document.getElementsByClassName("letters");
        //div wird wert zugewiesen - jedes div wird in divlist gespeichert 
        for (let i = 0; i < divlist.length; i++) {
            if (currentLetter != divlist[i].id) {
                divlist[i].style.backgroundColor = "lightgrey";
            }
        }
    }
    //---------Funktion: Buchstaben werden in den Brief gesetzt
    function putLetter(_event) {
        let box = document.createElement("div");
        box.style.width = "30px";
        box.style.height = "30px";
        box.style.backgroundColor = "blue";
        box.innerText = currentLetter;
        box.style.marginLeft = "3px";
        box.style.marginTop = "3px";
        box.id = currentLetter;
        box.className = "letters";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        document.body.appendChild(box);
        box.addEventListener("click", deleteLetter);
        let clicking = _event.target;
    }
    //Funktion:Buchstaben mit Tastaturklick auswählen
    function tastaturEingabe(event) {
        if (event.key == "a" || event.key == "A") {
            currentLetter = event.key; //eventkey- wenn event passiert-- a angeklickt
            putLetter; //führt putletter aus
        }
        else if (event.key == "b" || event.key == "B") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "c" || event.key == "C") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "d" || event.key == "D") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "e" || event.key == "E") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "f" || event.key == "F") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "g" || event.key == "G") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "h" || event.key == "H") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "i" || event.key == "I") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "j" || event.key == "J") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "k" || event.key == "K") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "l" || event.key == "L") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "m" || event.key == "M") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "n" || event.key == "N") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "o" || event.key == "O") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "p" || event.key == "P") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "q" || event.key == "Q") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "r" || event.key == "R") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "s" || event.key == "S") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "t" || event.key == "T") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "u" || event.key == "U") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "v" || event.key == "V") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "w" || event.key == "W") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "x" || event.key == "X") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "y" || event.key == "Y") {
            currentLetter = event.key;
            putLetter;
        }
        else if (event.key == "z" || event.key == "Z") {
            currentLetter = event.key;
            putLetter;
        }
    }
    //------ Funktion: Alt Taste gedrückt halten (1)   //alt taste gedürckt
    function handleAlt(_event) {
        if (_event.keyCode == 18) {
            deleteLetter;
        }
    }
    //------- Funkton: Buchstaben entfernen (2)
    function deleteLetter(_event) {
        if (_event.altKey == false) {
            return;
        }
        if (_event.altKey == true) {
            let _delete = _event.target; //variable _delete typ:html.... wenn div element soll event target sein- div element angeklickt, dann soll remove child
            document.body.removeChild(_delete); //div mit buchstaben soll gelöscht werden... das angeklickte soll gelöscht werdern
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe9mittext.js.map