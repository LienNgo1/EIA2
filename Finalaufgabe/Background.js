var safethefish;
(function (safethefish) {
    class Background {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawMountain(x, y) {
            //Bäume links
            for (let i = 0; i < 620; i++) {
                crc2.fillStyle = "brown";
                crc2.fillRect(i - 5, 420, 10, -90);
                crc2.beginPath();
                crc2.fillStyle = "green";
                crc2.arc(i + 10, 360, 15, 0, 2 * Math.PI);
                crc2.arc(i - 10, 360, 15, 0, 2 * Math.PI);
                crc2.arc(i, 340, 15, 0, 2 * Math.PI);
                crc2.fill();
                i = i + Math.random() * 150;
            }
            //Bäume rechts
            for (let i = 660; i < 1280; i++) {
                crc2.fillStyle = "brown";
                crc2.fillRect(i - 5, 420, 10, -90);
                crc2.beginPath();
                crc2.fillStyle = "green";
                crc2.arc(i + 10, 360, 15, 0, 2 * Math.PI);
                crc2.arc(i - 10, 360, 15, 0, 2 * Math.PI);
                crc2.arc(i, 340, 15, 0, 2 * Math.PI);
                crc2.fill();
                i = i + Math.random() * 150;
            }
            //Weg
            crc2.fillStyle = "grey";
            crc2.beginPath();
            crc2.moveTo(340, 720);
            crc2.lineTo(620, 420);
            crc2.lineTo(660, 420);
            crc2.lineTo(940, 720);
            crc2.fill();
            crc2.strokeStyle = "darkgrey";
            crc2.lineWidth = 5;
            crc2.stroke();
            //Gras Links
            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.moveTo(0, 720);
            crc2.lineTo(0, 420);
            crc2.lineTo(620, 420);
            crc2.lineTo(340, 720);
            crc2.lineWidth = 1;
            crc2.fill();
            //Gras Rechts
            crc2.fillStyle = "green";
            crc2.beginPath();
            crc2.moveTo(940, 720);
            crc2.lineTo(1280, 720);
            crc2.lineTo(1280, 420);
            crc2.lineTo(660, 420);
            crc2.fill();
            //Grashalme links
            for (let i = 0; i < 620; i++) {
                crc2.strokeStyle = "darkgreen";
                crc2.beginPath();
                crc2.moveTo(i, 420);
                crc2.lineTo(i + 1, 420 - Math.random() * 8);
                crc2.stroke();
            }
            //Grashalme rechts
            for (let i = 660; i < 1280; i++) {
                crc2.strokeStyle = "darkgreen";
                crc2.beginPath();
                crc2.moveTo(i, 420);
                crc2.lineTo(i + 1, 420 - Math.random() * 8);
                crc2.stroke();
            }
        }
    }
    safethefish.Background = Background;
})(safethefish || (safethefish = {}));
//# sourceMappingURL=Background.js.map