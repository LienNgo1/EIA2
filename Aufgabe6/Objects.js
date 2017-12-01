var Aufgabe6;
(function (Aufgabe6) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x; //parameter in der Subklasse wird aufgerufen
            this.y = _y;
        }
        draw() { }
        move() { }
    }
    Aufgabe6.MovingObjects = MovingObjects;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Objects.js.map