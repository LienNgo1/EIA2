var Aufgabe6;
(function (Aufgabe6) {
    class skier extends Aufgabe6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy;
            // this.color =  "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            this.draw();
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.fillStyle = this.color; // Farbe oben zugreifen
            Aufgabe6.crc2.fillRect(this.x, this.y, 5, -40);
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 3, this.y - 50, 10, 0, 10 * Math.PI);
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.moveTo(this.x + 20, this.y - 10);
            Aufgabe6.crc2.lineTo(this.x - 20, this.y + 10);
            Aufgabe6.crc2.fill;
            Aufgabe6.crc2.stroke();
        }
    }
    Aufgabe6.skier = skier;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=skier.js.map