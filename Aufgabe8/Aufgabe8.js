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
        //var Zahl: string = prompt("Bitte gewünschte Anzahl zwischen 10 und 100 angeben"); 
        //var ZahlNumb: number = parseInt(Zahl); //die Funktion ParseInt wandelt einen String in eine Zahl um
        let input = prompt("Gib eine Zahl zwischen 10 und 100 ein."); //input Variable ruft prompt auf
        if (isNaN(parseInt(input)) || parseInt(input) < 10 || parseInt(input) > 100) {
            alert("Deine Eingabe ist falsch.");
            init(); //Rekursion
        }
        else {
            for (let i = 0; i < parseInt(input); i++) {
                drawRect(Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, Math.random() * 360);
            }
        }
    }
    function click(_event) {
        console.log("Hallo");
        console.log(_event);
        let div = document.getElementsByTagName("h1")[0];
        div.addEventListener("click", click);
        div.addEventListener("click", click);
    }
    function handleMouseOverH1(_event) {
        console.log(_event.target);
        let h1 = _event.target;
        h1.style.color = "#ff0000";
    }
    //Funktion Kästchen Zeichnen
    function drawRect(_x, _y, _color) {
        let div = document.createElement("div"); //div erstellen
        div.style.width = "40px"; //Returns a String of an object
        div.style.height = "40px";
        div.style.marginLeft = _x + "px"; //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y + "px";
        div.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)"; //zufällige Farbe
        document.body.appendChild(div); //html ELement in den Code einfügen lassen
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Aufgabe8.js.map