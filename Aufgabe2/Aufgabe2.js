/*Aufgabe: Aufgabe: 2 Functions Skipiste
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 17.10.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
window.addEventListener("load", skipiste);
function skipiste() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    crc2.fillStyle = "#A9F5F2";
    crc2.fillRect(0, 0, 800, 600);
    //Bergee//
    crc2.beginPath();
    crc2.moveTo(0, 500);
    crc2.lineTo(200, 10);
    crc2.lineTo(400, 600);
    crc2.fillStyle = "#585858";
    crc2.fill();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(100, 600);
    crc2.lineTo(550, 10);
    crc2.lineTo(800, 600);
    crc2.fillStyle = "#585858";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    //Skiberg//
    crc2.beginPath();
    crc2.moveTo(900, 0);
    crc2.lineTo(200, 600);
    crc2.lineTo(800, 600);
    crc2.closePath();
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.stroke();
    //Sonne//
    crc2.beginPath();
    crc2.arc(73, 73, 70, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFF00";
    crc2.fill();
    crc2.stroke();
    //Bäume//
    crc2.beginPath();
    crc2.moveTo(10, 600);
    crc2.lineTo(140, 350);
    crc2.lineTo(250, 600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(0, 600);
    crc2.lineTo(80, 350);
    crc2.lineTo(120, 600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(120, 600);
    crc2.lineTo(200, 350);
    crc2.lineTo(300, 600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(0, 600);
    crc2.lineTo(0, 350);
    crc2.lineTo(50, 600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    //Skilift//
    crc2.beginPath();
    crc2.moveTo(240, 450);
    crc2.lineTo(800, 10);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(500, 250);
    crc2.lineTo(500, 400);
    crc2.stroke();
    crc2.fillRect(600, 150, 50, 30);
    crc2.fillStyle = "#0101DF";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    crc2.fillRect(350, 350, 50, 30);
    crc2.fillStyle = "#0101DF";
    crc2.fill();
    crc2.stroke();
    /*------------------------- AUFGABE 2 ---------------------------------*/
    //Funktion mehrere konstante Bäume platzieren 
    function drawconstantTree(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 80, _y + 200);
        crc2.lineTo(_x - 80, _y + 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    for (let i = 0; i < 4; i++) {
        drawconstantTree(600 + i * 60, 500, "#088A29");
    }
    //Funktion Bäume zufällig platzieren (zwischen 100 u 500 horizontal und 400 u 600 vertikal)
    function drawmovingTree(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 80, _y + 200);
        crc2.lineTo(_x - 80, _y + 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    for (let i = 0; i < 5; i++) {
        let x = 100 + Math.random() * 600;
        let y = 400 + Math.random() * 100;
        drawmovingTree(x, y, "#688A08");
    }
    //zufällige Schneeflocken, die sich im ganzen Canvas verteilen sollen
    function drawSnowflakes(_x, _y, _radius, _startAngle, _endAngle, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle);
        crc2.fillStyle = _color;
        crc2.fill();
    }
    for (let i = 0; i < 500; i++) {
        let x = 0 + Math.random() * 800;
        let y = 0 + Math.random() * 600;
        drawSnowflakes(x, y, 5, 0, 5 * Math.PI, "#ffffff");
    }
}
//# sourceMappingURL=Aufgabe2.js.map