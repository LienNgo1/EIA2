/*Aufgabe: Aufgabe: 3 Schneegestöber
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 25.10.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace skiski {

    window.addEventListener("load", skipiste2);
    let crc2: CanvasRenderingContext2D
    
    let arrayX: number[] = [];
    let arrayY: number[] = [];
    let sunX : number[] = [];
    let sunY: number[] = [];
    let skierX: number[] = [];
    let skierY: number[] = [];
    let image: ImageData; //IMAGEDATA!! Nicht any
    

    
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
        

        //Sonne//
        //crc2.beginPath();
        //crc2.arc(73, 73, 70, 0, 2 * Math.PI);
        //crc2.fillStyle = "#FFFF00";
        //crc2.fill();
        //crc2.stroke();


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

// -------------------------------------------SCHLEIFEN -------------------------------------------------//
        
        //Sonne untergehen lassen, da keine Wolken!!
        for (let i: number = 0; i < 1; i++) { 
            sunX[i] = 80; 
            sunY[i] = 80;
        }
       

        //Schneeflocken fallen lassen
        for (let i: number = 0; i < 500; i++) { //500 Schneeflocken
            arrayX[i] = 0 + Math.random() * 800; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            arrayY[i] = 0 + Math.random() * 600;
       // drawSnowflakes(arrayX[i], arrayY[i], 5, 0, 5 * Math.PI, "#ffffff");
        }
        
        
        //Skifahrer fahren lassen
        for (let i: number = 0; i < 10; i++) {
            skierX[i] = 700 + Math.random() * 100; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            skierY[i] = 200 + Math.random() * 600;    
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
        
        
        image = crc2.getImageData(0, 0, 800, 600);

        animate();
  }


    /*------------------------- FUNKTIONEN ---------------------------------*/
    
      //Sonne zeichnen
    function drawsun(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 70, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
        crc2.stroke();
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
    
    
    //Schneeflocken zeichnen
    function drawsnowflake(_x: number, _y: number): void {
        crc2.fillStyle = "#FFFFFF";
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fill();
    }
    
    
    //Skifahrer zeichnen
    function drawSkier(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#070B19";
        crc2.fillRect(_x, _y, 5, - 40);
        crc2.beginPath();
        crc2.arc(_x + 3, _y - 50, 10, 0, 10 * Math.PI);
        crc2.fillStyle = "#070B19";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(_x + 20, _y - 10);
        crc2.lineTo(_x - 20, _y + 10)
        crc2.fill;
        crc2.stroke();
    }
    
    
  
    

 

 //---------------------------------- FUNKTION ANIMATE-----------------------------------------------//
       
    
     function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);
         
       
         
     //Schneeflocken fallen lassen     
        for (let i: number = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 0;
            }
            arrayY[i] += Math.random(); // andere Bewegungsmuster zu finden
            drawsnowflake(arrayX[i], arrayY[i]);
        }
         
         
      //Skifahrer    
      for (let i: number = 0; i < skierX.length; i++) {
            skierX[i] -= 2;
            skierY[i] += 3;
          
            drawSkier(skierX[i], skierY[i]);
            if (skierY[i] > 600){  //soll von 0 bis 600 runterfahren
                skierY[i] = 100; //Startpunkt 100 auf der Y Achse, nachdem er unten angekommen ist 
                skierX[i] = 800; //Startpunkt 800 auf der X Achse, nachdem er unten angekommen ist 
            }
        }
         
         //Sonne bewegen
         for (let i: number = 0; i < sunX.length; i++) {
            if (sunY[i] > 600) { //
                sunY[i] = 10;
               
            }
             //sunY[i] += Math.random();
            sunY[i] += 1; // immer 1 wird zu Y dazugezählt
            sunX[i] += 3; //immer 3 wird zu X dazugezählt
            drawsun(sunX[i], sunY[i]);
             
            
             
             
          }
         
       
         
         window.setTimeout(animate, 10);
    }

}
    
    