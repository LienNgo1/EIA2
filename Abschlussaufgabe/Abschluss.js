/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Wasserfall;
(function (Wasserfall) {
    let Blub1 = 0;
    let Blub2 = 0;
    let Blub3 = 0;
    let Blub4 = 0;
    let Blub5 = 0;
    let Blub6 = 0;
    let Baum1 = 0;
    let Baum2 = 0;
    let saveBG;
    let baumbaum = 0;
    window.addEventListener("load", Wasser);
    let arrayX = []; //Array Gift Wasserfall
    let arrayY = [];
    let poisenX = []; //Array Gift See
    let poisenY = [];
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
        document.getElementById("Baum1").addEventListener("click", WoodClick);
        document.getElementById("Baum2").addEventListener("click", LosungClick);
        //Hintergrund malen
        let b = new Wasserfall.Background(0, 0);
        b.drawBackground(100, 100);
        //Chemikalien fallen lassen
        for (let i = 0; i < 300; i++) {
            arrayX[i] = 400 + Math.random() * 100; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            arrayY[i] = 200 + Math.random() * 400;
        }
        for (let i = 0; i < 300; i++) {
            poisenX[i] = Math.random() * 800; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            poisenY[i] = 530 + Math.random() * 70;
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
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.moveTo(160, 490);
        Wasserfall.crc2.lineTo(200, 490);
        Wasserfall.crc2.stroke();
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.arc(220, 490, 10, 0, 2 * Math.PI);
        Wasserfall.crc2.fillStyle = "#3B170B";
        Wasserfall.crc2.fill();
        Wasserfall.crc2.stroke();
        //Wasser und Gift malen
        let w = new Wasserfall.Water(0, 0);
        w.drawwaterandpoisen(100, 100);
        image = Wasserfall.crc2.getImageData(0, 0, 800, 600);
        animate();
        alert("Oh Nein, jemand hat das Wasser mit radioaktiven Teilen verschmutzt.");
        alert("Versuche diese zu stoppen bevor noch mehr verschmutzt wird!");
    }
    /*------------------------- FUNKTIONEN ---------------------------------*/
    //------------------------------------------------------------------------
    function LosungClick() {
        var x = document.getElementById("Applaus");
        if (Baum2 == 0) {
            Baum2++;
        }
        else {
            Baum2++;
            if (Baum2 == 5) {
                alert("Wohoooooooooo es hat funktioniert");
                drawwoodonwater();
                alert("jetzt fließen keine giftgrünen Teile mehr rum, super!");
                arrayX = [];
                poisenX = [];
                x.play();
            }
        }
    }
    function WoodClick() {
        if (Baum1 == 0) {
            Baum1++;
            alert("Yay, Jetzt hast du nun einen Baumstamm, klicke nun ganz oft am oberen Teil des Wasserfalls um einen Damm zu bauen! ");
        }
    }
    //Funktion Holzteil malen, wenn angeklickt
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
    //Funktionen für Blasen
    function Blub1Click() {
        var y = document.getElementById("Boing");
        if (Blub1 == 0) {
            Blub1++;
            y.play();
            alert("Yay lass das Zeug platzen");
        }
    }
    function Blub2Click() {
        var y = document.getElementById("Boing");
        if (Blub2 == 0) {
            y.play();
            Blub2++;
            alert("Los los los");
        }
    }
    function Blub3Click() {
        var y = document.getElementById("Boing");
        if (Blub3 == 0) {
            y.play();
            Blub3++;
            alert("Warum gehen die Dinger denn nicht??");
        }
    }
    function Blub4Click() {
        var y = document.getElementById("Boing");
        if (Blub4 == 0) {
            y.play();
            Blub4++;
            alert("Hmmm...Irgendetwas ist faul!!");
        }
    }
    function Blub5Click() {
        var y = document.getElementById("Boing");
        if (Blub5 == 0) {
            y.play();
            Blub5++;
            alert("Es muss wohl noch einen anderen Weg geben!");
        }
    }
    function Blub6Click() {
        var y = document.getElementById("Boing");
        if (Blub6 == 0) {
            y.play();
            Blub6++;
            alert("Die sind ja zäh");
        }
    }
    //Funktion Bäume zufällig platzieren (zwischen 100 u 500 horizontal und 400 u 600 vertikal    
    function drawmovingTree(_x, _y, _color) {
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.moveTo(_x, _y);
        Wasserfall.crc2.lineTo(_x + 80, _y + 300);
        Wasserfall.crc2.lineTo(_x - 80, _y + 300);
        Wasserfall.crc2.closePath();
        Wasserfall.crc2.fillStyle = _color;
        Wasserfall.crc2.fill();
    }
    //bewegende Chemikalien zeichnen
    function drawpoisen(_x, _y) {
        Wasserfall.crc2.fillStyle = "#2EFE2E";
        Wasserfall.crc2.beginPath();
        Wasserfall.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        Wasserfall.crc2.fill();
    }
    //---------------------------------- FUNKTION ANIMATE-----------------------------------------------    
    function animate() {
        console.log("Timeout");
        Wasserfall.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        Wasserfall.crc2.putImageData(image, 0, 0);
        //Chemikalien bewegen lassen    
        for (let i = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 200;
            }
            arrayY[i] += Math.random();
            drawpoisen(arrayX[i], arrayY[i]);
        }
        for (let i = 0; i < poisenX.length; i++) {
            if (poisenY[i] > 600) {
                poisenY[i] = 530;
            }
            poisenY[i] += Math.random();
            drawpoisen(poisenX[i], poisenY[i]);
        }
        window.setTimeout(animate, 20);
    }
})(Wasserfall || (Wasserfall = {}));
//# sourceMappingURL=Abschluss.js.map