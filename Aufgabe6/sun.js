var Aufgabe6;
(function (Aufgabe6) {
    class sun extends Aufgabe6.MovingObjects {
        //extends = Vererbung
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            this.draw();
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(73, 73, 70, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFF00";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.stroke();
        }
    }
    Aufgabe6.sun = sun;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=sun.js.map