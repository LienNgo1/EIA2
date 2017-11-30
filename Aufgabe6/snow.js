var Aufgabe6;
(function (Aufgabe6) {
    class snow extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random(); //y wird erweitert um random
            this.draw();
        }
        draw() {
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.snow = snow;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=snow.js.map