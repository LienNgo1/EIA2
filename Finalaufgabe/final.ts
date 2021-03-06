/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace safethefish {
    
    
    let Blub1: number = 0;
    let Blub2: number = 0;
    let Blub3: number = 0;
    let Blub4: number = 0;
    let Blub5: number = 0;
    let Blub6: number = 0;
    let Blub7: number = 0;
    let Blub8: number = 0;
    let Blub9: number = 0;
    
window.addEventListener("load", Wasser);
    
    export let crc2: CanvasRenderingContext2D;
   
    // let crc2: CanvasRenderingContext2D
   // let fahrer: safethefish [] = []; //variable, die heisst fahrer, typ: skifahrerinfo interface

    let arrayX: number[] = []; 
    let arrayY: number[] = [];
    //let tree: Tree[] = [];
   
    let image: ImageData; //IMAGEDATA!! Nicht any


    //-----------------------------------------Funktion Canvas---------------------------------------------------
    function Wasser (): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        document.getElementById("Blub1").addEventListener("click", Blub1Click)
        document.getElementById("Blub3").addEventListener("click",Blub3Click)
        

        
       
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
  

        image = crc2.getImageData(0, 0, 800, 600);

        animate();
         alert("Oh Nein, jemand hat das Wasser mit giftigen Chemikalien verschmutzt.");
         alert("Versuche so schnell wie möglich die Fische zu retten.");

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