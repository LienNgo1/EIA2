/*Aufgabe 5: OOSkipiste
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 16.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let i; //Zählvariable i, Datentyp
    let image;
    let objects = []; //Array für meine ganzen object: Moving Objects: Datentyp v-SUPERKLASSE
    let nSkiers = 5; //Variable für die Anzahl5 Skier 
    let nSun = 1;
    let nSnow = 140;
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
        drawconstantTree(10, 20, "#0A2A12");
        drawconstantTree(600, 600, "#0A2A12");
        //Schleifen
        for (i = 0; i < nSkiers; i++) {
            let s = new Aufgabe6.skier(800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)"); //Neues Objekt von typ skier 
            objects.push(s); //Neue Objekt an neues Objekt array ranhängen
        }
        //Schleife für Schneeflocken
        for (i = 0; i < nSnow; i++) {
            let s = new Aufgabe6.snow(Math.random() * 800, Math.random() * 600); //variable s vom typ snow - neue schneeflocke mit den parametern
            objects.push(s); //jedes neue Schneeflocke wird an das array 
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
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }
    //Funktion mehrere konstante Bäume platzieren 
    function drawconstantTree(_x, _y, _color) {
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x, _y);
        Aufgabe6.crc2.lineTo(_x + 80, _y + 200);
        Aufgabe6.crc2.lineTo(_x - 80, _y + 200);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = _color;
        Aufgabe6.crc2.fill();
    }
    //Funktion Bäume zufällig platzieren (zwischen 100 u 500 horizontal und 400 u 600 vertikal    
    function drawmovingTree(_x, _y, _color) {
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x, _y);
        Aufgabe6.crc2.lineTo(_x + 80, _y + 200);
        Aufgabe6.crc2.lineTo(_x - 80, _y + 200);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = _color;
        Aufgabe6.crc2.fill();
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Aufgabe6.js.map