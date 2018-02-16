var Wasserfall;
(function (Wasserfall) {
    class Background {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawBackground(x, y) {
            //Himmel malen
            Wasserfall.crc2.fillStyle = "#CECEF6";
            Wasserfall.crc2.fillRect(0, 0, 800, 40);
            Wasserfall.crc2.fillStyle = "#D8CEF6";
            Wasserfall.crc2.fillRect(0, 40, 800, 60);
            Wasserfall.crc2.fillStyle = "#E3CEF6";
            Wasserfall.crc2.fillRect(0, 60, 800, 100);
            Wasserfall.crc2.fillStyle = "#ECCEF5";
            Wasserfall.crc2.fillRect(0, 100, 800, 600);
            //Mond malen
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(73, 73, 60, 0, 2 * Math.PI);
            Wasserfall.crc2.fillStyle = "#D8D8D8";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(63, 33, 14, 0, 3 * Math.PI);
            Wasserfall.crc2.fillStyle = "#848484";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            Wasserfall.crc2.arc(93, 103, 10, 0, 2 * Math.PI);
            Wasserfall.crc2.fillStyle = "#848484";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
        }
    }
    Wasserfall.Background = Background;
})(Wasserfall || (Wasserfall = {}));
//# sourceMappingURL=background.js.map