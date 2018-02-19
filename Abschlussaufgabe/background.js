/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
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
            Wasserfall.crc2.fillStyle = "#A4A4A4";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(63, 33, 12, 0, 3 * Math.PI);
            Wasserfall.crc2.fillStyle = "#848484";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(90, 103, 10, 0, 2 * Math.PI);
            Wasserfall.crc2.fillStyle = "#848484";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(73, 103, 15, 0, 2 * Math.PI);
            Wasserfall.crc2.fillStyle = "#848484";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(43, 64, 22, 0, 2 * Math.PI);
            Wasserfall.crc2.fillStyle = "#848484";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            //Berg zeichnen
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.moveTo(0, 500);
            Wasserfall.crc2.lineTo(250, 100);
            Wasserfall.crc2.lineTo(550, 300);
            // crc2.fillRect(0,200,800,600);
            Wasserfall.crc2.fillStyle = "#A4A4A4";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.moveTo(500, 200);
            Wasserfall.crc2.lineTo(650, 100);
            Wasserfall.crc2.lineTo(800, 300);
            Wasserfall.crc2.lineTo(800, 600);
            Wasserfall.crc2.lineTo(200, 600);
            Wasserfall.crc2.closePath();
            Wasserfall.crc2.fillStyle = "#A4A4A4";
            Wasserfall.crc2.fill();
            Wasserfall.crc2.stroke();
        }
    }
    Wasserfall.Background = Background;
})(Wasserfall || (Wasserfall = {}));
//# sourceMappingURL=background.js.map