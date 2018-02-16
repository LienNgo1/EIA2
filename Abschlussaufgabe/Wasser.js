var Wasserfall;
(function (Wasserfall) {
    class Water {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawwaterandpoisen(x, y) {
            //Wasserfall zeichnen//
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.moveTo(400, 200);
            Wasserfall.crc2.lineTo(500, 200);
            Wasserfall.crc2.lineTo(600, 600);
            Wasserfall.crc2.lineTo(300, 600);
            Wasserfall.crc2.closePath();
            Wasserfall.crc2.fillStyle = "#819FF7";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            //See zeichnen
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.moveTo(0, 530);
            Wasserfall.crc2.lineTo(800, 530);
            Wasserfall.crc2.lineTo(800, 600);
            Wasserfall.crc2.lineTo(0, 600);
            Wasserfall.crc2.closePath();
            Wasserfall.crc2.fillStyle = "#819FF7";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            //Chemikalien Zeichnen
            Wasserfall.crc2.fillStyle = "#2EFE2E";
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(100, 500, 40, 0, 2 * Math.PI);
            Wasserfall.crc2.fill();
            Wasserfall.crc2.fillStyle = "#2EFE2E";
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(10, 570, 30, 0, 2 * Math.PI);
            Wasserfall.crc2.fill();
            Wasserfall.crc2.fillStyle = "#2EFE2E";
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(300, 540, 35, 0, 2 * Math.PI);
            Wasserfall.crc2.fill();
            Wasserfall.crc2.fillStyle = "#2EFE2E";
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(500, 490, 20, 0, 2 * Math.PI);
            Wasserfall.crc2.fill();
            Wasserfall.crc2.fillStyle = "#2EFE2E";
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(700, 590, 60, 0, 2 * Math.PI);
            Wasserfall.crc2.fill();
            Wasserfall.crc2.fillStyle = "#2EFE2E";
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(530, 400, 10, 0, 2 * Math.PI);
            Wasserfall.crc2.fill();
        }
    }
    Wasserfall.Water = Water;
})(Wasserfall || (Wasserfall = {}));
//# sourceMappingURL=Wasser.js.map