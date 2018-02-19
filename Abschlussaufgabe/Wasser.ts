/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace Wasserfall {
    export class Water {
        x: number;
        y: number;

       constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        } 

        drawwaterandpoisen(x: number, y: number): void {
            
        //Wasserfall zeichnen//
        crc2.beginPath();
        crc2.moveTo(400, 200);
        crc2.lineTo(500, 200);
        crc2.lineTo(580, 600);
        crc2.lineTo(340, 600)
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
            
  
    
            }
        }
    }