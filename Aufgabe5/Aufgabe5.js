/*Aufgabe 5: OOSkipiste
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 16.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var skiski;
(function (skiski) {
    window.addEventListener("load", skipiste2);
    let i;
    let image;
    let skierzwei = [];
    let snowflakes = [];
    let sun = [];
    //-----------------------------------------Funktion Canvas---------------------------------------------------
    function skipiste2() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        skiski.crc2 = canvas.getContext("2d");
        console.log(skiski.crc2);
        //Hintergrund
        skiski.crc2.fillStyle = "#CEF6F5";
        skiski.crc2.fillRect(0, 0, 800, 600);
        //Berge zeichnen//
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(0, 500);
        skiski.crc2.lineTo(200, 10);
        skiski.crc2.lineTo(400, 600);
        skiski.crc2.fillStyle = "#585858";
        skiski.crc2.fill();
        skiski.crc2.stroke();
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(100, 600);
        skiski.crc2.lineTo(550, 10);
        skiski.crc2.lineTo(800, 600);
        skiski.crc2.fillStyle = "#A4A4A4";
        skiski.crc2.fill();
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        //Skiberg zeichnen//
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(900, 0);
        skiski.crc2.lineTo(200, 600);
        skiski.crc2.lineTo(800, 600);
        skiski.crc2.closePath();
        skiski.crc2.fillStyle = "#FFFFFF";
        skiski.crc2.fill();
        skiski.crc2.stroke();
        //Bäume zeichnen//
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(10, 600);
        skiski.crc2.lineTo(140, 350);
        skiski.crc2.lineTo(250, 600);
        skiski.crc2.fillStyle = "#0A2A12";
        skiski.crc2.fill();
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(0, 600);
        skiski.crc2.lineTo(80, 350);
        skiski.crc2.lineTo(120, 600);
        skiski.crc2.fillStyle = "#0A2A12";
        skiski.crc2.fill();
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(120, 600);
        skiski.crc2.lineTo(200, 350);
        skiski.crc2.lineTo(300, 600);
        skiski.crc2.fillStyle = "#0A2A12";
        skiski.crc2.fill();
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(0, 600);
        skiski.crc2.lineTo(0, 350);
        skiski.crc2.lineTo(50, 600);
        skiski.crc2.fillStyle = "#0A2A12";
        skiski.crc2.fill();
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        //Skilift zeichnen//
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(240, 450);
        skiski.crc2.lineTo(800, 10);
        skiski.crc2.stroke();
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(500, 250);
        skiski.crc2.lineTo(500, 400);
        skiski.crc2.stroke();
        skiski.crc2.fillRect(600, 150, 50, 30);
        skiski.crc2.fillStyle = "#0101DF";
        skiski.crc2.fill();
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        skiski.crc2.fillRect(350, 350, 50, 30);
        skiski.crc2.fillStyle = "#0101DF";
        skiski.crc2.fill();
        skiski.crc2.stroke();
        // -------------------------------------------SCHLEIFEN --------------------------------------------        
        //Schneeflocken fallen lassen
        for (i = 0; i < 140; i++) {
            snowflakes[i] = new skiski.snow(Math.random() * 800, Math.random() * 600);
        }
        //Mehrere konstante Bäume
        for (let i = 0; i < 4; i++) {
            drawconstantTree(600 + i * 60, 500, "#088A29");
        }
        //zufällig bewegende Bäume
        for (let i = 0; i < 4; i++) {
            let x = 100 + Math.random() * 600;
            let y = 400 + Math.random() * 100;
            drawmovingTree(x, y, "#688A08");
        }
        //-------------Skifahrer fahren lassen----------- Schleife ändern und aufs Interface zugreifen
        for (i = 0; i < 5; i++) {
            skierzwei[i] = new skiski.skier(800, 100, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        }
        //Bild als Hintergrund speichern!! //
        image = skiski.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    /*------------------------- FUNKTIONEN ---------------------------------*/
    //Funktion mehrere konstante Bäume platzieren 
    function drawconstantTree(_x, _y, _color) {
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(_x, _y);
        skiski.crc2.lineTo(_x + 80, _y + 200);
        skiski.crc2.lineTo(_x - 80, _y + 200);
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        skiski.crc2.fillStyle = _color;
        skiski.crc2.fill();
    }
    //Funktion Bäume zufällig platzieren (zwischen 100 u 500 horizontal und 400 u 600 vertikal    
    function drawmovingTree(_x, _y, _color) {
        skiski.crc2.beginPath();
        skiski.crc2.moveTo(_x, _y);
        skiski.crc2.lineTo(_x + 80, _y + 200);
        skiski.crc2.lineTo(_x - 80, _y + 200);
        skiski.crc2.closePath();
        skiski.crc2.stroke();
        skiski.crc2.fillStyle = _color;
        skiski.crc2.fill();
    }
    //---------------------------------- FUNKTION ANIMATE-----------------------------------------------    
    function animate() {
        console.log("Timeout");
        skiski.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        skiski.crc2.putImageData(image, 0, 0);
        //Schneeflocken fallen lassen     
        for (i = 0; i < skiski.snow.length; i++) {
            let s = snowflakes[i];
            s.move();
        }
        //Skifahrer    
        for (i = 0; i < skiski.skier.length; i++) {
            let s = skierzwei[i];
            s.move();
        }
        //Sonne bewegen
        for (i = 0; i < sun.length; i++) {
            let s = sun[i];
            s.move();
        }
        window.setTimeout(animate, 20);
    }
})(skiski || (skiski = {}));
//# sourceMappingURL=Aufgabe5.js.map