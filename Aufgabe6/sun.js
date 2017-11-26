var skiski;
(function (skiski) {
    class sun {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            this.draw();
        }
        draw() {
            skiski.crc2.beginPath();
            skiski.crc2.arc(73, 73, 70, 0, 2 * Math.PI);
            skiski.crc2.fillStyle = "#FFFF00";
            skiski.crc2.fill();
            skiski.crc2.stroke();
        }
    }
    skiski.sun = sun;
})(skiski || (skiski = {}));
//# sourceMappingURL=sun.js.map