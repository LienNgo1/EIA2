/*Aufgabe 5: OOSkipiste
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 16.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe6 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    
    let i: number; //Zählvariable i, Datentyp: number
    let image: ImageData;
    
    let objects: MovingObjects[] = []; //Array für meine ganzen object: Moving Objects: Datentyp v-SUPERKLASSE
    
    let nSkiers: number = 5; //Variable für die Anzahl - 5 Skier 
    let nSun: number = 1; 
    let nSnow: number = 200;
    
    
    
 //-------------------- INIT FUNKTION------------------------- 
    
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

        drawconstantTree (10, 20,"#0A2A12");
        drawmovingTree (600, 600,"#0A2A12");
        
     
        //.--------Schleifen für Skier--------
      
        for (i = 0; i < nSkiers; i++) {  //5Skier - Zählervariable i zählt immer eins dazu
            let s: skier =  new skier (800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");//Neues Objekt von typ skier 
            objects.push(s); //Neue Objekt an neues Objekt array ranhängen
          
        }
        
        //--------Schleife für Schneeflocken-----
        for (i = 0; i < nSnow; i++) { //Zählervariable 0 zählt immer eins dazu
            let s: snow = new snow (Math.random() * 800, Math.random() * 600); //variable s vom typ snow - neue schneeflocke mit den parametern
            objects.push(s); //jedes neue Schneeflocke wird an das array rangehängt
        }
       
    
        //-------Bild als Hintergrund speichern---------
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    
    
 //-------------------FUNKTION ANIMATE ----------------------//
    
    function animate(): void { 
        crc2.clearRect(0, 0, 800, 600); // Hintergrund restaurieren
        crc2.putImageData(image, 0, 0); 
        
        for (i = 0 ;i< objects.length; i++){ //for schleife für objekte greif auf "objecte" array
            let s: MovingObjects = objects [i];
            s.move();
            }
        
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }
    
    
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

    
}
