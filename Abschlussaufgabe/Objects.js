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