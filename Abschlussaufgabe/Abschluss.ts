/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Wasserfall {
    
    
    let Blub1: number = 0;
    let Blub2: number = 0;
    let Blub3: number = 0;
    let Blub4: number = 0;
    let Blub5: number = 0;
    let Blub6: number = 0;
    let Blub7: number = 0;
    let Blub8: number = 0;
    let Blub9: number = 0;
    

    //Interface
    interface Wasserfalllandschaft { //
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    }
    

    window.addEventListener("load", Wasser);
    let crc2: CanvasRenderingContext2D
    let fahrer: Wasserfalllandschaft[] = []; //variable, die heisst fahrer, typ: skifahrerinfo interface

    let arrayX: number[] = []; 
    let arrayY: number[] = [];
   
    let image: ImageData; //IMAGEDATA!! Nicht any


    //-----------------------------------------Funktion Canvas---------------------------------------------------
    function Wasser (): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        document.getElementById("Blub1").addEventListener("click", Blub1Click)
        document.getElementById("Blub3").addEventListener("click",Blub3Click)
        

        //Himmel malen
        crc2.fillStyle = "#CECEF6";
        crc2.fillRect(0, 0, 800, 40);
        crc2.fillStyle = "#D8CEF6";
        crc2.fillRect(0, 40, 800, 60);
        crc2.fillStyle = "#E3CEF6";
        crc2.fillRect(0, 60, 800, 100);
        crc2.fillStyle = "#ECCEF5";
        crc2.fillRect(0, 100, 800, 600);
        
        //Mond malen
        crc2.beginPath();
        crc2.arc(73, 73, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();
        crc2.stroke();

       
        //Chemikalien fallen lassen
        for (let i: number = 0; i < 300; i++) { //500 Chemikalien
            arrayX[i] = 400 + Math.random() * 100; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            arrayY[i] = 200 + Math.random() * 400;
        }
      

        //zufällig bewegende Bäume rechts
        for (let i: number = 0; i < 70; i++) {
            let x: number = 500 + Math.random() * 300; // platziert 500 +300 = 800 zwischen 500 und 800
            let y: number = 150 + Math.random() * 400; //  

            drawmovingTree(x, y, "#0A2A12")
        }
        
        
         //zufällig bewegende Bäume links
        for (let i: number = 0; i < 70; i++) {
            let x: number =  Math.random() * 400; // platziert 600 +200 = 800 zwischen 600 und 200
            let y: number = 150 + Math.random() * 400; //  

            drawmovingTree(x, y, "#0A2A12")
        }
        
     //Wasserfall zeichnen//
        crc2.beginPath();
        crc2.moveTo(400, 200);
        crc2.lineTo(500, 200);
        crc2.lineTo(600, 600);
        crc2.lineTo(300, 600)
        crc2.closePath();
        crc2.fillStyle = "#819FF7";
        crc2.fill();
        crc2.stroke();
        
        //See zeichnen
        crc2.beginPath();
        crc2.moveTo(0, 530);
        crc2.lineTo(800,530);
        crc2.lineTo(800,600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fillStyle = "#819FF7";
        crc2.fill();
        crc2.stroke();
        
     //Chemikalien Zeichnen
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(100, 500, 40, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(10, 570, 30, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(300, 540, 35, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(500, 490, 20, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(700, 590, 60, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(530, 400, 10, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(800, 500, 44, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(500, 570, 40, 0, 2 * Math.PI);
        crc2.fill();
        
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(630, 500, 20, 0, 2 * Math.PI);
        crc2.fill();
        
        
        
        

/*

        //-------------Skifahrer fahren lassen----------- Schleife ändern und aufs Interface zugreifen
        for (let i: number = 0; i < 10; i++) #FF0040
            //Zugriff auf Interface
            fahrer[i] = { //array greift oben zu
                x: 800, //Startpunkt
                y: 100,
                dx: Math.random() * 3 - 7,//random= zahl zw 0 und1 -> Veränderung zw -10 und -7 der mein X-Wert verringert
                dy: Math.random() * 3 + 5, //dx ist die Veränderung von x
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"//100% sättigung, 50% Helligkeit
            }
        */
        //
        
        


        image = crc2.getImageData(0, 0, 800, 600);

        animate();
        // alert("Oh Nein, jemand hat das Wasser mit giftigen Chemikalien verschmutzt.");
        // alert("Versuche so schnell wie möglich die Fische zu retten.");

    }


    /*------------------------- FUNKTIONEN ---------------------------------*/
    //------------------------------------------------------------------------

  
    function Blub1Click(): void {
        if (Blub1 == 0 ) {
            Blub1++;
            //Blub1.display = "none";
            alert("Yay lass das ZEug platzen");
        }
}
    
    function Blub3Click(): void{
        if (Blub1 == 0 ) {
            Blub1++;
            //Blub1.display = "none";
            alert("Yay lass das ZEug platzen");
        }
    }


    //Funktion Bäume zufällig platzieren (zwischen 100 u 500 horizontal und 400 u 600 vertikal    
    function drawmovingTree(_x: number, _y: number, _color: string): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 80, _y + 200);
        crc2.lineTo(_x - 80, _y + 200);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    
      //Wasserfall//
        crc2.beginPath();
        crc2.moveTo(400, 200);
        crc2.lineTo(500, 200);
        crc2.lineTo(600, 600);
        crc2.lineTo(300, 600)
        crc2.closePath();
        crc2.fillStyle = "#819FF7";
        crc2.fill();
        crc2.stroke();
    
    
  


    //Chemikalien zeichnen
    function drawpoisen(_x: number, _y: number): void {
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fill();
    }
    
   

    
    
   /* 

    //Skifahrer zeichnen
    function drawAndMoveSkier(_fahrer: Wasserfalllandschaft): void { //variable die aufs Interface zugreift 
        //X und Y Werte werden um dx und dy erweitert
        _fahrer.x += _fahrer.dx; //x werte werten um dx werte erweitert die ich definiert hab
        _fahrer.y += _fahrer.dy;

        crc2.beginPath();
        crc2.fillStyle = _fahrer.color; // Farbe oben zugreifen
        crc2.fillRect(_fahrer.x, _fahrer.y, 5, - 40);
        crc2.beginPath();
        crc2.arc(_fahrer.x + 3, _fahrer.y - 50, 10, 0, 10 * Math.PI);
        crc2.fillStyle = _fahrer.color;
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(_fahrer.x + 20, _fahrer.y - 10);
        crc2.lineTo(_fahrer.x - 20, _fahrer.y + 10)
        crc2.fill;
        crc2.stroke();
    }
    */

   


    






    //---------------------------------- FUNKTION ANIMATE-----------------------------------------------    
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);



        //Chemikalien fallen lassen     
        for (let i: number = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 200;
            }
            arrayY[i] += Math.random(); // andere Bewegungsmuster zu finden
            drawpoisen(arrayX[i], arrayY[i]);
        }


      /*  //Skifahrer    
        for (let i: number = 0; i < fahrer.length; i++) {
            drawAndMoveSkier(fahrer[i]);
            
            if (fahrer[i].y > 700) {
                fahrer[i].x = 800;
                fahrer[i].y = 230;
            }
        }

     
*/


        window.setTimeout(animate, 20);
    }

}

