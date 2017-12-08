var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        var Zahl = prompt("Bitte gewünschte Anzahl zwischen 10 und 100 angeben");
        var ZahlNumb = parseInt(Zahl); //die Funktion ParseInt wandelt einen String in eine Zahl um
        var Breite = prompt("Bitte gewünschte Breite angeben");
        var BreiteNumb = parseInt(Breite);
        var Höhe = prompt("Bitte gewünschte Höhe angeben");
        var HöheNumb = parseInt(Höhe);
        if (ZahlNumb >= 10 && ZahlNumb <= 100) {
            for (var i = 0; i < ZahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", BreiteNumb, HöheNumb); //x,y und farbe an die Zeichenfunktion übergeben
            }
        }
        else {
            window.alert("Die Eingabe ist falsch"); //Warnung bei falscher Eingabe und neu laden der Funktion
            init();
        }
    }
    //Funktion Kästchen Zeichnen
    function drawRect(_x, _y, _color, _width, _height) {
        let div = document.createElement("div"); //div erstellen
        div.style.width = _width.toString(); //Returns a String of an object
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString(); //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color; //zufällige Farbe
        document.body.appendChild(div); //html ELement in den Code einfügen lassen
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Aufgabe8.js.map