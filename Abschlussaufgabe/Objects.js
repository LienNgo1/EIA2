/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Wasserfall;
(function (Wasserfall) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x; //parameter in der Subklasse wird aufgerufen
            this.y = _y;
        }
        draw() { }
        move() { }
    }
    Wasserfall.MovingObjects = MovingObjects;
})(Wasserfall || (Wasserfall = {}));
//# sourceMappingURL=Objects.js.map