/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Wasserfall;
(function (Wasserfall) {
    let Blub1;
    let Blub2 = 0;
    let Blub3 = 0;
    let Blub4 = 0;
    let Blub5 = 0;
    let Blub6 = 0;
    let Blub7 = 0;
    let Blub8 = 0;
    let Blub9 = 0;
    let Baum1 = 0;
    let Baum2 = 0;
    let saveBG;
    let baumbaum = 0;
    window.addEventListener("load", Wasser);
    let arrayX = [];
    let arrayY = [];
    let image; //IMAGEDATA!! Nicht any
    //-----------------------------------------Funktion Canvas---------------------------------------------------
    function Wasser() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Wasserfall.crc2 = canvas.getContext("2d");
        console.log(Wasserfall.crc2);
        document.getElementById("Blub1").addEventListener("click", Blub1Click);
        document.getElementById("Blub1").addEventListener("touchstart", Blub1Click);
        document.getElementById("Blub2").addEventListener("click", Blub2Click);
        document.getElementById("Blub3").addEventListener("click", Blub3Click);
        document.getElementById("Blub4").addEventListener("click", Blub4Click);
        document.getElementById("Blub5").addEventListener("click", Blub5Click);
        document.getElementById("Blub6").addEventListener("click", Blub6Click);
        document.getElementById("Blub7").addEventListener("click", Blub7Click);
        document.getElementById("Blub8").addEventListener("click", Blub8Click);
        document.getElementById("Blub9").addEventListener("click", Blub9Click);
        document.getElementById("Baum1").addEventListener("click", LosungClick);
        document.getElementById("Baum2").addEventListener("click", LosungClick);
        //Hintergrund malen
        let b = new Wasserfall.Background(0, 0);
        b.drawBackground(100, 100);
        //Chemikalien fallen lassen
        for (let i = 0; i < 300; i++) {
            arrayX[i] = 400 + Math.random() * 100; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            arrayY[i] = 200 + Math.random() * 400;
        }
        //zufällig bewegende Bäume rechts
        for (let i = 0; i < 70; i++) {
            let x = 500 + Math.random() * 300; // platziert 500 +300 = 800 zwischen 500 und 800
            let y = 150 + Math.random() * 400; //  
            drawmovingTree(x, y, "#0A2A12");
        }
        //zufällig bewegende Bäume links
        for (let i = 0; i < 70; i++) {
            let x = Math.random() * 400; // platziert 600 +200 = 800 zwischen 600 und 200
            let y = 150 + Math.random() * 400; //  
            drawmovingTree(x, y, "#0A2A12");
        }
        //Holzstämme malen
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.moveTo(150, 470);
        //crc2.bezierCurveTo(38,45,89,4,65,56);
        Wasserfall.crc2.lineTo(300, 470);
        Wasserfall.crc2.lineTo(300, 550);
        Wasserfall.crc2.lineTo(150, 550);
        Wasserfall.crc2.closePath();
        Wasserfall.crc2.fillStyle = "#61380B";
        Wasserfall.crc2.fill();
        Wasserfall.crc2.stroke();
        //Wasser und Gift malen
        let w = new Wasserfall.Water(0, 0);
        w.drawwaterandpoisen(100, 100);
        image = Wasserfall.crc2.getImageData(0, 0, 800, 600);
        animate();
        //  alert("Oh Nein, jemand hat das Wasser mit giftigen Chemikalien verschmutzt.");
        //  alert("Versuche so schnell wie möglich die Fische zu retten.");
    }
    /*------------------------- FUNKTIONEN ---------------------------------*/
    //------------------------------------------------------------------------
    function LosungClick() {
        if (Baum2 == 0 && Baum1 == 0) {
            Baum2++;
            Baum1++;
            //crc2.putImageData(saveBG, 0, 0);
            drawwoodonwater();
            alert("yaaaay du hast die Fische gerettet");
        }
    }
    function drawwoodonwater() {
        Wasserfall.crc2.save();
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.moveTo(370, 140);
        //crc2.bezierCurveTo(38,45,89,4,65,56);
        Wasserfall.crc2.lineTo(520, 140);
        Wasserfall.crc2.lineTo(520, 200);
        Wasserfall.crc2.lineTo(370, 200);
        Wasserfall.crc2.closePath();
        Wasserfall.crc2.fillStyle = "#61380B";
        Wasserfall.crc2.fill();
        Wasserfall.crc2.stroke();
    }
    function Blub1Click() {
        if (Blub1 == 0) {
            Blub1++;
            alert("Yay lass das ZEug platzen");
        }
        else {
            Blub1++;
            if (Blub1 == 5) {
                alert("5 Mal haste gekickt");
            }
        }
    }
    function Blub2Click() {
        if (Blub2 == 0) {
            Blub2++;
            alert("Los los los");
        }
    }
    function Blub3Click() {
        if (Blub3 == 0) {
            Blub3++;
            alert("Warum gehen die Dinger denn nicht??");
        }
    }
    function Blub4Click() {
        if (Blub4 == 0) {
            Blub4++;
            alert("Irgendetwas ist faul");
        }
    }
    function Blub5Click() {
        if (Blub5 == 0) {
            Blub5++;
            alert("Es muss wohl noch einen anderen Weg geben");
        }
    }
    function Blub6Click() {
        if (Blub6 == 0) {
            Blub6++;
            alert("Die sind ja zäh");
        }
    }
    function Blub7Click() {
        if (Blub7 == 0) {
            Blub7++;
            alert("Yay lass das ZEug platzen");
        }
    }
    function Blub8Click() {
        if (Blub8 == 0) {
            Blub8++;
            alert("Warum platzen diese Dinger denn nicht");
        }
    }
    function Blub9Click() {
        if (Blub9 == 0) {
            Blub9++;
            alert("Yay lass das ZEug platzen");
        }
    }
    //Funktion Bäume zufällig platzieren (zwischen 100 u 500 horizontal und 400 u 600 vertikal    
    function drawmovingTree(_x, _y, _color) {
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.moveTo(_x, _y);
        Wasserfall.crc2.lineTo(_x + 80, _y + 200);
        Wasserfall.crc2.lineTo(_x - 80, _y + 200);
        Wasserfall.crc2.closePath();
        Wasserfall.crc2.fillStyle = _color;
        Wasserfall.crc2.fill();
    }
    //Chemikalien zeichnen
    function drawpoisen(_x, _y) {
        Wasserfall.crc2.fillStyle = "#2EFE2E";
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        Wasserfall.crc2.fill();
    }
    function waterstopp() {
        for (let i = 0; i < 0; i++) {
            arrayX[i] = 0; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            arrayY[i] = 0;
        }
    }
    //---------------------------------- FUNKTION ANIMATE-----------------------------------------------    
    function animate() {
        console.log("Timeout");
        Wasserfall.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        Wasserfall.crc2.putImageData(image, 0, 0);
        //Chemikalien fallen lassen     
        for (let i = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 200;
            }
            arrayY[i] += Math.random(); // andere Bewegungsmuster zu finden
            drawpoisen(arrayX[i], arrayY[i]);
        }
        window.setTimeout(animate, 20);
    }
})(Wasserfall || (Wasserfall = {}));
//# sourceMappingURL=Abschluss.js.map