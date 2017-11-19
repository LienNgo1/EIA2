/*Aufgabe 5: OOSkipiste
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 16.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace skiski {


    window.addEventListener("load", skipiste2);
    export let crc2: CanvasRenderingContext2D;
    
    let i: number;
    let image: ImageData;
    
    let skierzwei: skier [] = [];
    let snowflakes: snow [] = [];
    let sun: sun [] = [];
    
    
    //-----------------------------------------Funktion Canvas---------------------------------------------------
    function skipiste2(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);


        //Hintergrund
        crc2.fillStyle = "#CEF6F5";
        crc2.fillRect(0, 0, 800, 600);

        //Berge zeichnen//
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
        crc2.fillStyle = "#A4A4A4";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();


        //Skiberg zeichnen//
        crc2.beginPath();
        crc2.moveTo(900, 0);
        crc2.lineTo(200, 600);
        crc2.lineTo(800, 600)
        crc2.closePath();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.stroke();

        //Bäume zeichnen//
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


        //Skilift zeichnen//
        crc2.beginPath();
        crc2.moveTo(240, 450);
        crc2.lineTo(800, 10);
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(500, 250);
        crc2.lineTo(500, 400);
        crc2.stroke();

        crc2.fillRect(600, 150, 50, 30)
        crc2.fillStyle = "#0101DF";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();

        crc2.fillRect(350, 350, 50, 30)
        crc2.fillStyle = "#0101DF";
        crc2.fill();
        crc2.stroke();

        // -------------------------------------------SCHLEIFEN --------------------------------------------        

        //Schneeflocken fallen lassen
        for (i = 0; i < 140; i++) {
        snowflakes[i] = new snow (Math.random() *800, Math.random()*600);
        }


        //Mehrere konstante Bäume
        for (let i: number = 0; i < 4; i++) {
            drawconstantTree(600 + i * 60, 500, "#088A29");
        }


        //zufällig bewegende Bäume
        for (let i: number = 0; i < 4; i++) {
            let x: number = 100 + Math.random() * 600;
            let y: number = 400 + Math.random() * 100;
            drawmovingTree(x, y, "#688A08")
        }

        //-------------Skifahrer fahren lassen----------- Schleife ändern und aufs Interface zugreifen
            for ( i = 0; i < 5; i++) {
            skierzwei[i] = new skier (800,100, Math.random() * 3 - 10, Math.random()* 3+5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
             }
   

        //Bild als Hintergrund speichern!! //
        image = crc2.getImageData(0, 0, 800, 600);

        animate();

    
}
    /*------------------------- FUNKTIONEN ---------------------------------*/

    //Funktion mehrere konstante Bäume platzieren 
    function drawconstantTree(_x: number, _y: number, _color: string): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 80, _y + 200);
        crc2.lineTo(_x - 80, _y + 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }


    //Funktion Bäume zufällig platzieren (zwischen 100 u 500 horizontal und 400 u 600 vertikal    
    function drawmovingTree(_x: number, _y: number, _color: string): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 80, _y + 200);
        crc2.lineTo(_x - 80, _y + 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }




    //---------------------------------- FUNKTION ANIMATE-----------------------------------------------    
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);



        //Schneeflocken fallen lassen     
        for (i = 0; i < snow.length; i++) {
            let s: snow = snowflakes[i];
            s.move();
            
        }


        //Skifahrer    
        for (i = 0; i < skier.length; i++) {
            let s: skier = skierzwei[i];
            s.move();
        }

        //Sonne bewegen
        for (i = 0; i < sun.length; i++) {
            let s: sun = sun[i];
            s.move();
        }
        window.setTimeout(animate, 20);
    }



}
