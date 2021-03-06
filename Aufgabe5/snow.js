var skiski;
(function (skiski) {
    class snow {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random(); //y wird erweitert um random
            this.draw();
        }
        draw() {
            skiski.crc2.fillStyle = "#FFFFFF";
            skiski.crc2.beginPath();
            skiski.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            skiski.crc2.fill();
        }
    }
    skiski.snow = snow;
})(skiski || (skiski = {}));
//# sourceMappingURL=snow.js.map