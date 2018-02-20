/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Wasserfall;
(function (Wasserfall) {
    class poisen extends Wasserfall.MovingObjects {
        //extends = Vererbung
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random(); //y wird erweitert um random
            this.draw(); //greift auf das Object wo ich grade bin 
        }
        draw() {
            Wasserfall.crc2.fillStyle = "#DF0101";
            Wasserfall.crc2.beginPath();
            Wasserfall.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Wasserfall.crc2.fill();
        }
    }
    Wasserfall.poisen = poisen;
})(Wasserfall || (Wasserfall = {}));
//# sourceMappingURL=poisen.js.map