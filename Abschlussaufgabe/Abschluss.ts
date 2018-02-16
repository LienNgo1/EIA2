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

    let Baum1: number = 0;
    let Baum2: number = 0;
    let saveBG: ImageData;
    
    let baumbaum: number = 0;
    
    window.addEventListener("load", Wasser);
    export let crc2: CanvasRenderingContext2D;

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
        document.getElementById("Blub1").addEventListener("touchstart", Blub1Click)
        
        document.getElementById("Blub2").addEventListener("click", Blub2Click)
        document.getElementById("Blub3").addEventListener("click", Blub3Click)
        document.getElementById("Blub4").addEventListener("click", Blub4Click)
        document.getElementById("Blub5").addEventListener("click", Blub5Click)
        document.getElementById("Blub6").addEventListener("click", Blub6Click)
        
        document.getElementById("Baum1").addEventListener("click", LosungClick)
        document.getElementById("Baum2").addEventListener("click", LosungClick)
        
        //Hintergrund malen
        let b: Background = new Background(0, 0);
        b.drawBackground(100, 100);

       
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
        
        //Holzstämme malen
        crc2.beginPath();
        crc2.moveTo(150, 470);
        //crc2.bezierCurveTo(38,45,89,4,65,56);
        crc2.lineTo(300,470);
        crc2.lineTo(300,550);
        crc2.lineTo(150,550);
        crc2.closePath();
        crc2.fillStyle = "#61380B";
        crc2.fill();
        crc2.stroke();

        //Wasser und Gift malen
        let w: Water = new Water (0, 0);
        w.drawwaterandpoisen(100, 100);

        image = crc2.getImageData(0, 0, 800, 600);

        animate();
       //  alert("Oh Nein, jemand hat das Wasser mit giftigen Chemikalien verschmutzt.");
       //  alert("Versuche so schnell wie möglich die Fische zu retten.");

    }


    /*------------------------- FUNKTIONEN ---------------------------------*/
    //------------------------------------------------------------------------
    function LosungClick  (): void {
        if ( Baum2 == 0 && Baum1 == 0) { 
            Baum2++;
            Baum1++;
            //crc2.putImageData(saveBG, 0, 0);
            drawwoodonwater();
            alert("yaaaay du hast die Fische gerettet"); 
            alert("jetzt fließen keine giftgrünen Chemikalien mehr rum, super!");
            arrayX =[];          
    }
        }
    
  
    

     function drawwoodonwater(): void{  
        crc2.save();   
        crc2.beginPath();
        crc2.moveTo(370, 140);
        //crc2.bezierCurveTo(38,45,89,4,65,56);
        crc2.lineTo(520,140);
        crc2.lineTo(520,200);
        crc2.lineTo(370,200);
        crc2.closePath();
        crc2.fillStyle = "#61380B";
        crc2.fill();
        crc2.stroke();
            
           }
    

  
    function Blub1Click(): void {
        if (Blub1 == 0 ) {
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
    
      function Blub2Click(): void {
        if (Blub2 == 0 ) {
            Blub2++;
            alert("Los los los");
        }
    }
      function Blub3Click(): void {
        if (Blub3 == 0 ) {
            Blub3++;
            alert("Warum gehen die Dinger denn nicht??");
        }
    }
      function Blub4Click(): void {
        if (Blub4 == 0 ) {
            Blub4++;
            alert("Irgendetwas ist faul");
        }
    }
      function Blub5Click(): void {
        if (Blub5 == 0 ) {
            Blub5++;
            alert("Es muss wohl noch einen anderen Weg geben");
        }
    }  function Blub6Click(): void {
        if (Blub6 == 0 ) {
            Blub6++;
            alert("Die sind ja zäh");
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
    

    //Chemikalien zeichnen
    function drawpoisen(_x: number, _y: number): void {
        crc2.fillStyle = "#2EFE2E";
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fill();
    }   

     function waterstopp():void{
        for (let i: number = 0; i < 0; i++) { //500 Chemikalien
            arrayX[i] = 0; //0 Anfangspunkt - geht bis in den Bereich 800 (0+800)
            arrayY[i] = 0;
            
            }
        }


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
        
        
       
    


        window.setTimeout(animate, 20);
    }

}

