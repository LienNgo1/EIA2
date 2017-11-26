/*Aufgabe 5: OOSkipiste
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 16.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let i;
    let image;
    let objects = Aufgabe6.MovingObjects[] = [];
    let nSkiers = 5;
    let nClouds = 3;
    let nSnow = 140;
    let tree = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        //Hintergrundbild
        //Himmel
        Aufgabe6.crc2.fillStyle = "#CEF6F5";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(50, 50, 40, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#F4FA58";
        Aufgabe6.crc2.fill();
        //Berge
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 500);
        Aufgabe6.crc2.lineTo(200, 10);
        Aufgabe6.crc2.lineTo(400, 600);
        Aufgabe6.crc2.fillStyle = "#585858";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(100, 600);
        Aufgabe6.crc2.lineTo(550, 10);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.fillStyle = "#A4A4A4";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        //Skiberg zeichnen//
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(900, 0);
        Aufgabe6.crc2.lineTo(200, 600);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.stroke();
        //Schleife für Baeume 
        for (i = 0; i < 10; i++) {
            tree[i] = new Tree(260 + Math.random() * 600, 400 + Math.random() * 100);
        }
        for (i = 0; i < nSkiers; i++) {
            let s = new Skier(800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(s);
        }
        //Schleife für Schneeflocken
        for (i = 0; i < nSnow; i++) {
            let s = new Snow(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }
        //Bild als Hintergrund speichern
        image = Aufgabe6.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        Aufgabe6.crc2.clearRect(0, 0, 800, 600); // Hintergrund restaurieren
        Aufgabe6.crc2.putImageData(image, 0, 0);
        for (i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.move();
        }
        //Baeume zeichnen
        for (i = 0; i < tree.length; i++) {
            let s = tree[i];
            s.draw();
        }
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Aufgabe6.js.map