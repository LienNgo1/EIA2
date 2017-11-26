/*Aufgabe 5: OOSkipiste
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 16.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe6{

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    
    let i: number;
    let image: ImageData;
    
    let objects = MovingObjects[] = [];
    
    let nSkiers: number = 5;
    let nClouds: number = 3;
    let nSnow: number = 140;
    
    let tree: Tree [] = [];
    
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        
        crc2 = canvas.getContext("2d");
        
        //Hintergrundbild
        //Himmel
        crc2.fillStyle = "#CEF6F5";
        crc2.fillRect(0, 0, 800, 600);
        
        //Sonne
        crc2.beginPath();
        crc2.arc(50, 50, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#F4FA58";
        crc2.fill();
        
        //Berge
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
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);
        
        for (i = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.move();
        }
        //Baeume zeichnen
        for (i = 0; i < tree.length; i++) {
            let s: Tree = tree[i];
            s.draw();
        }
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }
}
