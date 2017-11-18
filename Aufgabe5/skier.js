var skiski;
(function (skiski) {
    class skier {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        move() {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy;
            // this.color =  "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            this.draw();
        }
        draw() {
            skiski.crc2.beginPath();
            skiski.crc2.fillStyle = this.color; // Farbe oben zugreifen
            skiski.crc2.fillRect(this.x, this.y, 5, -40);
            skiski.crc2.beginPath();
            skiski.crc2.arc(this.x + 3, this.y - 50, 10, 0, 10 * Math.PI);
            skiski.crc2.fillStyle = this.color;
            skiski.crc2.fill();
            skiski.crc2.stroke();
            skiski.crc2.moveTo(this.x + 20, this.y - 10);
            skiski.crc2.lineTo(this.x - 20, this.y + 10);
            skiski.crc2.fill;
            skiski.crc2.stroke();
        }
    }
    skiski.skier = skier;
})(skiski || (skiski = {}));
//# sourceMappingURL=skier.js.map